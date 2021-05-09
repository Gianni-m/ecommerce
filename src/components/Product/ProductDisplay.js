import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";

const ProductDisplay = (props) => {
    const {productId} = props.match.params
    const [products, setProducts] = useState([]);
    const [productCategory, setProductCategory] = useState({});
    const [selectedProduct, selectProduct] = useState(-1);

    const dispatch = useDispatch();
    useEffect(() => {
        const productCategory = {
            id: 1,
            name: 't-shirt',
            description: "c'est un tshirt isane en fait ",
            products: [
                {
                    id: 2,

                    color: 'red',
                    sizes: [
                        {id: 1, name: 'S'},
                        {id: 2, name: 'M'},
                    ]
                },
                {
                    id: 2,

                    color: 'blue',
                    sizes: [
                        {id: 1, name: 'GIGA FAT'},
                        {id: 2, name: 'FATOU'}
                    ],
                }
            ]
        }
        setProducts(productCategory.products)
        delete productCategory.products;
        setProductCategory(productCategory)
    }, []);

    return (
        <div>
            <div className="product-header">
                <span>nom du produit: {productCategory.name}</span>
                <p>description: {productCategory.description}</p>
            </div>
            <div className='product-variants'>

            {
                products ?
                    products.map((product, id) => {
                    return (
                        <div id={id} onClick={() => selectProduct(id)}>
                            <button>{product.color}</button>
                        </div>
                    )
                })
                    : null
            }
            </div>
            <div className='product-sizes'>
                {
                    selectedProduct >= 0 ?
                        products[selectedProduct].sizes.map((size) => {
                            console.log(size);
                            return (<span>{size.name}</span>)
                    })
                        : null
                }
            </div>
        </div>
    )
}

export default ProductDisplay