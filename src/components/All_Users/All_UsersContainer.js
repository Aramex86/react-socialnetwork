import { connect } from 'react-redux';
import AllUsers from './All_Users';
import { followAC,unfollowAC,setUsersAC } from '../Redux/users-reducer';


// Step 2) Create functions take state
export let mapStateToProps=(state)=>{
    return{
        users:state.usersPage.users
    }
}

//Step 3) Dispatch action from reducer
export let mapDispachToProps=(dispatch)=>{
    return{
        follow:(userId)=>{
            dispatch(followAC(userId));
        },
        unfollow:(userId)=>{
            dispatch(unfollowAC(userId));
        },
        setUsers:(users)=>{
            dispatch(setUsersAC(users));
        }


    }
}

// Step 1) Create component cotainer with connect 
const AllUsersContainer = connect(mapStateToProps,mapDispachToProps)(AllUsers)

export default AllUsersContainer;