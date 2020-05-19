import React from 'react';
import { connect } from 'react-redux';
import Profile from './Navigation';

   
    let mapStateToProps =(state) =>{
        return{
            sideBar: state.sideBar
        }
    }

    const ProfileContainer =  connect(mapStateToProps)(Profile)


export default ProfileContainer;