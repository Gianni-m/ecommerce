import "./Commandes.scss"
import React, { Fragment} from 'react';
import Product from "../Home/Product";



const products = [
    {
        commandID: 1212,
        quantity: 3,
        state: 'livré',
        instock:'instock',
    },
    {
        commandID : 23,
        quantity: 59354,
        state:'en préparation',
        instock : 'out of stock',

    },
    {   commandID : 535434,
        quantity: 2323,
        state:'expédié',
        instock : 'instock',
    },
    {
        commandID : 3232,
        quantity: 1220,
        state :'livré',
        instock: 'instock',
    },
]



const Commandes = () => {

    return (

        <div className="commandes">
            <h1 className="title"> Mes Commandes</h1>

            <div>
                <table className="table">

                    <thead className="header-table">
                    <tr>
                        <th>Command ID</th>
                        <th>Quantity</th>
                        <th>State</th>
                        <th>inStock</th>
                    </tr>
                    </thead>

                    <tbody className="body-table">

                    {products.map(renderStock)}

                    </tbody>

                </table>
            </div>

        </div>
    );
}


const renderStock = (product, index) => {
    return (
        <tr key={index}>
            <td>
                <span className='command-id'>{product.commandID}</span>
            </td>
            <td> {product.quantity}</td>
            <td>{product.state}</td>
            <td>{product.instock}</td>

        </tr>
    )

}


export default Commandes;
