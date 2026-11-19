import "./Faq.css"
const Faq=()=>{
    return(
        <>
         <div className="container">
        <div className="row ">
            <div className="col-6">
                <div>
                    <h2 className="text-blue">Frequently Asked <br/> Questions</h2>
                    <input type="text" placeholder="Search Questions Here"
                        className="h-10 border border-secondary rounded-pill w-75 mt-3 mb-3 ps-3 "/>

                    <h4 className="purple">
                        <img src="/caer-removebg-preview.png" className="w-10"/> Orders
                    </h4>

                    <div className="d-flex justify-content-between">
                        <h6 className="purple">How do I place an order?</h6>
                        <button className="btn p-0 border-0 bg-transparent" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapse" aria-expanded="false" aria-controls="collapse">
                            <i className="bi bi-plus-circle purple"></i>
                        </button>
                    </div>
                    <div className="collapse" id="collapse">
                        <h6>Simply browse products, add items to your cart, and proceed to checkout by filling in your
                            details.</h6>
                    </div>
                    <hr/>

                    <div className="d-flex justify-content-between">
                        <h6 className="purple">Can I modify my order after placing it?</h6>
                        <button className="btn p-0 border-0 bg-transparent" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                            <i className="bi bi-plus-circle purple"></i>
                        </button>
                    </div>
                    <div className="collapse" id="collapse1">
                        <h6>Yes, orders can be modified within 1 hour of placing them. Go to “My Orders” in your
                            account.</h6>
                    </div>
                    <hr/>

                    <h4 className="purple">
                        <img src="/dd.webp" className="w-10"/> Payments
                    </h4>

                    <div className="d-flex justify-content-between">
                        <h6 className="purple">What payment methods do you accept?</h6>
                        <button className="btn p-0 border-0 bg-transparent" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                            <i className="bi bi-plus-circle purple"></i>
                        </button>
                    </div>
                    <div className="collapse" id="collapse2">
                        <h6>We accept credit/debit cards, UPI, net banking, and cash on delivery (COD).</h6>
                    </div>
                    <hr/>

                    <div className="d-flex justify-content-between">
                        <h6 className="purple">Is my payment secure?</h6>
                        <button className="btn p-0 border-0 bg-transparent" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                            <i className="bi bi-plus-circle purple"></i>
                        </button>
                    </div>
                    <div className="collapse" id="collapse3">
                        <h6>Yes, we use 256-bit SSL encryption to keep your payment information safe.</h6>
                    </div>
                    <hr/>

                    <h4 className="purple">
                        <img src="/s.png" className="w-10"/> Shipping
                    </h4>

                    <div className="d-flex justify-content-between">
                        <h6 className="purple">How long does delivery take?</h6>
                        <button className="btn p-0 border-0 bg-transparent" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                            <i className="bi bi-plus-circle purple"></i>
                        </button>
                    </div>
                    <div className="collapse" id="collapse4">
                        <h6>Standard delivery takes 3–7 working days depending on your location.</h6>
                    </div>
                    <hr/>

                    <div className="d-flex justify-content-between">
                        <h6 className="purple">Can I track my order?</h6>
                        <button className="btn p-0 border-0 bg-transparent" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                            <i className="bi bi-plus-circle purple"></i>
                        </button>
                    </div>
                    <div className="collapse" id="collapse5">
                        <h6>Yes, once shipped you’ll receive a tracking link on email & SMS.</h6>
                    </div>
                    <hr/>

                    <h4 className="purple">
                        <img src="/images.jpg" className="w-10"/> Account
                    </h4>

                    <div className="d-flex justify-content-between">
                        <h6 className="purple">Do I need an account to shop?</h6>
                        <button className="btn p-0 border-0 bg-transparent" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                            <i className="bi bi-plus-circle purple"></i>
                        </button>
                    </div>
                    <div className="collapse" id="collapse6">
                        <h6>No, you can checkout as a guest, but we recommend creating an account for faster checkout &
                            order tracking.</h6>
                    </div>
                    <hr/>

                    <div className="d-flex justify-content-between">
                        <h6 className="purple">I forgot my password. What should I do?</h6>
                        <button className="btn p-0 border-0 bg-transparent" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                            <i className="bi bi-plus-circle purple"></i>
                        </button>
                    </div>
                    <div className="collapse" id="collapse7">
                        <h6>Click on “Forgot Password” at login and follow the steps to reset it.</h6>
                    </div>
                    <hr/>

                    <h4 className="purple">
                        <img src="public\l.jpg" className="w-10"/> Returns & Refunds
                    </h4>

                    <div className="d-flex justify-content-between">
                        <h6 className="purple">What is your return policy?</h6>
                        <button className="btn p-0 border-0 bg-transparent" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                            <i className="bi bi-plus-circle purple"></i>
                        </button>
                    </div>
                    <div className="collapse" id="collapse8">
                        <h6>We offer a 7-day easy return for unused products in original packaging.</h6>
                    </div>
                    <hr/>

                    <div className="d-flex justify-content-between">
                        <h6 className="purple">How do I get a refund?</h6>
                        <button className="btn p-0 border-0 bg-transparent" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
                            <i className="bi bi-plus-circle purple"></i>
                        </button>
                    </div>
                    <div className="collapse" id="collapse9">
                        <h6>Refunds are processed within 5–7 working days after product inspection.</h6>
                    </div>
                    <hr/>
                </div>
            </div>
            <div className="col-6">

                <img src="public\Group 19.jpg" className="w-75 mt-7 "/>

            </div>
        </div>
    </div>
        </>
    )
}
export default Faq
    