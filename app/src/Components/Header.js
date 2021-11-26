import '../CSS/header.css'
import logo from '../logo.svg';
import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
	const style = {
		width: "100%", position: "fixed", top: "0px"
	  };
  return (
    <React.Fragment>
     <div class="nav-wrapper">
         <div class="logo"><a href=""><img src={logo} alt="" /></a></div>
         <div class="nav-search">
            <form>
                <div class="form-group">          
                    <input type="email" class="" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter search key" />
                    <button type="submit" class="btn btn-primary">SEARCH</button>
                </div>
            </form>
         </div>
         <div class="nav-right">
             <ul>
                 <li><a href=""><i class="fa fa-shopping-cart fa-2x"></i></a></li>
                 <li><a href=""><i class="fa fa-user fa-2x"></i></a></li>
             </ul>
         </div>
     </div>
    </React.Fragment>
  );
}

export default Header;
