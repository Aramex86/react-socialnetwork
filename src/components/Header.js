import React from 'react';

const Header = () => {
    return (

        <header className='header'>
                <div className='header__img'>
                    <img className='logo__img' src='logo.png' alt='logo'></img>
                </div>
                <div className="header__heading">
                    <h1>Social Network</h1>
                </div>

        </header>
    );
}

export default Header;