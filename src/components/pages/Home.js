import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Navbar from "../Navbar/Navbar";
import Product from "../Product"


function Home() {
    return (
        <>

            <Navbar/>
            <div className="home">
                <h2 className="hometitle"> Latest Products</h2>
                <div className="home-products">
                    <Product/>
                    <Product/>

                </div>
        </div>
            </>
    );
}

export default Home;