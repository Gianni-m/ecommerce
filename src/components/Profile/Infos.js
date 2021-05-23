import "./Infos.scss"
import React, {Fragment, useState} from 'react';
import { VscAdd } from "react-icons/vsc";
import AddressCard from "./AddressCard";
import AddAddressForm from "./addAddressForm";

const userAddress = [{}, {}, {}, {}]


const ProfileInfos = () => {
    const [displayForm, setDisplayForm] = useState(false);
    return (

        <Fragment>

            <div className="profile-infos">
                <h1 className="Header">Vos Informations de Livraison </h1>
                <button className="add"
                        onClick={() => setDisplayForm(true)}>
                    <VscAdd/>
                </button>

                <div className="address-list">
                    {
                        userAddress.map((address) => {
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
