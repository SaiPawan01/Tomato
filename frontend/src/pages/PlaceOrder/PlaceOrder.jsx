import React, { useContext } from 'react';
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext';


const PlaceOrder = () => {

    const {getTotalCartAmount} = useContext(StoreContext)

    return (
        <form className='place-order'>
            <div className="place-order-left">
                <p className='place-order-title'>Delivey Information</p>
                <div className="multi-fields">
                    <input type="text" placeholder='First name' />
                    <input type="text" placeholder='Last name' />
                </div>
                <input type="text" placeholder='Email address' />
                <input type="text" placeholder='street' />
                <div className="multi-fields">
                    <input type="text" placeholder='city' />
                    <input type="text" placeholder='State' />
                </div>
                <div className="multi-fields">
                    <input type="text" placeholder='zipcode' />
                    <input type="text" placeholder='country' />
                </div>
                <input type="text" placeholder='phone' />
            </div>



            <div className="place-order-right">
                <div className="cart-total">
                    <h2>Summary</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Sub Toatal</p>
                            <p>$ {getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivery charges</p>
                            <p>$ {getTotalCartAmount() ? 2 : 0}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Discount</p>
                            <p>$ {0}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Total Amount</b>
                            <b>$ {getTotalCartAmount() ? getTotalCartAmount() + 2 : 0}</b>
                        </div>
                    </div>
                    <div className="checkout-btn-container">
                        <button >PROCEED TO PAYMENT</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default PlaceOrder