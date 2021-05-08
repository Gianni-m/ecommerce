import "./ProductPage.scss";
import logo from '../../assets/images/vet_03.jpg'

const ProductPage =() => {
    return (
        <>
        <div className="productpage">
            <div className="productpage-left">
                <div className="left-image">
                    <img src={logo} alt="product name"/>
                </div>

                <div className="left-info">
                    <p className="left-name"> Product 1</p>
                    <p> Price : 10.99 € </p>
                    <p> tres bon produit </p>
                </div>
                <div className="productpage-left">
                    <div className="left-info">
                        <p> Price : <span> 10.99 € </span>
                        </p>
                        <p> Status : <span> In Stock</span></p>
                        <p> Qty
                            <select>
                                <option value="1"> 1 </option>
                                <option value="2"> 2 </option>
                                <option value="3"> 3 </option>
                                <option value="4"> 4 </option>
                            </select>
                        </p>
                        <p>
                            <button type="button"> Add to cart </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProductPage