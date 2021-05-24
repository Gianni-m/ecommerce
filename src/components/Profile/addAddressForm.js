import React, {useState} from "react";
import {addAddress} from "../../actions/userAddressActions";
import {useDispatch} from "react-redux";


function AddAddressForm(props) {
    const dispatch = useDispatch();
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [com, setCom] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(addAddress(address, city, com))
            .then(() => {
                props.closeForm()
                window.location.reload(true)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='add-address-form'>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Adresse:</p>
                    <input
                        onChange={(e) => setAddress(e.target.value)}
                        className="adresse"
                        value={address}
                    />
                </label>

                <label>
                    <p>Ville:</p>
                    <input
                        onChange={(e) => setCity(e.target.value)}
                        className="ville"
                        value={city}
                    />
                </label>
                <label>
                    <p>Commentaire:</p>
                    <textarea
                        onChange={(e) => setCom(e.target.value)}
                        className="postal"
                        value={com}
                    />
                </label>
                <div className='actions'>
                    <button type='submit'>Ajouter</button>
                    <button onClick={props.closeForm}>Retour</button>
                </div>
            </form>
        </div>

    )

}
export default AddAddressForm
