import React from "react";
import MyPostsContainer from "./My_postsContainer";
import UserInfo from "./UserProfile";

const Content = ({profile,status,updateStatus,...props}) => {
  return (
    <div>
      <div className="profile">
        {/*  <ProfileInfo/> */}
        <UserInfo
          profile={profile}
          status={status}
          updateStatus={updateStatus}
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
