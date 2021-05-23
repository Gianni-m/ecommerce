import React, {useState} from "react";
import {addAddress} from "../../actions/userAddressActions";
import {useDispatch} from "react-redux";


function AddAddressForm(props) {
    const dispatch = useDispatch();
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(addAddress())
            .then(() => props.closeForm)
            .catch(err => console.log(err))
    }

    function createCard(address,city,postalCode) {
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
                    <p>Code posta l:</p>
                    <input
                        onChange={(e) => {
                            console.log(e.target.size)
                            setPostalCode(e.target.value)
                        }}
                        className="postal"
                        value={postalCode}
                    />
                </label>
                <button
                    onSubmit={createCard(setAddress,setCity,setPostalCode)}
                    type='submit'>Ajouter,
                </button>
                <button
                    onClick={props.closeForm}
                >Retour</button>

            </form>
        </div>

    )

}
export default AddAddressForm
