import {useState} from "react";
import './addForm.scss'
const ProductEditForm = (props) => {
    const {name, description, price} = props.product

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
        if(loading) return;

        setError(null);

        if(!productName || productName.length < 3) {
            return setError('Longueur du nom du produit trop courte')
        } else if(!productPrice || productPrice <= 0) {
            console.log(productPrice)
            return setError('Le prix doit être positif')
        }
        setLoading(true)
        props.createProduct(productName, productDescription, productPrice)
            .then(() => {
                console.log("done")
                setError('Votre produit a bien été ajouté')
                document.getElementById('response-code').classList.add('valid')
                setTimeout(() => props.toggleEditorWindow(false), 3000)
            })
            .catch((err) => {
                setError(err.toString());
                console.log(err);
            })
        setLoading(false)
    }


   return (
       <div className='product-add'>
           <div className='product-add-panel'>
           <div className='product-add-form'>

               <form className='body' onSubmit={handleSubmit}>
                   <h3>Ajouter un produit</h3>
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
                   <div className='field'>
                       <label htmlFor='price'>Prix:</label>
                       <input
                           id='price'
                           type='number'
                           name='price'
                           step='any'
                           defaultValue={productPrice}
                           onChange={handleChange}
                       />
                   </div>
                   <div id='response-code' className={error ? 'error show' : 'error'}>
                       {error}
                   </div>

                   <div className='actions'>
                       <button
                           onClick={() => props.toggleEditorWindow(false)}
                           type='button'
                       >
                           Annuler
                       </button>
                       <button type='submit'> Envoyer </button>
                   </div>
               </form>
           </div>

           </div>
       </div>
   )
}

export default ProductEditForm