import "../../Styles/Navbar.css";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { HiSearch, HiOutlineShoppingCart } from "react-icons/hi";
import { BiUser, BiHeart } from "react-icons/bi" ;
const Navbar = () => {
  const [showNav, setshowNav] = useState(false);
  return (
    <nav>
      <div className="mobile-view">
        {showNav ? (
          <RiCloseLine
            color="#fff"
            size={32}
            onClick={() => setshowNav(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={32}
            onClick={() => setshowNav(true)}
          />
        )}
        {showNav ? (
          <ul className="nav-links" onClick={() => setshowNav(false)}>
            <div className="nav-container">
              <div className="login">
                  <button><BiUser/>My Account</button>
                  <button><BiHeart/>Wishlist</button>
                </div>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>

              <li> 
                <Link to="/clothing">Clothing</Link>
              </li>

              <li>
                <Link to="/shopbyseries">SHOP BY SERIES</Link>
              </li>

              <li>
                <Link to="/sale">SALE</Link>
              </li>

              <li>
                <Link to="/contact">Help</Link>
              </li>

              </div>
   
          </ul>
        ) : (
          ""
        )}
      </div>
        <div className="far-right-end">
          <div className="logo">
            <h1>AnimeShop</h1>
          </div>
          <div className="search">
              <HiSearch color="#fff" size={32} />
          </div>
          <div className="cart">
              <HiOutlineShoppingCart color="#fff" size={32}/>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;
