
const items = [
    {id: 1, name: 'tshirt rere', quantity: 2},
    {id: 323, name: 'pull', quantity: 4},
    {id: 545, name: 'chaussettes', quantity: 5},
]


const StockCard = () => {
    return (
        <div className='card product-stock-display'>
            {items.map((item) => {
                return (
                <div className="product-display">
                    <div className='product-icon'>
                        <img/>
                    </div>
                    <div>
                        <span>
                            {item.name}
                        </span>
                        <span>
                            {item.quantity}
                        </span>
                    </div>
                </div>
                )
            })}
        </div>
    )
}

export default StockCard;