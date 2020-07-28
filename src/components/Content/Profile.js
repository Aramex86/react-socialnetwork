import React from "react";
import MyPostsContainer from "./My_postsContainer";
import UserProfile from "./UserProfile";
import { savePhoto } from "../Redux/profile-reducer";

const Content = ({profile,status,updateStatus,isOwner,savePhoto,saveProfile,...props}) => {
  return (
    <div>
      <div className="profile">
        {/*  <ProfileInfo/> */}
        <UserProfile
          profile={profile}
          status={status}
          updateStatus={updateStatus}
          isOwner={isOwner}
          savePhoto={savePhoto}
          saveProfile={saveProfile}
        />
      </div>
      <div className="profile__posts">
        <MyPostsContainer 
        />
      </div>
    </div>
  );
};

export default Content;
