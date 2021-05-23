import {useState} from "react";
import ProductSizeCard from "./ProductSize/ProductSizeCard";
import AddProductSizeCard from "./ProductSize/AddProductSizeCard";
import './editForm.scss'

const ProductEditForm = (props) => {
    const {name, description, price, id} = props.product

    const [error, setError] = useState(null);
    const [productName, setProductName] = useState(name)
    const [productDescription, setProductDescription] = useState(description)
    const [productPrice, setProductPrice] = useState(price)
    const [sizes, setSizes] = useState(props.product.sizes)

    async function handleSubmit(e) {
        e.preventDefault();
        setError(null);
        props.updateProduct(productName, productDescription, productPrice)
            .then(() => {
                console.log("done")
                props.toggleEditorWindow(false);
            })
            .catch((err) => {
                setError(err.toString());
                console.log(err);
            })
    }

    function addSizeCard() {
        setSizes([...sizes,{}])
    }
    return (
        <div className='product-edit'>
            <div className='product-edit-panel'>
                <div className='product-edit-form vl'>

                    <form className='body' onSubmit={handleSubmit}>
                        <h3>Editer le produit</h3>
                        <div className='field'>
                            <label htmlFor='name'>Nom:</label>
                            <input
                                id='name'
                                name='name'
                                defaultValue={productName}
                                onChange={(e) =>setProductDescription(e.target.value)}
                            />
                        </div>
                        <div className='field'>
                            <label htmlFor='description'>Description:</label>
                            <textarea
                                id='description'
                                name='description'
                                defaultValue={productDescription}
                                onChange={(e) => setProductPrice(e.target.value)}
                            />
                        </div>
                        <div className='multi-field'>
                            <div className='field'>
                                <label htmlFor='price'>Prix:</label>
                                <input
                                    id='price'
                                    type='number'
                                    name='price'
                                    defaultValue={productPrice}
                                    onChange={(e) => setProductName(e.target.value)}
                                />
                            </div>
                            <div className='field'>
                                <label htmlFor='category'>Categorie:</label>
                                <select
                                    id='category'
                                    name='category'
                                    // TODO add ON CHANGE
                                    //onChange={handleChange}
                                >
                                    <option>Chaussures</option>
                                    <option>Haut</option>
                                    <option>Pantalons</option>
                                </select>

                            </div>
                        </div>

                        <div className={error ? 'error show' : 'error'}>
                            {error}
                        </div>

                        <div className='actions'>
                            <button
                                onClick={() => props.toggleEditorWindow(false)}
                                type='button'
                            >
                                Annuler
                            </button>
                            <button type='submit'> Mettre a jour </button>
                        </div>
                    </form>
                </div>
                <div className='product-size-pannel'>

                    {
                        sizes ? sizes.map((size, key) => {
                            return (<ProductSizeCard
                                id={size.id}
                                sizeName={size.sizeName}
                                key={key}
                                productId={id}
                            />)
                        })
                            : null
                    }
                    <AddProductSizeCard
                    addProductSize={addSizeCard}/>
                </div>
            </div>

        </div>
    )
}

export default ProductEditForm