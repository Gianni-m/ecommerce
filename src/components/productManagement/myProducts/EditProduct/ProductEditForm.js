import {useState} from "react";
import ProductSizeCard from "./ProductSize/ProductSizeCard";
import AddProductSizeCard from "./ProductSize/AddProductSizeCard";
import './editForm.scss'

const ProductEditForm = (props) => {
    const {name, description, price, sizes} = props.product
    console.log(props)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [productName, setProductName] = useState(name)
    const [productDescription, setProductDescription] = useState(description)
    const [productPrice, setProductPrice] = useState(price)

    function handleChange(e) {
        switch(e.target.name) {
            case 'description': {
                setProductDescription(e.target.value)
                break;
            }
            case 'price': {
                setProductPrice(e.target.value)
                break;
            }
            case 'name': {
                setProductName(e.target.value)
                break;
            }
        }
    }

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
                                onChange={handleChange}
                            />
                        </div>
                        <div className='field'>
                            <label htmlFor='description'>Description:</label>
                            <textarea
                                id='description'
                                name='description'
                                defaultValue={productDescription}
                                onChange={handleChange}
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
                                    onChange={handleChange}
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
                        sizes ? sizes.map((size) => {
                            return (<ProductSizeCard
                                sizeName={size.sizeName}
                                Largeur={3.2}
                                longueur={5.2}
                            />)
                        })
                            : null
                    }
                    <AddProductSizeCard/>
                </div>
            </div>

        </div>
    )
}

export default ProductEditForm