import React from 'react';

const AllUsers = (props) => {

    return <div>
        {
            props.users.map(u => <div key={u.id} className="userspage__wrapp">
                <div  className="userspage__wrapp-avatar">
                    
                        <img src={u.img} alt='img'/>
                        <div>
                            {u.followed 
                            ?<button onClick={()=>{props.unfollow(u.id)}}>Follow</button>
                            :<button onClick={()=>{props.follow(u.id)}}>Unfollow</button>
                            }
                        </div>
                </div>
                <div className="userspage__wrapp-info">
                    <div className="userspage__wrapp-info-left" >
                        <div>{u.name}</div> 
                        <div>{u.status}</div> 
                    </div>
                    <div className="userspage__wrapp-info-right" >
                        <div>{u.location.counrty},</div>
                        <div>{u.location.city}</div>
                    </div>
               


                </div>
                        {/* <div>{u.name}</div>
                        <div>{u.status}</div>
                        <div>{u.location.city}</div>
                        <div>{u.location.counrty}</div>
                */}

            </div>)
        }
    </div>
}

export default AllUsers;