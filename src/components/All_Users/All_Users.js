import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const AllUsers = ({
  currentPage,
  totalUserCount,
  pageSize,
  onPageChanged,
  users,
  ...props
}) => {
  return (
    <div className="Alluser">
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
       // totalUserCount={totalUserCount}
        pageSize={pageSize}
        totalItemsCount={totalUserCount}
      />
      {users.map((u, i) => (
        <User
          key={i}
          user={u}
          followingInProgress={props.followingInProgress}
          unfollow={props.unfollow}
          follow={props.follow}
        />
      ))}
    </div>
  );
};

export default AllUsers;
