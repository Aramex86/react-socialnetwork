import React from 'react';
import {NavLink} from 'react-router-dom';
import Friends from './Friends';

const Profile = (props) => {
    let state = props.sideBar;
    // console.log(props.profilePage.profile);
    // console.log(props.auth);
    let friend = state.friends.map((friend,index) => <Friends key={index} name={friend.name} img={friend.img}/>);
    return (
        <div className='nav__wrapper'>
            <div className='nav__wrapper-header'>
                <img
                    src='https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
                    alt='img'></img>
                <div className='profile__shortinfo'>
                    <img
                        src='https://randomuser.me/api/portraits/men/40.jpg'
                        alt='avatar'
                        className='profile__shortinfo-img'></img>
                    <p>{props.auth.login}</p>
                </div>
            </div>
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
            <div className="nav__wrapper-friends">
                <h3>Friends</h3>
                <div className="nav__wrapper-friends-wrapp">
                    {friend}
                </div>
            </div>
        </div>
    );
}

export default Profile;