import React from "react";
import userPhoto from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";

const User = ({ user, followingInProgress, unfollow, follow }) => {
  return (
    <div className="userspage__wrapp">
      <div className="userspage__wrapp-avatar">
        <NavLink to={`/content/${user.id}`}>
          <img
            src={user.photos.small != null ? user.photos.small : userPhoto}
            alt="img"
          />
        </NavLink>
        <div>
          {user.followed ? (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                unfollow(user.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                follow(user.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </div>
      <div className="userspage__wrapp-info">
        <div className="userspage__wrapp-info-left">
          <div>{user.name}</div>
          <div>{user.status}</div>
        </div>
        <div className="userspage__wrapp-info-right">
          {/* <div>{'u.location.counrty'},</div>
                        <div>{'u.location.city'}</div> */}
        </div>
      </div>
    </div>
  );
};
export default User;
