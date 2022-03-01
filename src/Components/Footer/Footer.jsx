import './footer.css'
import { Link } from 'react-router-dom';
import {BsFillArrowUpCircleFill} from 'react-icons/bs'

function Footer() {
  return (
    <footer className='footer-container'>
        <div className="footer-inner">
            <div className="footer-link">
              <div className="footer-links">
                <h3>Help & Customer Serivce</h3>
                <Link to="/">FAQ</Link>
                <Link to="/">Delayed Pre-Orders List</Link>
                <Link to="/">Shipping & Returns </Link>
                <Link to="/">Customer Service</Link>
              </div>
            </div>
            <div className="footer-link">
              <div className="footer-links">
                <h3>About AnimeShop</h3>
                <Link to="/">FAQ</Link>
                <Link to="/">Delayed Pre-Orders List</Link>
                <Link to="/">Shipping & Returns </Link>
                <Link to="/">Customer Service</Link>
              </div>

            </div>

            <div className="footer-link">
              <div className="footer-links">
                <h3>Helpful Links</h3>
                <Link to="/">Sign In</Link>
                <Link to="/">Become a Premium Member</Link>

              </div>

            </div>
        </div>

        <div className="goBack">
         <BsFillArrowUpCircleFill style={{color: 'black'}}/>
         <Link to="/">Back</Link>
        </div>
        <div className="footer-bottom">
          &copy;Copyright 
        </div>


    </footer>
  )
}

export default Footer