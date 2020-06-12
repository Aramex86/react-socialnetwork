import React from 'react';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';
import { subscribeAPI } from '../../api/Api';

const AllUsers =(props)=> {
        let pagesCount = Math.ceil( props.totalUserCount / props.pageSize);

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
                 className={props.currentPage === p? 'selected' : ''}
                 onClick={(e) => {props.onPageChanged(p)}}>{p}</span>
                })
              }
            </div>
        {
        props.users.map((u,i) => <div key={i} className="userspage__wrapp">
                <div  className="userspage__wrapp-avatar">
                        <NavLink to={`/content/${u.id}`}>
                            <img src={ u.photos.small != null? u.photos.small: userPhoto} alt='img'/>
                        </NavLink>
                        <div>
                            {u.followed 
                            ?
                            <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={()=>{
                                props.toggleFollowngProggress(true,u.id);
                                subscribeAPI.unfollow(u.id)
                                .then(res => {
                                   if(res.data.resultCode === 0){
                                    props.unfollow(u.id)
                                   }
                                   props.toggleFollowngProggress(false,u.id);
                                    });
                                }}>Unfollow</button>:
                                <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={()=>{
                                    props.toggleFollowngProggress(true,u.id);
                                    subscribeAPI.follow(u.id)
                                    .then(res => {
                                       if(res.data.resultCode === 0){
                                        props.follow(u.id)
                                       }
                                       props.toggleFollowngProggress(false,u.id);
                                        });
                                    }}>Follow</button>
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


export default AllUsers;