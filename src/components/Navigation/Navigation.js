import React from 'react';
import {NavLink} from 'react-router-dom';
import Friends from './Friends';
import SideBarHeader from './SideBar-header';

const Profile = ({profile,...props}) => {
    let state = props.sideBar;
    let friend = state.friends.map((friend,index) => <Friends key={index} name={friend.name} img={friend.img}/>);
    return (
        
       <div className='nav__wrapper'>
        {props.auth?<SideBarHeader profile={profile}/>:null}   
            <nav className='nav'>
                <ul className='nav__list'>
                    <li className='nav__list-item'>
                        <NavLink to='/content' className='nav__list-link'>Profile</NavLink>
                    </li>
                    <li className='nav__list-item'>
                        <NavLink to='/dialogs' className='nav__list-link'>Messages</NavLink>
                    </li>
                    <li className='nav__list-item'>
                        <NavLink to='/news' className='nav__list-link'>News</NavLink>
                    </li>
                    <li className='nav__list-item'>
                        <NavLink to='/music' className='nav__list-link'>Music</NavLink>
                    </li>
                    <li className='nav__list-item'>
                        <NavLink to='/allusers' className='nav__list-link'>All Users</NavLink>
                    </li>
                    <li className='nav__list-item'>
                        <NavLink to='/setings' className='nav__list-link'>Setings</NavLink>
                    </li>
                </ul>
            </nav>
            {props.auth?<div className="nav__wrapper-friends">
                <h3>Friends</h3>
                <div className="nav__wrapper-friends-wrapp">
                    {friend}
                </div>
            </div>:''}
            
        </div>
    );
}

export default Profile;