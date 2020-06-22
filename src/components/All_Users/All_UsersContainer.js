import React from 'react';
import { connect } from 'react-redux';
import { follow,unfollow,setUsers,setCurrentPage,setTotalUsersCount,setPrealoader,toggleFollowngProggress,getUsers } from '../Redux/users-reducer';
import AllUsers from './All_Users';
import Prealoder from '../common/Prealoder/Prealoder';

// class component for API calls

class AllUsersApiCall extends React.Component{
    componentDidMount(){
        this.props.getUsers(this.props.currentPage,this.props.pageSize);
    }

    onPageChanged =(pageNumber)=>{
        this.props.getUsers(pageNumber,this.props.pageSize);
        
    //     this.props.setPrealoader(true);
    //     this.props.setCurrentPage(pageNumber);
    //   usersAPI.getPages(pageNumber,this.props.pageSize).then(res => {
    //         this.props.setPrealoader(false);     
    //         this.props.setUsers(res.items);
    //          });
    }
    render(){
        return<>
        {this.props.isFetching? <Prealoder/>:null}
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
    }
}


// Step 2) Create functions take state
export let mapStateToProps=(state)=>{
    return{
        users:state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUserCount:state.usersPage.totalUserCount,
        currentPage:state.usersPage.currentPage,
        isFetching:state.usersPage.isFetching,
        followingInProgress:state.usersPage.followingInProgress

    }
}

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
const AllUsersContainer = connect(mapStateToProps,{
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setPrealoader,
    toggleFollowngProggress,
    getUsers
})(AllUsersApiCall)

export default AllUsersContainer;