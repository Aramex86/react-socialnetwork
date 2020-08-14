import React, { useState } from "react";
import Prealoder from "../common/Prealoder/Prealoder";
import like from "../../assets/images/like.png";
import unlike from "../../assets/images/unlike.png";
import pencil from "../../assets/images/pencil.png";
import pencilSmall from "../../assets/images/pencil-small.png";

//import UserChangeStatus from "./UserChangeStatus";
import UserChangeStatusWithHooks from "./UserChangeStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";
import UserAvatar from './UserAvatar';
import { savePhoto } from "../Redux/profile-reducer";


const UserInfo = ({ saveProfile, ...props }) => {
  const [editMode, setEditMode] = useState(false);

  if (!props.profile) {
    return <Prealoder />;
  }

  

  const onSubmit =(formData) => {
     saveProfile(formData).then(()=>{
      setEditMode(false);
     });
  };

  return (
    <div>
      <div className="userinfo__description">
        <UserAvatar  profile={props.profile} savePhoto={savePhoto} isOwner={props.isOwner}/>

        <div className="userinfo__description-userinfo">
          <div className="userinfo__description-about">
          {editMode ? (
            <ProfileDataForm
              initialValues={props.profile}
              profile={props.profile}
              onSubmit={onSubmit}
            />
          ) : (
            <ProfileData
              goToEditMode={() => {
                setEditMode(true);
              }}
              profile={props.profile}
              isOwner={props.isOwner}
              status={props.status}
              updateStatus={props.updateStatus}
            />
          )}
         </div>
        </div>
      </div>
    </div>
  );
};

const ProfileData = ({ profile, isOwner, goToEditMode,...props }) => {

  return (
    <div>
      {isOwner && (
        <div>
          <button onClick={goToEditMode} className="edit-btn"><img src={pencil} alt="x"/></button>
        </div>
      )}
      <div className="userinfo__description-name">{profile.fullName}</div>
       <div className="userinfo__description-status">
            <div style={{ display: "flex" }}>
              <span> Status: </span>{" "}
              <UserChangeStatusWithHooks
                status={props.status}
                updateStatus={props.updateStatus}
              />
              <img src={pencilSmall} alt='x'/>
            </div>
          </div>

     <div className="about_me"><b>About me: </b> <p>{profile.aboutMe}</p></div> 
      <div className="userinfo__description-about_job">
        <div className="userinfo__description-about-joblook">
          <span>Loking for job :</span>
          <span>
            {profile.lookingForAJob ? (
              <img src={like} alt="like" className="like" />
            ) : (
              <img src={unlike} alt="unlike" className="unlike" />
            )}
          </span>
        </div>
        <div className="userinfo__description-about-jobdesc">
          <b>My professional skills:</b>
          <p>{profile.lookingForAJobDescription}</p>
        </div>
        <div className="userinfo__description-contacts">
            <b>Contacts</b>:
            <div className="userinfo__description-contacts-list">
            {Object.keys(profile.contacts).map((key) => {
              return (
                <Contacts
                  key={key}
                  contactTitle={key}
                  contactValue={profile.contacts[key]}
                />
              );
            })}
            </div>
          </div>
      </div>
    </div>
  );
};
const Contacts = ({ contactTitle, contactValue }) => {
  return (
    <div className="contacts_align">
      <b>{contactTitle}</b>: {contactValue?<span className="value_style">{contactValue},</span>:''}
    </div>
  )};


export default UserInfo;
