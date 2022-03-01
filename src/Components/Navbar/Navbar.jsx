import "../../Styles/Navbar.css";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { HiSearch, HiOutlineShoppingCart } from "react-icons/hi";
import { BiUser, BiHeart } from "react-icons/bi";
const Navbar = () => {
  const [showNav, setshowNav] = useState(false);
  return (
    <nav>
      <div className="desktop-view">
      <div className="main-cont">
          <div className="logo">
            <h1>AnimeShop</h1>
          </div>
       </div>
        <div className="desktop-links">
          <Link to="/">Home</Link>
        </div>
        <div className="desktop-links">
          <Link to="/">Cart</Link>
        </div>
        <div className="desktop-links">
          <Link to="/">Clothing</Link>
        </div>
        <div className="desktop-links">
          <Link to="/">Shop By Series</Link>
        </div>
        <div className="desktop-links">
          <Link to="/">Sale</Link>
        </div>
        <div className="desktop-links">
          <Link to="/">Help</Link>
        </div>

      </div>

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
                <button>
                  <BiUser />
                  My Account
                </button>
                <button>
                  <BiHeart />
                  Wishlist
                </button>
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
          <div className="form">
            <form action="/">
              <input type="text" placeholder='Search..' />
            </form>
          </div>
          <HiSearch color="#fff" size={32} />

        </div>
        <div className="cart">
          <HiOutlineShoppingCart color="#fff" size={32} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
