import "./Cartpage.css"
const Cartpage = () => {
    return (
        <>
            <div className="d-flex justify-content-around">
                <div className="mt-3 ">
                    <img src="/ChatGPT_Image_Aug_6__2025__11_45_13_AM-removebg-preview 1.jpg"
                        style={{ width: "200px" }} />
                </div>
                <div className="d-flex mt-3">
                    <div className="text-center">
                        <i className="bi bi-1-circle fs-5"></i>
                        <h6>Cart</h6>
                    </div>
                    <div className="hr mt-3"></div>
                    <div className=" text-center">
                        <i className="bi bi-2-circle fs-5"></i>
                        <h6>Address</h6>
                    </div>
                    <div className="hr mt-3"></div>
                    <div className=" text-center">
                        <i className="bi bi-3-circle fs-5"></i>
                        <h6>Payment</h6>
                    </div>
                    <div className="hr mt-3"></div>
                    <div className=" text-center">
                        <i className="bi bi-4-circle fs-5"></i>
                        <h6>Summary</h6>
                    </div>
                </div>
            </div>
            <hr />
            <div className="container">
                <div className="row mt-4">
                    <div className="col-6">
                        <h4>Product Details</h4>
                        <div className="border boder-1 p-4 rounded-4">
                            <div className="d-flex">
                                <div><img src="public\Group 23.jpg" style={{ width: "70px" }} /></div>
                                <div>
                                    <h6>La French Euphoria Perfume For Men & Women 20 ml</h6>
                                    <h6> <i className="bi bi-currency-rupee"></i>880.00</h6>
                                    <h6>All issuse esay Returns</h6>
                                    <h6>Size:xxl Qty:1</h6>
                                    <div className="d-flex align-items-center gap-1">
                                        <button className="btn btn-close btn-sm"></button>
                                        <span className="fw-bold">Remove</span>
                                    </div>
                                    <hr className="w-100" />
                                    <div className="d-flex justify-content-between">
                                        <h6>Sold by:Mega Fashion</h6>
                                        <h6>Free Delevery</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-1 vr p-0 mx-3"></div>
                    <div className="col-5">
                        <h4>Price Details</h4>
                        <div className="d-flex justify-content-between pt-4">
                            <h6>Total Product Price</h6>
                            <h6> <i className="bi bi-currency-rupee"></i> +880</h6>
                        </div>
                        <div className="d-flex justify-content-between">
                            <h6>Total Discount</h6>
                            <h6> <i className="bi bi-currency-rupee"></i> -20</h6>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between">
                            <h4>Order Total</h4>
                            <h6> <i className="bi bi-currency-rupee"></i> 860</h6>
                        </div>
                        <button type="button"
                            className="w-100 bg-purple1 border border-none rounded-4 mt-4 p-2 text-light">Continue</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Cartpage