import { Link } from "react-router-dom"
import "./Header.css"
const Header = () => {
    return (
        <>
            <div className="text-bg-lightblue fixed-top">
                <div className="d-flex align-items-center justify-content-between mx-5 px-5">
                    <div>
                        <a href="#"><img className="w-10"
                            src="/Screenshot_2025-08-19_185711-removebg-preview (1).png" /></a>
                    </div>

                    <div className="w-1 d-flex justify-content-between align-items-center rounded-pill text-secondary bg-white">
                        <div>
                            <input type="Search for Products, Brands and More...." className="color ms-3"
                                placeholder="Search for Products, Brands and More...." />
                        </div>

                        <div>
                            <img className="w-5 me-3"
                                src="/Screenshot_2025-08-19_190412-removebg-preview.png" />
                        </div>
                    </div>

                    <div className="d-flex align-items-center gap-2">
                        <div className="text-center me-5">
                            <div className="mt-7">
                                <a className="text-dark" href="#"><i className="bi bi-house-door-fill fs-5"></i></a>
                                <Link to="/" className="t1">
                                    <h4 style={{ marginTop: "-0.5px" }} className="fs-15 ">Home</h4>
                                </Link>
                            </div>
                        </div>

                        <div className="text-center me-5">
                            <div className="mt-6">
                                <a className="text-dark" href="#"><i className="bi bi-cart-check-fill fs-5"></i></a>
                                <a className="text-decoration-none text-dark" href="#">
                                    <h4 style={{ marginTop: "0.5px" }} className="fs-15 text-black ">Cart</h4>
                                </a>
                            </div>
                        </div>

                        <div className="text-center me-5">
                            <div className="mt-8">
                                <a className="text-dark" href="seller.html"><i className="bi bi-person-fill fs-4"></i></a>
                              <Link to="/Seller" className="t1">
                                    <h4 style={{ marginTop: "-3.5px" }} className="fs-15">Become a Seller</h4>
                              </Link>
                            </div>
                        </div>

                        <div>
                            <button type="button" className="border border-none rounded-pill z1 ">Login/Signup</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Header