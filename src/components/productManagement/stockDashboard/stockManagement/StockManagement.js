import "./StockManagement.scss"

const products = [
    {
        id: 1212,
        name: 'tshirt',
        quantity: 3,
        price: 32323.12,
        size: 'L',
    },
    {
        id: 23,
        name: 'pull',
        quantity: 59354,
        price: 32323,
        size: 'M',

    },
    {id: 535434,
        name: 'Pantalon Sport',
        quantity: 2323,
        price: 32323.4343,
        size: 'XXL',
    },
    {
        id: 3232,
        name: 'Casquette Vigile',
        quantity: 1220,
        price: 32.5,
        size: 'S',
    },
]



const StockManagement = () => {



const renderStock = (product, index) => {
    return (
        <tr key={index}>
            <td>{product.name} </td>
            <td> {product.size} </td>
            <td> {product.quantity}</td>

        </tr>


    )

}
    return (

        <div className="stockManagement">
            <h1 className="title"> Gestion du stock</h1>

            <div className="table">

                    <tr className="header-table">
                        <th>Name</th>
                        <th>Size</th>
                        <th>Quantity</th>

                    </tr>

                    <tbody className="body-table">

                    {products.map(renderStock)}

                    </tbody>

            </div>
        </div>
    );
}

export default StockManagement;
