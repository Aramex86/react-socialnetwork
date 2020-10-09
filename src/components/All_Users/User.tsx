import React, { FC } from "react";
import userPhoto from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";
import { UserType } from "../../Types/Types";

type PropsType={
  follow:(userId:number)=>void
  unfollow:(userId:number)=>void
  followingInProgress:Array<number>
  user:UserType
}


const User:FC<PropsType> = ({ user, followingInProgress, unfollow, follow }) => {
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
              disabled={followingInProgress.some((id:number) => id === user.id)}
              onClick={() => {
                unfollow(user.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some((id:number) => id === user.id)}
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
