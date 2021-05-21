import logo from "../../assets/images/vet_03.jpg";
import {Link} from "react-router-dom";
import"./ProductCategories.scss"
import {getProductByCategory} from "../../actions/categoryActions";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";




const ProductCategories = (props) => {

    const [product, setProduct] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        displayProductCategory()
    }, []);

    async function displayProductCategory() {
        const productData = await dispatch(getProductByCategory())
            .then((product) => {
                if(product) {
                    console.log("PRODUIT TROUVE");
                    setProduct(product)
                } else {
                    console.log("PRODUIT INTROUVABLE");

                }
            })
            .catch((err) => {
                console.log(err);
                console.log("ERREUR DE REQUÊTE");


            })

    }


    return (

product
    ?
        <div className="product-categories">

            <Link to="/product/1">
                <img src={logo} alt="product name"/>
            </Link>

            <div className="product-info">
                <Link to="/product/1" className="info-name"> {product.name}</Link>
                <p className="info-description"> description : oui </p>
                <p className="info-price"> 19,99€ </p>


            </div>
        </div>

    :<p>LOADING .....</p>

    )

}

export default ProductCategories
