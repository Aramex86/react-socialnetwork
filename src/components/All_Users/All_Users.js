import React from 'react';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

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
                            <button onClick={()=>{
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                {
                                    withCredentials:true,
                                    headers:{
                                        'API-KEY':'7c327b9e-8967-4fb6-b17d-8c965ac4b753'
                                    }
                                })
                                .then(res => {
                                    console.log(res);
                                   if(res.data.resultCode === 0){
                                    props.unfollow(u.id)
                                   }
                                    });
                                }}>Unfollow</button>:
                                <button onClick={()=>{
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},
                                    {
                                        withCredentials:true,
                                        headers:{
                                            'API-KEY':'7c327b9e-8967-4fb6-b17d-8c965ac4b753'
                                        }
                                    })
                                    .then(res => {
                                       if(res.data.resultCode === 0){
                                        props.follow(u.id)
                                       }
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