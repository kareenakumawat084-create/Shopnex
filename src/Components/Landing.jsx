import { Link } from "react-router-dom"
import "./Landing.css"
const Landing = () => {
    return (
        <>
        <div className="bg">
            <div className="d-flex justify-content-between">
                <img src="/ChatGPT_Image_Aug_6__2025__11_45_13_AM-removebg-preview_1-removebg-preview (1).png" className="h-150 ms-3" />
                <Link to="/login"> <button type="button" className="mt-1  rounded-pill ">Sign in</button></Link>
            </div>
            <h1 className="ms-4">Shop the <br />
                Latest Trends
            </h1>
            <h3 className="mt-30 ms-4">
                Shop thousand of productsfrom the <br /> comfort of your home
            </h3>
            <Link to="/login">
                <button className="border1 rounded-pill fs-15 text-light ms-4 mt-2" type="button">Shop now</button></Link>
            <div className="ms-18 border border-light bg-light ms-3 ">
                <div className="mt-4 d-flex justify-content-around">
                    <div className="d-flex">
                        <div className="mt-15 ">
                            <img src="/bag.jpg" className="w-60" /> </div>
                        <div className="mt-20">
                            <h3>Fast Shipping</h3>
                            <h4 className="mt-15 ">Free shipping on all orders</h4></div>
                    </div>
                    <div className="d-flex">
                        <div className="mt-15">
                            <img src="/secure.jpg" className=" w-60" /> </div>
                        <div className="mt-20">
                            <h3>Secure Payment</h3>
                            <h4 className="mt-15">100% protected payment</h4></div>
                    </div>
                    <div className="d-flex">
                        <div className="mt-15">
                            <img src="/star.jpg" className="w-60" /> </div>
                        <div className="mt-20">
                            <h3>Customer Support</h3>
                            <h4 className="mt-15">24/7 customer service</h4></div>
                    </div>
                </div>
                </div>
                </div>
            </>
            )
}
export default Landing
