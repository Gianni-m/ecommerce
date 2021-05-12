import './Product.scss';
import {Link} from "react-router-dom"
import logo from '../assets/images/vet_03.jpg'



const Product  = () => {

    return (
        <div className="product">
            <img src={logo} alt="product name"/>

            <div className="product-info">
                <p className="info-name"> Product 1</p>
                <p className="info-description"> oui tres bon produit </p>
                <p className="info-price"> 10.99 € </p>

                <Link to={'/productest'} className="info-button"> View </Link>
            </div>
        </div>
    )
}

export default Product;