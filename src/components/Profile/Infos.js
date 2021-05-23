import "./Infos.scss"
import React, {Fragment, useEffect, useState} from 'react';
import { VscAdd } from "react-icons/vsc";
import AddressCard from "./AddressCard";
import AddAddressForm from "./addAddressForm";
import {getUserAddress} from "../../actions/userAddressActions";
import {useDispatch} from "react-redux";



const ProfileInfos = () => {
    const dispatch = useDispatch()
    const [displayForm, setDisplayForm] = useState(false);
    const [addressList, setAddressList] = useState([])

    useEffect(() => {
        dispatch(getUserAddress())
            .then((address) => {
                setAddressList(address)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    return (

        <Fragment>

            <div className="profile-infos">
                <div className='header'>
                    <h2 className="Header">Vos Addresses de Livraison: </h2>
                    <div className='actions'>
                        <button className="add"
                                onClick={() => setDisplayForm(true)}>
                            <VscAdd/>
                            Ajouter
                        </button>
                    </div>

                </div>


                <div className="address-list">
                    {
                        addressList.map((address) => {
                            return <AddressCard {...address}/>
                        })
                    }
                </div>
                {
                    displayForm ? <AddAddressForm
                            closeForm={() => setDisplayForm(false)}
                        />
                        : null
                }
            </div>
        </Fragment>
    );
}

export default ProfileInfos;
