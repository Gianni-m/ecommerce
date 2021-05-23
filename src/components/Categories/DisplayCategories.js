
import "./DisplayCategories.scss"
import ProductCategories from "./ProductCategories";
import {useEffect, useState, Fragment} from "react";
import {getProductByCategoryName} from "../../actions/categoryActions";
import {useDispatch} from "react-redux";

const DisplayCategories = (props) => {

    const [products, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    const {categoryId} = props.match.params

    useEffect(() => {
        displayProductCategory()
    }, []);

    async function displayProductCategory() {
        await dispatch(getProductByCategoryName(categoryId))
            .then((product) => {
                if(product) {
                    setProduct(product.concat(product))
                }
            })
            .catch((err) => {
                console.log(err);
            })
        setLoading(false);
    }

    return(
        <Fragment>
        {
            loading ? (
                <div className='loader'>
                    <p>LOADING...</p>
                </div>
                )
                : (
    <div className="display-product">

        <div className="test">
            {
                products.length > 0 ?
                    products.map((product) => {
                    return <ProductCategories
                        key={product.id}
                        {...product}
                    />
                })
                    : <p>Aucun article pour cette catégorie</p>
            }
        </div>
    </div>
                )
}
        </Fragment>
    )
}

export default DisplayCategories
