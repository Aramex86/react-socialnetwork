import React from 'react';
import { NavLink } from 'react-router-dom';

const Dialogs = () =>{
    return(
        <div className="dialogs__wrapper">
            <h3>Dialogs</h3>
            <div className="dialogs__wrapper-dialogs">
                <div className="items active"><NavLink to="/dialogs/1">users1</NavLink></div>
                <div className="items"><NavLink to="/dialogs/2">users2</NavLink></div>
                <div className="items"><NavLink to="/dialogs/3">users3</NavLink></div>
                <div className="items"><NavLink to="/dialogs/4">users4</NavLink></div>
                <div className="items"><NavLink to="/dialogs/5">users5</NavLink></div>
                <div className="items"><NavLink to="/dialogs/6">users6</NavLink></div>
            </div>
            <div className="dialogs__wrapper-messages">
                <div className="message">message1</div>    
                <div className="message">message2</div>    
                <div className="message">message3</div>    
                <div className="message">message4</div>    
                <div className="message">message5</div>    
                <div className="message">message6</div>    
                <div className="message">message7</div>    
                <div className="message">message8</div>    
                <div className="message">message9</div>    
            </div>
        </div>
    )
}

export default Dialogs;