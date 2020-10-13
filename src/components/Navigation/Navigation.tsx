import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ProfileType } from "../../Types/Types";
import Friends from "./Friends";
import { SideBarType } from "./NavigationContainer";
import SideBarHeader from "./SideBar-header";

export type FriendsType={
  name:string
  img:string
}


type SideBarPropsType={
  profile:ProfileType|null
  authUserId:number
  auth:boolean
  sideBar:SideBarType
  props:any
}





const SidebarProfile:React.FC<SideBarPropsType> = ({ profile, authUserId,auth, ...props }) => {

  console.log(props);
  const [hideMenu, setHideMenu] = useState(true);

  const hideMenuFunc = () => {
    setHideMenu(true);
  };

  const showMenuFunc = () => {
    setHideMenu(false);
  };

  let width = window.innerWidth;

  let state = props.sideBar;
  let friend = state.friends.map((friend:FriendsType, index:number) => (
    <Friends key={index} name={friend.name} img={friend.img} />
  ));
  return (
      <>{width <450?
    <div className="nav__wrapper  nav__wrapper-hide">
        {hideMenu ?(
          <div > 
            <button className="btn_showhide"
              onClick={() => showMenuFunc()}
            >
              <div className="btn_showhide-stripe"></div>
            </button>
           
          </div>
        ): (
          <div >
            <button className="btn_showhide"
              onClick={() => hideMenuFunc()}
            >
              <div className="btn_showhide-stripe btn_showhide-stripe-hide "></div>
            </button>
            <div >
              {" "}
              <div className="nav__wrapper">
                {auth ? (
                  <SideBarHeader
                    profile={profile}
                    authUserId={authUserId}
                    props={props}
                  />
                ) : null}
                <nav className="nav">
                  <ul className="nav__list">
                    <li className="nav__list-item">
                      <NavLink to="/content" className="nav__list-link">
                        Profile
                      </NavLink>
                    </li>
                    <li className="nav__list-item">
                      <NavLink to="/dialogs" className="nav__list-link">
                        Messages
                      </NavLink>
                    </li>
                    <li className="nav__list-item">
                      <NavLink to="/news" className="nav__list-link">
                        News
                      </NavLink>
                    </li>
                    <li className="nav__list-item">
                      <NavLink to="/music" className="nav__list-link">
                        Music
                      </NavLink>
                    </li>
                    <li className="nav__list-item">
                      <NavLink to="/allusers" className="nav__list-link">
                        All Users
                      </NavLink>
                    </li>
                    <li className="nav__list-item">
                      <NavLink to="/setings" className="nav__list-link">
                        Setings
                      </NavLink>
                    </li>
                  </ul>
                </nav>
                {auth ? (
                  <div className="nav__wrapper-friends">
                    <h3>Friends</h3>
                    <div className="nav__wrapper-friends-wrapp">{friend}</div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        ) }
    </div>
  : <div className="nav__wrapper">
      
  {auth ? (
    <SideBarHeader
      profile={profile}
      authUserId={authUserId}
      props={props}
    />
  ) : null}
  <nav className="nav">
    <ul className="nav__list">
      <li className="nav__list-item">
        <NavLink to="/content" className="nav__list-link">
          Profile
        </NavLink>
      </li>
      <li className="nav__list-item">
        <NavLink to="/dialogs" className="nav__list-link">
          Messages
        </NavLink>
      </li>
      <li className="nav__list-item">
        <NavLink to="/news" className="nav__list-link">
          News
        </NavLink>
      </li>
      <li className="nav__list-item">
        <NavLink to="/music" className="nav__list-link">
          Music
        </NavLink>
      </li>
      <li className="nav__list-item">
        <NavLink to="/allusers" className="nav__list-link">
          All Users
        </NavLink>
      </li>
      <li className="nav__list-item">
        <NavLink to="/setings" className="nav__list-link">
          Setings
        </NavLink>
      </li>
    </ul>
  </nav>
  {auth ? (
    <div className="nav__wrapper-friends">
      <h3>Friends</h3>
      <div className="nav__wrapper-friends-wrapp">{friend}</div>
    </div>
  ) : (
    ""
  )}
</div>}</>);
};

export default SidebarProfile;
