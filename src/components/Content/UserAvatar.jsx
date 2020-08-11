import React from 'react';
import userPhoto from "../../assets/images/user.png";

const UserAvatar = (props) => {
    console.log(props)
    return (
        <div className="userinfo__description-avatar">
        <div>
          {" "}
          {props.profile.photos.small != null ? (
            <img src={props.profile.photos.small} alt="avatar" />
          ) : (
            <img src={userPhoto} alt="avatar" className="userphoto" />
          )}{" "}
          {props.isOwner && (
            <input type={"file"} /* onChange={onMainPhotoSelected} */ />
          )}
        </div>
      </div>
    )
}

export default UserAvatar
