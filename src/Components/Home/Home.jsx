import React from 'react';
import './Home.css'
import { Link } from "react-router-dom";
import { shop } from './homedata';



const Home = () => {
  return <div className='test'>

    <img src='https://cdn.shopify.com/s/files/1/0014/2648/9388/files/CR_Store_Slider_M_b52cbbe6-c172-49f9-87db-70ef88f9acb0_300x300.jpg?v=1644506818'/>
    
    <div className="desktop-container">

      {shop.map((shops) => {
        return(
          <div className="shop-container">
            <div className="shop-at">
              <img src={shops.image} alt=" Shops"/>
              <button>{shops.title}</button>
            </div> 
         

          </div>
        )
      })}
      </div>
      
      </div>;
};

export default Home;
  