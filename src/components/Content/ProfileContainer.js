import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {setUserProfile,getProfile} from '../Redux/profile-reducer';
import { withRouter } from 'react-router-dom';


class ContentComponenet extends React.Component {

    componentDidMount(){
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 2;
        }
        this.props.getProfile(userId);
        // profileAPI.getProfile(userId)
        // .then(res => {
        //     this.props.setUserProfile(res);
        // });
    }


    render(){
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

let mapStateToProps =(state) =>{
 return{
    profile: state.profilePage.profile
 }
}

let WithRouterDataContainer = withRouter(ContentComponenet)

export default  connect(mapStateToProps,{setUserProfile,getProfile}) (WithRouterDataContainer);