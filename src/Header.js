import React from 'react'
import './Header.css';
import {Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import { ShoppingBasket } from '@material-ui/icons';
import Amazon from './Images/Amazon.png'
import { useStateValue } from './StateProvider';

function Header() {
     const [{basket}]=useStateValue();

     console.log(basket);
     
     return (
        <nav className="header">
        <Link to="/">
             {/* logo on the left */}
             <img 
             className="header_logo" 
             src={Amazon}
             alt="" 
           />
        </Link>   
             {/* search box */}
             <div className="header_search">
             <input type="text" className="header_searchInput" />
             <SearchIcon className="header_searchIcon" />
             </div>
             {/* 3 links */}
             <div className="header_nav">
                 {/* 1st link */}
          <Link to="/login" className="header_link">
                <div className="header_option">
                <span className="header_optionLineOne">Hello Nikhil</span>
                <span className="header_optionLineTwo">Sign In</span>
                </div>
          </Link>
                 {/* 2nd link */}
            <Link to="/" className="header_link">
             <div className="header_option">
                <span className="header_optionLineOne" >Returns</span>
                <span className="header_optionLineTwo">& Orders</span>
             </div>
            </Link>
                 {/* 3rd link */}
            <Link to="/" className="header_link">
                <div className="header_option">
                <span className="header_optionLineOne">Your</span>
                <span className="header_optionLineTwo">Prime</span>
                </div>
            </Link>
                 {/* 4th link */}
               <Link to="/checkout" className="header_link">
                <div className="header_optionBasket">
                {/* shoppng basket icon */}
                <ShoppingBasketIcon />
                {/* Number of items in the basket*/}
                <span className="header__optionLineTwo header_basketCount">
                {basket?.length}
                </span>
                </div>
               </Link>
             </div>
             {/* Basket icon with number */}
        </nav> )
}

export default Header
