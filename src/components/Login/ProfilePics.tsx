import React from "react";
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';

const ProfilePics = () => {
  return (
    <div className="profile__pic">
      <div className="profilepic__header">
        <h3 className="profilepic__header-heading">SNetwork</h3>
        <p className="profilepic__header-subheading">Recent Logins</p>
      </div>
      <div className='profile__cards'>
          <div className='profile__cards-card'>
              <div className='profile__cards-card-body'><AddCircleRoundedIcon/></div>
              <div className='profile__cards-card-footer'>Add Account</div>
          </div>
          <div className='profile__cards-card'>
              <div className='profile__cards-card-body'><AddCircleRoundedIcon/></div>
              <div className='profile__cards-card-footer'>Add Account</div>
          </div>
      </div>
    </div>
  );
};

export default ProfilePics;
