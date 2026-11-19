import { Link } from "react-router-dom"
import "./cart.css"
const Cart = () => {
    return (
        <>
         <div>
        <div className="d-flex margin-1 justify-content-center align-items-center mt-4">
                <div className="margin-custom ">
                        <img src="/Group 15.svg"style={{width:"25px"}}/>
                        <h6>Buy</h6>
                </div>
                <div className=" bg-dark ms-3"></div>
                <div className="mx-3 ">
                        <img src="/j.jpg" className="ms-3"style={{width:"30px"}}/>
                        <h6>Delivery</h6>
                </div>
                <div className="bg-dark"></div>
                <div className="mx-3">
                        <img src="/Group 17.jpg" className="ms-2"style={{width:"25px"}}/>
                        <h6>Payment</h6>
                </div>
        </div>
        </div>
            <h2 className="fw-bold text-center mt-4 mb-3">Your shopping cart is empty</h2>
            <hr/>
                <h3 className="fw-medium text-center">Continue Shopping</h3>
                <div className=" ms-15 d-flex  gap-5 mb-4">
                    <Link to="/login">
                        <button type="button" className="bg-btn rounded-pill text-light fs-5 fw-semibold">Signin</button></Link>
                   <Link to="/signup">
                        <button type="button" className="bg-btn rounded-pill text-light fs-5 fw-semibold">Signup</button></Link>
                </div>
                <hr/>
                    <div className="d-flex justify-content-around mt-4 ">
                        <h3> Secure Payment</h3>
                        <h3>Cash On Delivery</h3>
                        <h3>Easy Returns</h3>
                    </div>

                </>
                )
}
export default Cart

