import "./about.css";
const About = () => {
    return (
        <>
            <div className="bg-j h-100 p-4 mt-3">
                <div className="d-flex justify-content-around align-items-center">
                    <div>
                        <h1 className="text-center">About Shopnex</h1>
                        <h6 className="fw-medium text-secondary">We are building India’s most trusted <br />
                            shopping destination with quality, <br />
                            varierty,and customer-first service </h6>
                        <button type="button" className=" color rounded-4 text-light border border-none">Explore Now</button>
                    </div>
                    <img src="/Group_20-removebg-preview.png" className="w-25 h-25" />
                </div>
            </div>
            <div className="container">
                <div className=" d-flex gap-5">
                    <img src="/Group 21.jpg" className="w-50" />
                    <h3 className="mt-10 fw-light">Shopnex started with a simple idea --- <br />
                        to make online easy, reliable, and joyful. <br />
                        From fashion to lifestyle products, we <br />
                        bring everything to your fingertips</h3>
                </div>

                <h2 className="mt-4 mb-5">Our Mission,Vission & Values</h2>
                <div className="row gap-10">
                    <div style={{ width: "253px", height: "340px", backgroundColor: "#c7e4f0" }}
                        className="card border-none rounded-4 col-4 ">
                        <div className="card-body text-center">
                            <a className="text-decoration-none" href="mobile.html">
                                <img src="/Group_24-removebg-preview.png" className="w-50 mt-2" />
                                <h3 className="text-dark">Mission</h3>
                                <h4 className="fw-normal text-dark">Deliver the latest
                                    trends at
                                    afforeable prices</h4>

                            </a>
                        </div>
                    </div>

                    <div style={{ width: "253px", height: "340px", backgroundColor: "#c7e4f0" }}
                        className=" card border-none rounded-4 col-4">
                        <div className="card-body text-center">
                            <img src="/Group_25-removebg-preview (1).png" className="w-75 mt-2" />
                            <h3 className="text-dark">Vission</h3>
                            <h4 className="fw-normal text-dark">To become india’s
                                most loved online
                                shopping brand</h4>

                        </div>
                    </div>
                    <div style={{ width: "253px", height: "340px", backgroundColor: "#c7e4f0" }}
                        className=" card border-none rounded-4 col-4">
                        <div className="card-body text-center">
                            <img src="/Group_26-removebg-preview.png" className="w-75 mt-2" />
                            <h3 className="text-dark">values</h3>
                            <h4 className="fw-normal text-dark"> Customer trust,
                                quality first,
                                innovation always</h4>

                        </div>
                    </div>
                </div>
                <h2 className="mt-4 mb-5">What Makes Shopnex Special</h2>
                <div className="d-flex gap-5">
                    <div className=" card border-none rounded-4 bg-light h-50">
                        <div className="card-body text-center d-flex gap-5 ">
                            <img src="/de-removebg-preview.png"className="w-25 " />
                            <h4 className="fw-normal text-dark mt-2">Fast and Reliable Delivery</h4>
                        </div>
                    </div>
                    <div className=" card border-none rounded-4 bg-light h-50 mb-4">
                        <div className="card-body text-center d-flex gap-5 ms-4 ">

                            <img src="/return-removebg-preview (1).png" style={{ width: "54px" }} />
                            <h4 className="fw-normal text-dark mt-2">Easy Returns</h4>
                        </div>
                    </div>
                </div>
                <div className="d-flex gap-5 mt-4"> 
                    <div className=" card border-none rounded-4  bg-light h-50">
                        <div className="card-body text-center d-flex gap-5 ms-3">

                            <img src="/Group_29-removebg-preview.png"
                                style={{ width: "63px", marginTop: "-7px " }} />
                            <h4 className="fw-normal text-dark mt-2">24/7 Support</h4>
                        </div>
                    </div>
                    <div className=" card border-none rounded-4  bg-light h-50 ">
                        <div className="card-body text-center d-flex gap-5 ms-4">

                            <img src="/Group_28-removebg-preview.png"
                                style={{ width: "45px", marginTop: "4px", height: "40px" }} />
                            <h4 className="fw-normal text-dark mt-2">Secure Payment</h4>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
export default About