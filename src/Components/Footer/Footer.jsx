import './footer.css'
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <footer className='footer-container'>
        <div className="footer-inner">
            <Link to="/">Customer Service</Link>
            <Link to="/">About AnimeShop </Link>
            <Link to="/">Useful Links</Link>
        </div>




    </footer>
  )
}

export default Footer