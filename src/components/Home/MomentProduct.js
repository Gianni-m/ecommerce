import logo from "../../assets/images/vet_03.jpg";
import "./MomentProduct.scss"

const MomentProduct = () => {
    return (
            <div className="famous-product-card">
                <div className="card-body">
                    <div className="card-details">
                        <h1>Chaussures de malade</h1>
                        <p>une paire de chaussure comme les autres avec une particularité, son prix oui son prix elle coûte extrèmement chère .</p>
                    </div>
                    <div className="card-actions">
                        <span className='price' >115 €</span>
                        <button className="cart-btn">ADD TO CART</button>
                    </div>
                </div>
                <div className='card-icon'>
                    <img src={logo} className="animated-fadeInRight" alt='not found'/>
                </div>
            </div>

        )

}

export default MomentProduct