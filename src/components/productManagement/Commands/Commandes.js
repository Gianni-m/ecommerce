import "./Commandes.scss"
import React, {useEffect, useState, Fragment} from 'react';
import {getCommands} from "../../../actions/commandActions";
import {useDispatch} from "react-redux";




const SellerCommands = () => {
    const [commands, setCommands] = useState([])

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCommands())
            .then(commands => setCommands(commands))
            .catch(err => console.log(err))
    }, [])

    return (

        <div className="commandes">
            <h1 className="title"> Mes Commandes</h1>

            <div>
                <table className="table">

                    <thead className="header-table">
                    <tr>
                        <th>n° de commande:</th>
                        <th>status:</th>
                        <th>articles:</th>
                        <th>email:</th>
                        <th>Commandé le:</th>
                    </tr>
                    </thead>

                    <tbody className="body-table">

                    {commands.map(renderStock)}

                    </tbody>

                </table>
            </div>

        </div>
    );
}


const renderStock = (command, index) => {
    console.log(command)
    return (
        <tr key={index}>
            <td>
                <span className='command-id'>{command.id}</span>
            </td>
            <td> {command.status}</td>
            <td>
                {
                    command.items.map(product => {
                        console.log(product)
                        return <Fragment>
                            <p>{product.product.product.name}</p>
                            <p>{product.product.sizeName}</p>
                            <p>{product.quantity}</p>
                            <br/>
                        </Fragment>
                    })
                }
            </td>
            <td>{command.user.email}</td>
            <td>{parseDate(new Date(command.createdAt))}</td>
        </tr>
    )
}

const parseDate = (date) => {
    return (
        ('00' + date.getDate()).slice(-2) + "/" + ('00' + (date.getMonth() +1)).slice(-2) + "/" + date.getFullYear()
    )
}

export default SellerCommands;
