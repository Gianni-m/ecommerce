import React from "react";


function AddressCard(props) {
    return (
        <div className='address-card'>
            <h2>Votre adresse : </h2>
            <p>{props.address}</p>
            <h2> Ville : </h2>
            <p>{props.city} </p>
            <h2>Commentaire</h2>
            <p>{props.com}</p>
        </div>
    )

}
export default AddressCard
