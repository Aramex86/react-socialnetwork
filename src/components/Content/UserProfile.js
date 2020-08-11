import React, { useState } from "react";
import Prealoder from "../common/Prealoder/Prealoder";
import like from "../../assets/images/like.png";
import unlike from "../../assets/images/unlike.png";
import userPhoto from "../../assets/images/user.png";

//import UserChangeStatus from "./UserChangeStatus";
import UserChangeStatusWithHooks from "./UserChangeStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";
import UserAvatar from './UserAvatar';

const UserInfo = ({ saveProfile, ...props }) => {
  const [editMode, setEditMode] = useState(false);

  if (!props.profile) {
    return <Prealoder />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

  const onSubmit =(formData) => {
     saveProfile(formData).then(()=>{
      setEditMode(false);
     });
  };

  return (
    <div>
      <div className="userinfo__description">
        <UserAvatar onMainPhotoSelected={onMainPhotoSelected} profile={props.profile}/>
        <div className="userinfo__description-userinfo">
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
         
          <div className="userinfo__description-contacts">
            <b>Contacts</b>:
            {Object.keys(props.profile.contacts).map((key) => {
              return (
                <Contacts
                  key={key}
                  contactTitle={key}
                  contactValue={props.profile.contacts[key]}
                />
              );
            })}
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
          <button onClick={goToEditMode}>edit</button>
        </div>
      )}
      <div className="userinfo__description-name">{profile.fullName}</div>
       <div className="userinfo__description-status">
            <div style={{ display: "flex" }}>
              <span> Status:</span>{" "}
              <UserChangeStatusWithHooks
                status={props.status}
                updateStatus={props.updateStatus}
              />
            </div>
          </div>
      <b>About me :</b> {profile.aboutMe}
      <div className="userinfo__description-about">
        <div className="userinfo__description-about-joblook">
          <div>Loking for job</div>
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
          {profile.lookingForAJobDescription}
        </div>
      </div>
    </div>
  );
};

const Contacts = ({ contactTitle, contactValue }) => {
  return (
    <div className="contacts_align">
      <b>{contactTitle}</b>:{contactValue}
    </div>
  );
};

export default UserInfo;
