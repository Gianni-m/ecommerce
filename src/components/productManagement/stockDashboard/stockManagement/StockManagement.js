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

    return (

        <div className="stockManagement">
            <h1 className="title"> Gestion du stock</h1>

            <table className="table">

                    <thead className="header-table">
                        <tr>
                        <th>Name</th>
                        <th>Size</th>
                        <th>Quantity</th>
                        </tr>
                    </thead>

                    <tbody className="body-table">

                    {products.map(renderStock)}

                    </tbody>

            </table>
        </div>
    );
}


const renderStock = (product, index) => {
    return (
        <tr key={index}>
            <td>
                <span className='product-name'>{product.name}</span>
                <span className='product-id'>{'id:' + product.id}</span>
            </td>
            <td> {product.size} </td>
            <td> {product.quantity}</td>
        </tr>
    )

}

export default StockManagement;
