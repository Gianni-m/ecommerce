import React, { Fragment} from 'react';
import "../style/CartItem.scss"
import logo from '../assets/images/vet_03.jpg'
import {Link} from "react-router-dom"
import { RiDeleteBin6Line } from "react-icons/ri";
import Navbar from "./Navbar/Navbar";


const CartItem = () => {
    return (
        <Fragment>

      <div className="cart">
        <div className="cartitem-image">
            <img src={logo} alt=""/>
        </div>

          <Link to={`/product/${111}`} className="cartitem-name">
              <p>Product 1</p>
          </Link>
          <p className="cartitem-price">10.99€ </p>
          <select className="cartitem-select">
              <option value="1">1 </option>
              <option value="2">2 </option>
              <option value="3">3 </option>
              <option value="4">4 </option>
          </select>

          <button className="cartitem-deletebtn">
              <RiDeleteBin6Line/>
          </button>
      </div>
        </Fragment>
    );
}

export default CartItem