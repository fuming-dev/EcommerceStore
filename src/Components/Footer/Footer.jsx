import './footer.css'
import { Link } from 'react-router-dom';
import {BsFillArrowUpCircleFill} from 'react-icons/bs'

function Footer() {
  return (
    <footer className='footer-container'>
        <div className="footer-inner">
            <div className="footer-link"><Link to="/">Customer Service</Link></div>
            <div className="footer-link"><Link to="/">About AnimeShop </Link></div>
            <div className="footer-link"><Link to="/">Useful Links</Link></div>
        </div>

        <div className="goBack">
         <BsFillArrowUpCircleFill style={{color: 'black'}}/>
         <Link to="/">Back</Link>
        </div>

        <div className="footer-bottom">
          &copy;Fuming
        </div>




    </footer>
  )
}

export default Footer