 import "./Product.css"
 const Product = () => {
    return (
        <>
             <div className="bg-green1 ">
            <div className=" container d-flex gap-5">
                <div>
                    <img src="/Group_23-removebg-preview (1).png" className="w-50 mt-4" />
                </div>
                <div>
                    <h2 className="pt-4">LA’ FRENCH</h2>
                    <h6>La French Euphoria Perfume For Men & Women 20 ml</h6>
                    <h4>Description-</h4>
                    <h6 className="fw-normal">Discover the essence of refined elegance with La French Unisex Perfume, a <br />
                        Immerse yourself in a 20ml bottle of freshness, featuring a captivating fresh spicy <br />
                        aqua fragrance that effortlessly transcends gender boundaries.versatile fragrance <br />
                        designed to complement both men and women.</h6>
                    <h4>Quantity</h4>
                    <h5 className=" w-22 border border-none rounded-pill bg-light text-center  pt-2 ">20 ml | 880.00</h5>
                    <h4 className="mb-4">Delivery</h4>
                    <input type="text" placeholder="Enter your pincode to check delivery date"
                        className="height  w-100 rounded-3 fs-5 border border-none ps-3" />
                    <ul>
                        <h5 className="mt-3">Typically delivered in 2-4 days</h5>
                        <li>UPI / Wallets</li>
                        <li>Credit / Debit Card</li>
                        <li>Net Banking</li>
                    </ul>

                    <button type="button" className="w-20 fs-5 mt-3 rounded-4 border border-none fw-bold mb-3"> Buy Now</button>
                    <button type="button" className="w-15 fs-5 mt-3 rounded-4 border border-none fw-bold">Add to cart</button>
                </div>
            </div>
            </div>
        </>
    )
}
export default Product