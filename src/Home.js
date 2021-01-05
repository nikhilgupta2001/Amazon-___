import React from 'react'
import Product from './Product'
import './Home.css'
function Home() {
    return (
        <div className="home">
          <img 
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          className="home_image" 
          alt=""
          />
          {/* Product id,title,price,rating,image   */}
          <div className="home_row">
          <Product id={123455} 
          title="The Monk Who Sold Ferrari"
          price={11.96}
          rating={5}
          image=""
          />
           <Product id={123455} 
          title="The Monk Who Sold Ferrari"
          price={11.96}
          rating={5}
          image=""
          />
          </div>
          <div className="home_row">
          <Product id={123455} 
          title="The Monk Who Sold Ferrari"
          price={11.96}
          rating={5}
          image=""
          />
          <Product id={123455} 
          title="The Monk Who Sold Ferrari"
          price={11.96}
          rating={5}
          image=""
          />
          <Product id={123455} 
          title="The Monk Who Sold Ferrari"
          price={11.96}
          rating={5}
          image=""
          />
          </div>
          {/* Product */}
          
        </div>
    )
}

export default Home
