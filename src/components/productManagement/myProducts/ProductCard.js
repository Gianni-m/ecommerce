import {useState} from "react";
import ProductEditForm from "./EditProduct/ProductEditForm";
import {updateProduct} from "../../../actions/productActions";
import {useDispatch} from "react-redux";
import { VscTrash, VscSymbolProperty } from "react-icons/vsc";
import { FiCamera } from "react-icons/fi";
import product1 from '../../../assets/images/product1.jpg'
const ProductCard = (props) => {
    const [window, setWindow] = useState(null);

    const dispatch = useDispatch();
    function toggleEditorWindow(state) {
        if(state) {
            setWindow(
                <ProductEditForm
                    toggleEditorWindow={toggleEditorWindow}
                    product={props}
                    updateProduct={update}
                />
            )
        } else {
            setWindow(null);
        }
    }

    async function update(name, description, price) {
        dispatch(updateProduct(props.id, name, description, price))
    }

    return (
        <div className='product-card'>
             <div className='product-icon'>
                 {
                     props.icon ?
                         <img src={props.icon} alt='rerer'/>
                         : <img src={product1} alt='not found'/>

                 }
            </div>
            <div className='product-data'>
                <div className='product-header'>
                    <span className='title'>{props.name}</span>
                    <span className='id'>id: {props.id}</span>
                </div>
                <div className='product-body'>
                    <span
                        className='quantity'>
                        Prix: {props.quantity} €
                    </span>
                </div>
                <div className='actions'>
                    <button onClick={() => toggleEditorWindow(true)}><VscSymbolProperty/></button>
                    <button><FiCamera/></button>

                    <button className='warn VscTrash'><VscTrash/></button>
                </div>
            </div>
            {window}
        </div>
    )
}

export default ProductCard;