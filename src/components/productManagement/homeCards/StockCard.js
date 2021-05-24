
import product1 from '../../../assets/images/product1.jpg'
import {useEffect, useState} from "react";
import {getProducts} from "../../../actions/productActions";
import {useDispatch} from "react-redux";

const StockCard = () => {
    const dispatch = useDispatch();
    const [items, setItems] = useState([])

    useEffect(() => {
        dispatch(getProducts({take: 5, expansions: 'sizes'}))
            .then((data) => setItems(data))

    }, [])

    return (
        <div className='card product-stock-display'>
            <div className='cartProduct'>
            {items.slice(0,5).map((item) => {
                console.log(item)
                return (
                <div className="product-display">
                    <div className='product-icon'>
                        <img src={product1} alt='not found'/>
                    </div>
                    <div className='product-infos'>
                        <span>
                            {item.name}
                        </span>
                        <span>
                            {item.sizes[0].quantity}
                        </span>
                    </div>
                </div>
                )
            })}
        </div>
            <div className='more-details'>
                <button>
                    Voir plus
                </button>
            </div>
        </div>
    )
}

export default StockCard;
