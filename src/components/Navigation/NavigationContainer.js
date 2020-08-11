import { connect } from 'react-redux';
import Profile from './Navigation';

   
    let mapStateToProps =(state) =>{
        return{
            sideBar: state.sideBar,
            profile: state.profilePage.profile,
            auth: state.auth,
        }
    }

    const ProfileContainer =  connect(mapStateToProps)(Profile)


export default ProfileContainer;