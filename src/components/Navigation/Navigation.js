import React from 'react';
import { NavLink } from 'react-router-dom';

const Profile = () => {
    return (
        <nav className='nav'>
            <div className='nav__header'>
                <img
                    src='https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
                    alt='img'>
                </img>
                <div className='profile__shortinfo'>
                <img src='https://randomuser.me/api/portraits/men/40.jpg' alt='avatar' className='profile__shortinfo-img'></img>
                    <p>Matej Oliver</p>
                </div>
            </div>
            <ul className='nav__list'>
                <li className='nav__list-item'>
                    <NavLink to='/content' className='nav__list-link'>Profile</NavLink>
                </li>
                <li className='nav__list-item'>
                    <NavLink to='/dialogs' className='nav__list-link'>Messages</NavLink>
                </li>
                <li className='nav__list-item'>
                    <NavLink to='/music' className='nav__list-link'>Music</NavLink>
                </li>
                <li className='nav__list-item'>
                    <NavLink to='/setings' className='nav__list-link'>Setings</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Profile;