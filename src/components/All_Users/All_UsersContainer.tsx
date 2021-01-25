import React from "react";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  setPrealoader,
  toggleFollowngProggress,
  requestUsers,
} from "../Redux/users-reducer";
import AllUsers from "./All_Users";
import Prealoder from "../common/Prealoder/Prealoder";
//import { compose } from "redux";
// import WithAuthRedirect from "../HOC/WithAuthRedirect";
import {
  getUsers,
  getPageSize,
  getTotalUserCount,
  getCurrentPage,
  getIsFetching,
  getFollowingInProgress,
} from "../Redux/Selectors/users-selector";
import { UserType } from "../../Types/Types";
import { AppStateType } from "../Redux/redux-store";
import { compose } from "redux";
//import WithAuthRedirect from "../HOC/WithAuthRedirect";

type MapStatePropsType = {
  currentPage: number;
  pageSize: number;
  isFetching: boolean;
  totalUserCount: number;
  users: Array<UserType>;
  followingInProgress: Array<number>;
};
type MapDispatchPropsType ={
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  setUsers:(users: Array<UserType>)=>void
  setCurrentPage:(currentPage: number)=>void
  setTotalUsersCount:(totalUserCount: number)=>void
  setPrealoader:(isFetching: boolean)=>void
  toggleFollowngProggress:(isFetching: boolean, userId: number)=>void
  requestUsers:(currentPage:number,pageSize:number)=>void
  //getUsers:()=>void
};

type OwnPropsType = {
  //Props given directly to component
  title: string;
};

type PropsType = MapStatePropsType &
  MapDispatchPropsType &
  OwnPropsType &
  AppStateType;

// class component for API calls

class AllUsersApiCall extends React.Component<PropsType> {
  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber: number) => {
    this.props.requestUsers(pageNumber, this.props.pageSize);

    //     this.props.setPrealoader(true);
    //     this.props.setCurrentPage(pageNumber);
    //   usersAPI.getPages(pageNumber,this.props.pageSize).then(res => {
    //         this.props.setPrealoader(false);
    //         this.props.setUsers(res.items);
    //          });
  };
  render() {
    return (
      <>
        {/* <h2>{this.props.title}</h2> */}
        {this.props.isFetching ? <Prealoder /> : null}
        <AllUsers
          totalUserCount={this.props.totalUserCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followingInProgress={this.props.followingInProgress}
          // isFetching={this.props.isFetching}
        />
      </>
    );
  }
}

// Step 2) Create functions take state
// export let mapStateToProps = (state) => {
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUserCount: state.usersPage.totalUserCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     followingInProgress: state.usersPage.followingInProgress,
//   };
// };
export let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUserCount: getTotalUserCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

//Step 3) Dispatch action from reducer
/* export let mapDispachToProps=(dispatch)=>{
    return{
        follow:(userId)=>{
            dispatch(followAC(userId));
        },
        unfollow:(userId)=>{
            dispatch(unfollowAC(userId));
        },
        setUsers:(users)=>{
            dispatch(setUsersAC(users));
        },
        setCurrentPage:(pageNumber)=>{
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount:(totalCount)=>{
            dispatch(setTotalUsersCountAC(totalCount))
        },
        togglePrealoader:(isFetching)=>{
            dispatch(setPrealoaderAC(isFetching))
        }


    }
} */

// Step 1) Create component cotainer with connect
export default compose(
 // WithAuthRedirect,
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  setPrealoader,
  toggleFollowngProggress,
  requestUsers
})(AllUsersApiCall));

 //export default compose(
  // WithAuthRedirect,
//   connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
//     mapStateToProps,
//     {
//       follow,
//       unfollow,
//       setUsers,
//       setCurrentPage,
//       setTotalUsersCount,
//       setPrealoader,
//       toggleFollowngProggress,
//       requestUsers,
//     }
//   )
// )(AllUsersApiCall);
