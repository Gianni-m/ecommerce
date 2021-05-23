import {Link} from "react-router-dom";
import"./ProductCategories.scss"

const ProductCategories = (props) => {

    const {name, logo, price, description} = props;

    return (
        <div className="product-categories">

            <Link to="/product/1">
                <img src={logo} alt="product icon"/>
            </Link>

            <div className="product-info">
                <Link to="/product/1" className="info-name"> {name}</Link>
                <p className="info-description">{description}</p>
                <p className="info-price">{price}€ </p>
            </div>
        </div>
    )

}

export default ProductCategories
