import React, { FC } from "react";
import { UserType } from "../../Types/Types";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

type PropsType = {
  totalUserCount: number;
  pageSize: number;
  currentPage: number;
  onPageChanged: (PageNumber: number) => void;
  users: Array<UserType>;
  followingInProgress: Array<number>;
  follow: (userId:number) => void;
  unfollow: (userId:number) => void;
};

const AllUsers: FC<PropsType> = ({
  currentPage,
  totalUserCount,
  pageSize,
  onPageChanged,
  users,
  follow,
  unfollow,
  ...props
}) => {
  return (
    <div className="Alluser">
      {users.map((u, i) => (
        <User
          key={i}
          user={u}
          followingInProgress={props.followingInProgress}
          unfollow={unfollow}
          follow={follow}
        />
      ))}
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalUserCount={totalUserCount}
        pageSize={pageSize}
        totalItemsCount={totalUserCount}
      />
    </div>
  );
};

export default AllUsers;
