import React from 'react';
import { connect } from 'react-redux';
import { followAC,unfollowAC,setUsersAC,setCurrentPageAC,setTotalUsersCountAC,setPrealoaderAC } from '../Redux/users-reducer';
import AllUsers from './All_Users';
import * as axios from 'axios';
import Prealoder from '../common/Prealoder/Prealoder';

// class component for API calls

class AllUsersApiCall extends React.Component{
    componentDidMount(){
        //Prealoader
        this.props.togglePrealoader(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(res => {
            console.log(res);
            this.props.togglePrealoader(false);
             this.props.setUsers(res.data.items);
             this.props.setTotalUsersCount(res.data.totalCount);
             });
    }
    onPageChanged =(pageNumber)=>{
        this.props.togglePrealoader(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(res => {
            this.props.togglePrealoader(false);     
            this.props.setUsers(res.data.items);
             });
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
        isFetching:state.usersPage.isFetching
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
        },
        togglePrealoader:(isFetching)=>{
            dispatch(setPrealoaderAC(isFetching))
        }


    }
}

// Step 1) Create component cotainer with connect 
const AllUsersContainer = connect(mapStateToProps,mapDispachToProps)(AllUsersApiCall)

export default AllUsersContainer;