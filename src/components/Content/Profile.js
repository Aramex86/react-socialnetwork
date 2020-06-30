import React from "react";
import MyPostsContainer from "./My_postsContainer";
import UserInfo from "./UserProfile";

const Content = (props) => {
  return (
    <div>
      <div className="profile">
        {/*  <ProfileInfo/> */}
        <UserInfo
          profile={props.profile}
          status={props.status}
          updateStatus={props.updateStatus} /* isAuth={props.isAuth} */
        />
      </div>
      <div className="profile__posts">
        <MyPostsContainer /* store={props.store} */ /* posts={props.posts}
                newText={props.posts.newText}
                dispatch={props.dispatch} */
        />
      </div>
    </div>
  );
};

export default Content;
