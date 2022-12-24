import React, {useState,useEffect,useRef} from 'react';

import notification from '../../assets/img/notification.svg'
import user from '../../assets/img/user.svg'
import useNavbar from '../../talons/navbar';

function Header() {
  const talonProps = useNavbar();
    const {handleNavbarToHomePage,
            handleHeadertoUserPage
            } = talonProps;

    function show_noti(){
        var noti = document.getElementById("notification-dropdown-container");
        document.getElementById("user-dropdown-container").style.display = "none";
        document.getElementById("noti-tooltip").style.visibility = "hidden";
        if(noti.style.display == "none"){
          noti.style.display = "block";
        }
        else{
          noti.style.display = "none";
          document.getElementById("noti-tooltip").style.visibility = "visible";
        }
      }
      
      function show_user(){
        var user = document.getElementById("user-dropdown-container");
        document.getElementById("notification-dropdown-container").style.display = "none";
        document.getElementById("user-tooltip").style.visibility = "hidden";
        if(user.style.display == "none"){
          user.style.display = "block";
        }
        else{
          user.style.display = "none";
          document.getElementById("user-tooltip").style.visibility = "visible";
        }
      }
      function show_search(){
        var search = document.getElementById("search-dropdown-container");
        if(search.style.display == "none"){
          search.style.display = "block";
        }
        else{
          search.style.display = "none";
        }
      }
    return (
        <div className="nav">
        <div onClick={handleNavbarToHomePage} className="logo">Upro</div>

        <div className="search-container">
          <input onClick={show_search} type="search" placeholder="Search"/>
          <div id="search-dropdown-container">
            <div className="search-dropdown-menu">
            <p>Type to search</p>
            </div>
        </div>
      </div>

      <div className="notification">
          <img src ={notification} onClick={show_noti}/>
          <div id="notification-dropdown-container">
            <div id='notification-dropdown-menu' className="notification-dropdown-menu">
                <a>placeholder</a>
                <a>placeholder</a>
                <a>placeholder</a>
            </div>
          </div>
          <div id="noti-tooltip" className="noti-tooltip">
            <p>Notification</p>
          </div>
      </div>  

      <div className="user">
          <img src ={user} onClick={show_user}/>
          <div id="user-dropdown-container">
            <div className="user-dropdown-menu">
              <a onClick ={handleHeadertoUserPage}>Your Profile</a>
              <a>Sign out</a>
            </div>
          </div>
          <div id="user-tooltip" className="user-tooltip">
            <p>User</p>
          </div>
      </div>
    </div>
    );
}

export default Header;