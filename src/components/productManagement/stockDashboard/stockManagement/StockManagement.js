import "./StockManagement.scss"




const StockManagement = () => {


    const products = [
        {
            id: 1212,
            name: 'tshirt',
            quantity: 3,
            price: 32323.12,
        },
        {
            id: 23,
            name: 'pull',
            quantity: 59354,
            price: 32323,

        },
        {id: 535434,
            name: 'Pantalon Sport',
            quantity: 2323,

            price: 32323.4343,
        },
        {
            id: 3232,
            name: 'Casquette Vigile',
            quantity: 1220,
            price: 32.5,
        },
    ]

const renderStock = (product, index) => {
    return (
        <tr key={index}>
            <td>{product.name} </td>
            <td> {product.quantity}</td>
            <td> {product.price}</td>
        </tr>


    )

}
    return (

            <div className="table">


                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>

                    <tbody className="ouis">

                    {products.map(renderStock)}

                    </tbody>

            </div>

    );
}

export default StockManagement;
