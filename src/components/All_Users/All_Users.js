import React from 'react';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png';

//Class component

class AllUsers extends React.Component{

    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(res => {
            console.log(res);
             this.props.setUsers(res.data.items);
             this.props.setTotalUsersCount(res.data.totalCount);
             });
    }


    onPageChanged =(pageNumber)=>{
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(res => {
             this.props.setUsers(res.data.items);
             });
    }
    render() {
        let pagesCount = Math.ceil( this.props.totalUserCount / this.props.pageSize);

        let pages = [];

        for(let i=1;i <= pagesCount;i++){
            pages.push(i);
        }


        return <div> 
            <div className="margin">
              {
                pages.map((p,i) => {
                return <span
                key={i}
                 className={this.props.currentPage === p? 'selected' : ''}
                 onClick={(e) => {this.onPageChanged(p)}}>{p}</span>
                })
              }
            </div>
        {
        this.props.users.map((u,i) => <div key={i} className="userspage__wrapp">
                <div  className="userspage__wrapp-avatar">
                    
                        <img src={ u.photos.small != null? u.photos.small: userPhoto} alt='img'/>
                        <div>
                            {u.followed 
                            ?<button onClick={()=>{this.props.unfollow(u.id)}}>Follow</button>
                            :<button onClick={()=>{this.props.follow(u.id)}}>Unfollow</button>
                            }
                        </div>
                </div>
                <div className="userspage__wrapp-info">
                    <div className="userspage__wrapp-info-left" >
                        <div>{u.name}</div> 
                        <div>{u.status}</div> 
                    </div>
                    <div className="userspage__wrapp-info-right" >
                        {/* <div>{'u.location.counrty'},</div>
                        <div>{'u.location.city'}</div> */}
                    </div>
                </div>
            </div>)}
    </div>
    }
}

export default AllUsers;