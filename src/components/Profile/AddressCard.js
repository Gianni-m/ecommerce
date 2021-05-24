import React from "react";
import {useDispatch} from "react-redux";
import {deleteUserAddress} from "../../actions/userAddressActions";


function AddressCard(props) {
    const dispatch = useDispatch()

    function handleDelete() {
        dispatch(deleteUserAddress(props.id))
    }
    return (
        <div className='address-card'>
            <h2>Votre adresse : </h2>
            <p>{props.address}</p>
            <h2> Ville : </h2>
            <p>{props.city} </p>
            <h2>Commentaire</h2>
            <p>{props.com}</p>
            <button onClick={() => handleDelete()}>SUPPRIMER</button>
        </div>
    )

}
export default AddressCard
