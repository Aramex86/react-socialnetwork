import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { FriendsType } from "../../Types/Types";

const Friends: FC<FriendsType> = ({ img, name }) => {
  return (
    <div>
      <NavLink to="/dialogs">
        <img src={img} alt="avatar" />
        <span>{name}</span>
      </NavLink>
    </div>
  );
};

export default Friends;
