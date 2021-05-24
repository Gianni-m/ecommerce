import './Product.scss';
import {Link} from "react-router-dom"



const Product  = (props) => {

    const { name, logo, price, description} = props;
    return (
        <div className="product">
            <img src={logo} alt="image product"/>

            <div className="product-info">
                <p className="info-name"> {name}</p>
                <p className="info-description"> {description} </p>
                <p className="info-price"> {price} € </p>

                <Link to={`/product/${props.id}`} className="info-button"> View </Link>
            </div>
        </div>
    )
}

export default Product;
