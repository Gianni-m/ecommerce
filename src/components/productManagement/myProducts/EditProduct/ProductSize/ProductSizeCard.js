import {useEffect, useState} from "react";
import {addProductSize} from "../../../../../actions/productActions";
import {useDispatch} from "react-redux";

const ProductSizeCard = (props) => {
    const dispatch = useDispatch();
    const [sizeName, setSizeName] = useState(props.sizeName)
    const [visibility, setVisibility] = useState(props.sizeName)
    const [largeur, setLargeur] = useState(props.Largeur)
    const [longueur, setLongueur] = useState(props.longueur)
    const [status, setStatus] = useState(null)
    const [error, setError] = useState(null)


    function saveCard(e) {
        e.preventDefault()
        if(props.id) {

        } else {
            if(props.productId) {
                dispatch(addProductSize(props.productId, sizeName))
                    .then(() => {
                        setStatus('')
                        setError(null)
                    })
                    .catch((err) => {
                        console.log(err.response.data.message || 'une erreur est survenue');
                        setError(err.response.data.message)
                        setStatus('error')
                    })
            } else {
                console.log('missing productId')
            }
        }
    }
    useEffect(() => {
        if(!props.id) {
            setStatus('warning')
        }
    }, [])


    return (
        <div className={'product-size-card ' + status}>
            <form onSubmit={saveCard}>
                <div className='product-size-header'>
                    <div className='product-size-field'>
                        <label>Taille:</label>
                        <input
                            value={sizeName}
                            onChange={(e) => setSizeName(e.target.value)}
                        />
                    </div>
                </div>
                <div className='product-size-body'>
                    <div className='product-size-field'>
                        <label>Largeur(mm):</label>
                        <input
                            value={largeur}
                            type='number'
                            step='any'
                            onChange={(e) => setLargeur(e.target.value)}
                        />
                    </div>
                    <div className='product-size-field'>
                        <label>Longueur(mm):</label>
                        <input
                            defaultValue={longueur}
                            type='number'
                            step='any'
                            onChange={(e) => setLongueur(e.target.value)}
                        />
                    </div>
                    <div className='actions'>
                        <div className='product-size-field'>
                            <label>visible: </label>
                            <input type='checkbox' checked={visibility} onChange={(e) => setVisibility(e.target.value)}/>
                        </div>
                    </div>
                    <div className='error-footer'>
                        <p>{error}</p>
                    </div>
                    <div>
                        <button type='submit'>Envoyer</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ProductSizeCard;