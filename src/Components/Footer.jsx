import { Link } from "react-router-dom"
import "./Footer.css"
const Footer = () => {
    return (
        <>
            <div className="card1 w-100 border border-none h-410">
                <div className="container card-body mt-3">
                    <img src="/Screenshot_2025-08-19_185711-removebg-preview (1).png"
                        width="220px" height="70px" />
                    <h3 className="text-light">your style, your store</h3>
                </div>


                <div className="d-flex ms-500">
                    <div>
                        <ol className="k1">
                            <a className="text-decoration-none text-light" href="#">
                                <h4>Company Info.</h4>
                            </a>
                            <a className="text-decoration-none text-light" href="#">
                                <li>About us</li>
                            </a>
                            <a className="text-decoration-none text-light" href="#">
                                <li>Contact us</li>
                            </a>
                            <a className="text-decoration-none text-light" href="#">
                                <li>FAQs</li>
                            </a>
                        </ol>
                    </div>

                    <div>
                        <ol className="k1">
                            <a className="text-decoration-none text-light" href="#">
                                <h4>Category</h4>
                            </a>
                            <Link to="/ethnic" className="t1 text-light">
                                <li>Women's</li>
                            </Link>
                            <Link to="/mens" className="t1 text-light">
                                <li>Men's</li>
                            </Link>
                            <Link to="/kidsclothes" className="t1 text-light">
                                <li>Kids</li>
                            </Link>
                            <Link to="/kidstoys" className="t1 text-light">
                                <li>Toys</li>
                            </Link>
                            <Link to="/diwali" className="t1 text-light">
                                <li>Electronics</li>
                            </Link>
                            <Link to="/homedecor" className="t1 text-light">
                                <li>Home and Living</li>
                            </Link>
                        </ol>
                    </div>


                    <div>
                        <ol className="k1 text-light">
                            <a className="text-decoration-none text-light" href="#">
                                <h4>Policies</h4>
                            </a>
                            <a className="text-decoration-none text-light" href="#">
                                <li>Privacy Policy</li>
                            </a>
                            <a className="text-decoration-none text-light" href="#">
                                <li>Terms of Use</li>
                            </a>
                        </ol>
                    </div>

                </div>

                <div className="mt-20">
                    <h4 className="text-light text-center">Stay in the loop</h4>
                    <div>
                        <img src="/Screenshot 2025-08-29 211357.png"
                            width="50px" height="20px" />
                        <img src="/Screenshot 2025-08-29 211618.png"
                            width="30px" height="20px" />
                        <img src="/Screenshot 2025-08-29 211458.png"
                            width="30px" height="20px" />
                        <img src="/Screenshot 2025-08-29 210741.png"
                            width="50px" height="20px" />
                        <img src="/Screenshot 2025-08-29 210948.png"
                            width="50px" height="20px" />
                        <img src="/Screenshot 2025-08-29 211124.png"
                            width="50px" height="20px" />
                        <img src="/Screenshot 2025-08-29 211307.png"
                            width="50px" height="20px" />
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: "lightblue" }} className="w-100">
                <div className="fw-medium d-flex gap-1 pt-1">
                    <i className="bi bi-c-circle"></i>
                    <p>2025 Shopnex. All rights reserved.</p>
                </div>

            </div>
        </>
    )
}
export default Footer