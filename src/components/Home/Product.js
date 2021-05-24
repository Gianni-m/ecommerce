import './Product.scss';
import {Link} from "react-router-dom"



const Product  = (props) => {

    const { name, icon, price, description} = props;
    return (
        <div className="product">
            <div className='header'>
                <img src={icon} alt="image product"/>
                <div className='infos'>
                    <h4 className="info-name"> {name}</h4>
                    <p className="info-description"> {description} </p>
                    <div className="product-info">
                        <p className="info-price"> {price} € </p>
                        <Link to={`/product/${props.id}`} className="info-button"> View </Link>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Product;
