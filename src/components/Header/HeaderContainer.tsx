import React from "react";
import Header from "./Header";
import { connect} from "react-redux";
import { logout } from "../Redux/auth-reducer";
import {compose} from 'redux';
import { withRouter } from "react-router";
import { ProfileType } from "../../Types/Types";
import { AppStateType } from "../Redux/redux-store";



 type MapStateToPropsType={
  isAuth:boolean
  login:()=>void
  profile:ProfileType
  authUserId:number
  fullName:string
  photos:string
  compareUserId:()=>void
}

type MapDispatchToPropsType={
  logout:()=>void
}

type PropsType= MapStateToPropsType & MapDispatchToPropsType& AppStateType;


class HeaderContainer extends React.Component<PropsType> {
  render(){
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state:AppStateType)=> ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  profile:state.profilePage.profile,
  authUserId: state.auth.userId
});

export default compose(
  withRouter,
  connect(mapStateToProps, { logout }),
) (HeaderContainer)
