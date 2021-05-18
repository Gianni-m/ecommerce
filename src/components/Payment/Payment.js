

import './Payment.scss'




const Payment = () => {

return (

    <div className="payment">
        <h2> Payment </h2>
        <div className="left-info">
            <p>
                Card Number
                <input type="text" maxLength="16" className="card-number"/>
            </p>
            <p> Card Holder's Name
                <input type="text"  className="card-user"/>
            </p>

            <div className="bottom">
            <div className="expiration-date">
            <p>  <h2> Expiration Date </h2>
                <select className="expiration-month">
                    <option value="1"> --</option>
                    <option value="2"> 01</option>
                    <option value="3"> 02</option>
                    <option value="4"> 03</option>
                    <option value="5"> 04</option>
                    <option value="6"> 05</option>
                    <option value="7"> 06</option>
                    <option value="8"> 07</option>
                    <option value="9"> 08</option>
                    <option value="10"> 09</option>
                    <option value="11"> 10</option>
                    <option value="12"> 11</option>
                    <option value="13"> 12</option>
                </select>

                <select className="expiration-year">
                    <option value="1"> ----</option>
                    <option value="2"> 2021</option>
                    <option value="3"> 2022</option>
                    <option value="4"> 2023</option>
                    <option value="5"> 2024</option>
                    <option value="6"> 2025</option>
                    <option value="7"> 2026</option>
                    <option value="8"> 2027</option>
                    <option value="9"> 2028</option>
                    <option value="10"> 2029</option>
                    <option value="11"> 2030</option>
                    <option value="12"> 2031</option>
                    <option value="13"> 2032</option>
                </select>


            </p>
            </div>
                <div type="number" className="button-cvv">
                    <p>
                        <h2> CVV </h2>

                <input type="text" maxLength="3" className="cvv"/>
                    </p>
            </div>

            </div>


        </div>


            <button className="pay"> Pay</button>


    </div>
)

}


export default Payment

