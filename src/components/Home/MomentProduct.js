import "./MomentProduct.scss"

const MomentProduct = (props) => {
    return (
            <div className="famous-product-card">
                <div className="card-body">
                    <div className="card-details">
                        <h1>{props.name}</h1>
                        <p>{props.description}</p>
                    </div>
                    <div className="card-actions">
                        <span className='price' >{props.price || 0} €</span>
                        <button className="cart-btn">Indisponible</button>
                    </div>
                </div>
                <div className='card-icon'>
                    <img src={props.logo} className="animated-fadeInRight" alt='not found'/>
                </div>
            </div>

        )

}

export default MomentProduct