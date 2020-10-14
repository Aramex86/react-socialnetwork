import React, { FC } from "react";
import { ProfileType } from "../../Types/Types";

type SideBarHeaderType = {
  profile: ProfileType | null;
  authUserId: number;
  props: any;
};

const SideBarHeader: FC<SideBarHeaderType> = ({
  profile,
  authUserId,
  ...props
}) => {
  const userProfile = profile ? profile.userId : "";

  const compareUserId = (userId: number, userProfile: number | string) => {
    if (userId === userProfile) {
      return (
        <>
          <div className="nav__wrapper-header">
            <img
              src="https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
              alt="img"
            ></img>
            <div className="profile__shortinfo">
              {profile ? (
                <img
                  src={profile.photos.large}
                  alt="avatar"
                  className="profile__shortinfo-img"
                />
              ) : (
                ""
              )}

              <p>{profile ? profile.fullName : ""}</p>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="nav__wrapper-header">
            <img
              src="https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
              alt="img"
            ></img>
            <div className="profile__shortinfo">
              {profile ? (
                <img
                  src={profile.photos.large}
                  alt="avatar"
                  className="profile__shortinfo-img"
                />
              ) : (
                ""
              )}

              <p>{profile ? profile.fullName : ""}</p>
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <div className="nav__wrapper-header">
      {compareUserId(authUserId, userProfile)}
      {/* <img
                src='https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
                alt='img'></img>
            <div className='profile__shortinfo'>
            {profile?<img
                    src={profile.photos.large}
                    alt='avatar'
                    className='profile__shortinfo-img'/>:''}
                
                <p>{profile?profile.fullName:''}</p>
            </div> */}
    </div>
  );
};

export default SideBarHeader;
