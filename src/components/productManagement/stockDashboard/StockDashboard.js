import './stockDashboard.scss'
import ProductCard from "./ProductCard";
import ProductAddCard from "./AddProduct/ProductAddCard";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {getSellerProducts} from "../../../actions/productActions";

const products = [
    {
        id: 1212,
        name: 'tshirt',
        quantity: 3,
        icon: 'https://cdn.discordapp.com/emojis/740272748332449873.png?v=1',
        price: 32323.12,
    },
    {
        id: 23,
        name: 'pull',
        quantity: 59354,
        price: 32323,
        icon: 'https://cdn.discordapp.com/emojis/772755297588346900.png?v=1'
    },
    {id: 535434,
        name: 'Pantalon Sport',
        quantity: 2323,
        icon: 'https://cdn.discordapp.com/emojis/753518147750985739.png?v=1',
        price: 32323.4343,
    },
    {
        id: 3232,
        name: 'Casquette Vigile',
        quantity: 1220,
        icon: 'https://cdn.discordapp.com/emojis/772755297588346900.png?v=1',
        price: 32.5,
    },
]


const StockDashboard = () => {
    const [data, setData] = useState([])
    const dispatch = useDispatch()


    async function initData() {
        const data = await dispatch(getSellerProducts());
        setData(data);
    }
    useEffect(initData, []);

    return (
        <div className='product-dashboard'>

            <div className='header'>
                <h2>Gestion des stocks</h2>
            </div>
            <div className="stock-display">
                <ProductAddCard/>
                {
                    data.map((product) => {
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
            </div>
        </div>
    )
}

export default StockDashboard;