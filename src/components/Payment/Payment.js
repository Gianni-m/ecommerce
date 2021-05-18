

import './Payment.scss'




const Payment = () => {

return (

    <div className="payment">
        <h2> Payment </h2>
        <div className="left-info">
            <p>
                Card Number
                <input type="number" maxLength="16" className="card-number"/>
            </p>
            <p> Card Holder's Name
                <input type="text"  className="card-user"/>
            </p>

            <div className="oui">
            <div className="test">
            <p>  <h2> Expiration Date </h2>
                <select className="expiration-month">
                    <option value="1"> --</option>
                    <option value="1"> 01</option>
                    <option value="2"> 02</option>
                    <option value="3"> 03</option>
                    <option value="4"> 04</option>
                    <option value="1"> 05</option>
                    <option value="2"> 06</option>
                    <option value="3"> 07</option>
                    <option value="4"> 08</option>
                    <option value="1"> 09</option>
                    <option value="2"> 10</option>
                    <option value="3"> 11</option>
                    <option value="4"> 12</option>
                </select>

                <select className="expiration-year" >
                    <option value="1"> ----</option>
                    <option value="1"> 2021</option>
                    <option value="2"> 2022</option>
                    <option value="3"> 2023</option>
                    <option value="4"> 2024</option>
                    <option value="1"> 2025</option>
                    <option value="2"> 2026</option>
                    <option value="3"> 2027</option>
                    <option value="4"> 2028</option>
                    <option value="1"> 2029</option>
                    <option value="2"> 2030</option>
                    <option value="3"> 2031</option>
                    <option value="10"> 2032</option>
                </select>


            </p>
            </div>
                <div type="number" className="tests">
                    <p>
                        <h2> CVV </h2>

                <input type="number" className="cvv"/>
                    </p>
            </div>

            </div>


        </div>


            <button className="pay"> Pay</button>


    </div>
)

}


export default Payment

