import { connect } from 'react-redux';
import AllUsers from './All_Users';
import { followAC,unfollowAC,setUsersAC,setCurrentPageAC,setTotalUsersCountAC } from '../Redux/users-reducer';


// Step 2) Create functions take state
export let mapStateToProps=(state)=>{
    return{
        users:state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUserCount:state.usersPage.totalUserCount,
        currentPage:state.usersPage.currentPage
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
        },
        setCurrentPage:(pageNumber)=>{
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount:(totalCount)=>{
            dispatch(setTotalUsersCountAC(totalCount))
        }


    }
}

// Step 1) Create component cotainer with connect 
const AllUsersContainer = connect(mapStateToProps,mapDispachToProps)(AllUsers)

export default AllUsersContainer;