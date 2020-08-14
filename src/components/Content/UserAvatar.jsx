import React from 'react';
import userPhoto from "../../assets/images/user.png";

const UserAvatar = (props) => {

  console.log(props);
  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };
    
    return (
        <div className="userinfo__description-avatar">
        <div>
          {" "}
          {props.profile.photos.small != null ? (
            <img src={props.profile.photos.large} alt="avatar" />
          ) : (
            <img src={userPhoto} alt="avatar" className="userphoto" />
          )}{" "}
          {props.isOwner && (
            <input type={"file"} onChange={onMainPhotoSelected} />
          )}
        </div>
      </div>
    )
}

export default UserAvatar
