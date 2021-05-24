import {useState} from "react";
import {addProduct} from "../../../../actions/productActions";
import {useDispatch} from "react-redux";
import ProductAddForm from "./ProductAddForm";
const ProductAddCard = (props) => {
    const [addWindow, setAddWindow] = useState(null);
    const dispatch = useDispatch();
    function toggleEditorWindow(state) {
        console.log("?")
        console.log(state)
        if(state) {
            setAddWindow(
                <ProductAddForm
                    toggleEditorWindow={toggleEditorWindow}
                    product={props}
                    createProduct={createProduct}
                />
            )
        } else {
            console.log('close')
            setAddWindow(null);
        }
    }

    async function createProduct(name, description, price) {
        return dispatch(addProduct(name, description, price))
    }

    return (
        <div className='product-card' >
            <div onClick={() => toggleEditorWindow(true)} style={{width: '100%'}}>
                AJOUTER
            </div>
            {addWindow}
        </div>
    )
}

export default ProductAddCard;