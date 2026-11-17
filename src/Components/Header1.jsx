import { Link } from "react-router-dom"
import "./Header1.css"
const Header1 = () => {
    return (
        <>
            <div className="text-bg-lightblue fixed-top">
                <div className="d-flex align-items-center justify-content-between mx-5 px-5">
                    <div className="in">
                        <a href="#"><img className="w-10"
                            src="/Screenshot_2025-08-19_185711-removebg-preview (1).png" /></a>
                    </div>

                    <div
                        className="w-1 d-flex justify-content-between align-items-center rounded-pill text-secondary bg-white border border-none">
                        <div>
                            <input type="Search for Products, Brands and More...." className="color ms-3"
                                placeholder="Search for Products, Brands and More...." />
                        </div>

                        <div>
                            <img className="w-5 me-3"
                                src="/Screenshot_2025-08-19_190412-removebg-preview.png" />
                        </div>
                    </div>



                    <div className="d-flex align-items-center gap-5">
                        <div className="text-center me-4">
                            <div style={{ marginTop: "7px" }}>
                                <div className="text-dark"><i className="bi bi-house-door-fill fs-5"></i>
                                    <Link to="/" className="t1">
                                        <h4 style={{ marginTop: "-0.5px" }} className="fs-15">Home</h4>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="text-center me-4">
                            <div style={{ marginTop: "7px", marginLeft: "-40px" }}>
                                <a className="text-dark" href="#"><i className="bi bi-cart-check-fill fs-5"></i></a>
                                <a className="text-decoration-none text-dark" href="#">
                                    <h4 style={{ marginTop: "0.5px" }} className="fs-15 text-black ">Cart</h4>
                                </a>
                            </div>
                        </div>


                        <div className="text-center">
                            <div style={{ marginTop: "6px" }}>
                                <a className="text-dark" href="#"><i className="bi bi-person-fill fs-4"></i></a>
                                <a className="text-decoration-none text-dark" href="#">
                                    <h4 style={{ marginTop: "-5.5px" }} className="fs-15">Become a Seller</h4>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <br />
            <div style={{ marginTop: "60px" }}></div>
        </>
    )
}
export default Header1