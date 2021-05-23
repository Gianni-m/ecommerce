import React, { Fragment} from 'react';
import "./CartItem.scss"
import logo from '../../assets/images/vet_03.jpg'
import {Link} from "react-router-dom"
import { RiDeleteBin6Line } from "react-icons/ri";
import {updateProductQuantity} from "../../actions/cartActions";
import {useDispatch} from "react-redux";



const CartItem = (props) => {
    const dispatch = useDispatch();
    function handleInputChange(e) {
        console.log("la")
        if(e.target.value) {
            const quantity = parseInt(e.target.value);
            if(quantity && quantity > 0) {
                console.log("ici")
                dispatch(updateProductQuantity(props.id, quantity))
            }
        }
    }
    return (
        <Fragment>

      <div className="cartitem">
        <div className="cartitem-image">
            <img src={logo} alt="test"/>
        </div>

          <Link to={`/product/${111}`} className="cartitem-name">
              <p>{props.name}</p>
          </Link>
          <p className="cartitem-price">{props.price} €</p>
          <input
              className="cartitem-select"
              type='number'
              step='1'
              min='1'
              defaultValue={props.quantity}
              onChange={handleInputChange}
          />

          <button className="cartitem-deletebtn">
              <RiDeleteBin6Line/>
          </button>


      </div>
        </Fragment>
    );
}

export default CartItem