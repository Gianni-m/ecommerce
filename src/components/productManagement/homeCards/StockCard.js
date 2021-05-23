
const items = [
    {id: 1, name: 'tshirt rere', quantity: 2},
    {id: 323, name: 'pull', quantity: 4},
    {id: 545, name: 'chaussettes', quantity: 5},
]


const StockCard = () => {
    return (
        <div className='card product-stock-display'>
            <div className='cartProduct'>
            {items.slice(0,5).map((item) => {
                return (
                <div className="product-display">
                    <div className='product-icon'>
                        <img src='' alt='not found'/>
                    </div>
                    <div className='product-infos'>
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
            <div className='more-details'>
                <button>
                    Voir plus
                </button>
            </div>
        </div>
    )
}

export default StockCard;
