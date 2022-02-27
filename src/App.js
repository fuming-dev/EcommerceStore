import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Carousel from './Components/Carousel/Carousel';
import Footer from './Components/Footer/Footer';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
      </div>
      <div className='dom'>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
        <Carousel/>
        <Footer />

      </div>
    </Router>
  );
}

export default App;
