import { connect } from "react-redux";
import SidebarProfile from "./Navigation";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import React, { Component } from "react";
import { getSideBar } from "../Redux/sidebar-reducer";
import { FriendsType, ProfileType, UserType } from "../../Types/Types";
import { AppStateType } from "../Redux/redux-store";

export type SideBarType = {
  friends: Array<FriendsType>
  profile: ProfileType | null
};

type MapsStatePropsType = {
  auth: boolean
  sideBar: SideBarType
  profile: ProfileType | null
  users: Array<UserType>
  authUserId: number 
};

type MapDispatchPropsType={
  getSideBar:(userId: number)=>void
}

type PropsType = MapsStatePropsType & MapDispatchPropsType & AppStateType;

class ProfileContainer extends Component<PropsType> {
  render() {
    console.log(this.props);

    return (
      <SidebarProfile
        profile={this.props.profile}
        authUserId={this.props.authUserId}
        sideBar={this.props.sideBar}
        auth={this.props.auth}
        props={this.props}
      />
    );
  }
}

let mapStateToProps = (state:any): MapsStatePropsType => {
  return {
    sideBar: state.sideBar,
    profile: state.profilePage.profile,
    auth: state.auth.isAuth,
    users: state.usersPage.users,
    authUserId: state.auth.userId,
  };
};

export default compose(
  withRouter,
  connect<MapsStatePropsType,MapDispatchPropsType,AppStateType>(mapStateToProps, { getSideBar })
)(ProfileContainer);
