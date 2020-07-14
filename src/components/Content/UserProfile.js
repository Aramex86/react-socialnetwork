import React from "react";
import Prealoder from "../common/Prealoder/Prealoder";
import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import github from "../../assets/images/github.png";
import twitter from "../../assets/images/twitter.png";
import like from "../../assets/images/like.png";
import unlike from "../../assets/images/unlike.png";
import userPhoto from "../../assets/images/user.png";
//import UserChangeStatus from "./UserChangeStatus";
import UserChangeStatusWithHooks from "./UserChangeStatusWithHooks";

const UserInfo = (props) => {
  if (!props.profile) {
    return <Prealoder />;
  }
  return (
    <div>
      <div className="userinfo__description">
        <div className="userinfo__description-avatar">
          <div>
            {" "}
            {props.profile.photos.small != null ? (
              <img src={props.profile.photos.small} alt="avatar" />
            ) : (
              <img src={userPhoto} alt="avata" className="userphoto" />
            )}{" "}
          </div>
        </div>
        <div className="userinfo__description-userinfo">
          <div className="userinfo__description-name">
            {props.profile.fullName}
          </div>
          <div className="userinfo__description-status">
            <span>About me :</span> {props.profile.aboutMe}
            <div style={{display:"flex"}}>
            <span> Status:</span> <UserChangeStatusWithHooks status={props.status}  updateStatus={props.updateStatus}/>
            </div>
          </div>
          <div className="userinfo__description-contacts">
            <ul className="social">
              <li>
                <a href={props.profile.contacts.facebook}>
                  <img src={facebook} alt="facebook" />
                </a>
              </li>
              <li>
                <a href={props.profile.contacts.twitter}>
                  <img src={twitter} alt="twitter" />
                </a>
              </li>
              <li>
                <a href={props.profile.contacts.instagram}>
                  <img src={instagram} alt="instagram " />
                </a>
              </li>
              <li>
                <a href={props.profile.contacts.github}>
                  <img src={github} alt="github" />
                </a>
              </li>
            </ul>
          </div>
          <div className="userinfo__description-about">
            <div className="userinfo__description-about-joblook">
              <div>Loking for job</div>
              <span>
                {props.profile.lookingForAJob ? (
                  <img src={like} alt="like" className="like" />
                ) : (
                  <img src={unlike} alt="unlike" className="unlike" />
                )}
              </span>
            </div>
            <div className="userinfo__description-about-jobdesc">
              <h5>Description:</h5>
              {props.profile.lookingForAJobDescription}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
