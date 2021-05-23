import './productDashboard.scss'
import ProductCard from "./ProductCard";
import ProductAddCard from "./AddProduct/ProductAddCard";
import {useEffect, useState, Fragment} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getSellerProducts} from "../../../actions/productActions";


const ProductDashboard = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()


    const authStore = useSelector(state => state.auth);
    console.log(authStore);

    async function initData() {
        const params = {
            expansions: ['sizes','createdBy'].join(',')
        }
        const data = await dispatch(getSellerProducts(authStore.user.id, params));
        setData(data);
        setLoading(false)
    }
    useEffect(initData, []);


    return (
        <div className='product-dashboard'>

            <div className='header'>
                <h2>Gestion des Produits</h2>
            </div>
            <div className="stock-display">
                {
                    !loading ?
                        <Fragment>
                            <ProductAddCard/>
                            {data.map((product) => {
                                console.log(product)
                                return (
                                    <ProductCard
                                        id={product.id}
                                        name={product.name}
                                        quantity={product.price}
                                        description={product.name + product.name + product.name}
                                        icon={product.icon}
                                        price={product.price}
                                        sizes={product.sizes}

                                    />
                                )
                            })
                            }
                        </Fragment>
                        : <p>loading...</p>
                }
            </div>
        </div>
    )
}

export default ProductDashboard;