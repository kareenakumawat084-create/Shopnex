import { Link } from "react-router-dom"
import "./Home.css"
import Header from "./Header"
import Footer from "./Footer"
const Home = () => {
    return (
        <>
            <Header />
            <div className="container d-flex gap-10">

                <div className="rounded-top-circle border border-lightblue z2 text-center ">
                    <Link to="/Ethnic" className="t1">
                        <img className="mt-60"
                            src="/sharara_set_23c9d33a-b625-4de3-8115-b694e49354a1_1024x1024-removebg-preview.png"
                            width="130px" />
                        <h5>Ethnic Wear</h5>
                    </Link>
                </div>



                <div className="rounded-top-circle border border-lightblue z2 text-center ">
                    <Link to="/Western" className="t1">
                        <img className="mt-80" src="/wes-removebg-preview.png"
                            width="170px" />
                        <h5 className="mt-1">Western Wear</h5>
                    </Link>
                </div>



                <div className="rounded-top-circle border border-lightblue z2 text-center ">
                    <Link to="/Mens" className="t1">
                        <img className="mt-40" src="/mens-removebg-preview.png"
                            width="130px" />
                        <h5 style={{ marginTop: "7.5px" }}>Mens Wear</h5>
                    </Link>
                </div>



                <div className="rounded-top-circle border border-lightblue z2 text-center ">
                    <Link to="/Homedecor" className="t1">
                        <img style={{ marginTop: "-5px" }}
                            src="/decor-removebg-preview.png" width="140px" />
                        <h5 style={{ marginTop: "0.5px" }}>Home Decor</h5>
                    </Link>
                </div>



                <div className="rounded-top-circle border border-lightblue z2 text-center ">
                    <Link to="/Beauty" className="t1">
                        <img className="mt-10" src="/mak-removebg-preview.png"
                            width="160px" />
                        <h5 style={{ marginTop: "-12px" }}>Beauty Product</h5>
                    </Link>
                </div>



                <div className="rounded-top-circle border border-lightblue z2 text-center ">
                    <Link to="/Footwear" className="t1">
                        <img className="mt-30 ms-3;" src="/foot-removebg-preview.png"
                            width="155px" />
                        <h5 style={{ marginTop: "-7px" }}>Foot Wear</h5>
                    </Link>
                </div>

            </div>

            <div className="mt-70">
            </div>

            <div className="div1 w-140 d-flex justify-content-between">
                <div>
                    <img src="/Screenshot 2025-08-29 213940.png"
                        width="300px" height="300px" />
                </div>
                <div className="text-light text-center mt-3">
                    <h3 className="mt-3">DIWALI</h3>
                    <h1 className="fs-80">BIG SALE</h1>
                    <h2>DISCOUNT UP TO 50%</h2>
                    <Link to="/Diwali">
                        <button type="button" className="y1 rounded-pill p-2 w-50 mt-3 ">SHOP NOW</button>
                    </Link>
                </div>
                <div>
                    <img src="/Screenshot 2025-08-29 213940.png"
                        width="300px" height="300px" />
                </div>
            </div>

            <div className="mt-5">
            </div>

            <div className="container d-flex">
                <div style={{ width: "255px", height: "340px", backgroundColor: "#3D8272" }}
                    className="container card border border-success rounded-4 shadow-lg">
                    <div className="card-body text-center">
                        <Link to="/Mobile" className="t1">
                            <img src="/2bc17a335d177bd2a6b1f1b4f9036f06-removebg-preview.png"
                                width="230px" height="220px" className="mt-15 " />
                            <h4 className="text-light mt-160">Smart Phones</h4>
                            <h3 style={{ color: " #180653" }}>10-30% OFF</h3>

                            <button type="button" className="w-20 rounded-pill">Shop now</button>
                        </Link>
                    </div>
                </div>

                <div style={{ width: "255px", height: "340px", backgroundColor: "#3D8272" }}
                    className="container card border border-success rounded-4 shadow-lg">
                    <div className="card-body text-center">
                        <Link to="/Kidstoys" className="t1">
                            <img src="/R-For-Rabbit-Iya-Iya-Zippy-Swing-Car-Ride-Ons-R-for-Rabbit-Toycra-2_512x512-removebg-preview.png"
                                width="230px" height="230px" className="mt-25" />
                            <h4 className="text-light mt-160">Kids Toys</h4>
                            <h3 style={{ color: "#180653" }}>10-15% OFF</h3>

                            <button type="button" className=" w-20 rounded-pill">Shop now</button>
                        </Link>
                    </div>
                </div>

                <div style={{ width: "255px", height: "340px", backgroundColor: "#3D8272" }}
                    className="container card border border-success rounded-4 shadow-lg">
                    <div className="card-body text-center">
                        <Link to="/Handpurse" className="t1">
                            <img src="/s-l1200-removebg-preview.png" width="230px"
                                height="210px" style={{ marginTop: "-5px", marginLeft: "-14px" }} />
                            <h4 className="text-light mt-160">Hand Purse</h4>
                            <h3 style={{ color: " #180653" }}>20-30% OFF</h3>

                            <button type="button" className="w-20 rounded-pill">Shop now</button>
                        </Link>
                    </div>
                </div>

                <div style={{ width: "255px", height: "340px", backgroundColor: "#3D8272" }}
                    className="container card border border-success rounded-4 shadow-lg">
                    <div className="card-body text-center">
                        <Link to="/Perfume" className="t1">
                            <img src="/OG_Beauty_Luxury_Enchant_Listing_1-removebg-preview.png"
                                width="230px" height="230px" style={{ marginTop: "-25px", marginLeft: "-14px" }} />
                            <h4 className="text-light mt-160">Perfume</h4>
                            <h3 style={{ color: "#180653" }}>10-30% OFF</h3>

                            <button type="button" className=" w-20 rounded-pill">Shop now</button>
                        </Link>
                    </div>
                </div>


            </div>

            <div className="mt-5"></div>

            <div className="container d-flex">
                <div style={{ width: "255px", height: "340px", backgroundColor: "#3D8272" }}
                    className="container card border border-success rounded-4 shadow-lg">
                    <div className="card-body text-center">
                        <Link to="/Watches" className="t1">
                            <img src="/images__13_-removebg-preview.png" width="230px"
                                height="235px" style={{ marginTop: "-30px", marginLeft: "-14px" }} />
                            <h4 className="text-light mt-160">Watches</h4>
                            <h3 style={{ color: "#180653" }}>15-30% OFF</h3>

                            <button type="button" className="w-20 rounded-pill">Shop now</button>
                        </Link>
                    </div>
                </div>

                <div style={{ width: "255px", height: "340px", backgroundColor: "#3D8272" }}
                    className="container card border border-success rounded-4 shadow-lg">
                    <div className="card-body text-center">
                        <Link to="/Jewellery" className="t1">
                            <img src="/HVNL11513_1200x1200-removebg-preview.png" width="230px"
                                height="180px" style={{ marginTop: "1px", marginLeft: "-14px" }} />
                            <h4 className="text-light" style={{ marginTop: "13px" }}>Jewellery</h4>
                            <h3 style={{ color: " #180653" }}>10-15% OFF</h3>

                            <button type="button" className="w-20 rounded-pill">Shop now</button>
                        </Link>
                    </div>
                </div>

                <div style={{ width: "255px", height: "340px", backgroundColor: "#3D8272" }}
                    className="container card border border-success rounded-4 shadow-lg">
                    <div className="card-body text-center">
                        <Link to="/Beauty" className="t1">
                            <img src="/iba_pure_skin_liquid_foundation_ivory_fair_1_1_1-removebg-preview.png"
                                width="230px" height="210px" style={{ marginTop: "-5px", marginLeft: "-14px" }} />
                            <h4 className="text-light mt-160">Makeup</h4>
                            <h3 style={{ color: " #180653" }}>25-30% OFF</h3>
                            <button type="button" className="w-20 rounded-pill">Shop now</button>
                        </Link>
                    </div>
                </div>

                <div style={{ width: "255px", height: "340px", backgroundColor: "#3D8272" }}
                    className="container card border border-success rounded-4 shadow-lg">
                    <div className="card-body text-center">
                        <Link to="/Footwear" className="t1">
                            <img src="/elegant-black-heels-stockcake-removebg-preview.png"
                                width="230px" height="210px" style={{ marginTop: "-7px", marginLeft: "-10px" }} />
                            <h4 className="text-light mt-160">Foots</h4>
                            <h3 style={{ color: " #180653" }}>10-20% OFF</h3>

                            <button type="button" className=" w-20 rounded-pill">Shop now</button>
                        </Link>
                    </div>
                </div>

            </div>

            <div className="mt-5"></div>

            <marquee behavior="alternate" direction="left" scrollamount="20">
                <Link to="/Plum" className="t1">
                    <div className="card rounded-end-5 rounded-start-5 me-3 border-3 border-primary display"
                        style={{ display: "inline-block" }}>
                        <div className="card-body">
                            <img src="/Plum-Goodness-removebg-preview.png" width="280px"
                                height="100px" style={{ marginLeft: "-30px" }} />
                        </div>
                    </div>
                </Link>

                <Link to="/Himalaya" className="t1">
                    <div className="card rounded-end-5 rounded-start-5 me-3 border-3 border-success" style={{ display: "inline-block" }}>
                        <div className="card-body">
                            <img src="/b216aeadcf434aff0f744cd316441109-removebg-preview.png"
                                width="200px" height="100px" style={{ marginLeft: "10px" }} />
                        </div>
                    </div>
                </Link>


                <Link to="/Mamaearth" className="t1">
                    <div className="card rounded-end-5 rounded-start-5 me-3 border-3 border-warning" style={{ display: "inline-block" }}>
                        <div className="card-body">
                            <img src="/a52ee43fa0feb076b1defdbb6998ddb9-removebg-preview.png"
                                width="200px" height="100px" style={{ marginLeft: "10px" }} />
                        </div>
                    </div>
                </Link>

                <Link to="/Bata" className="t1">
                    <div className="card rounded-end-5 rounded-start-5 me-3 border-3 border-danger" style={{ display: "inline-block" }}>
                        <div className="card-body">
                            <img src="/images__8_-removebg-preview.png" width="220px"
                                height="100px" className="ms-1" />
                        </div>
                    </div>
                </Link>


                <Link to="/Plum" className="t1">
                    <div className="card rounded-end-5 rounded-start-5 me-3 border-3 border-primary" style={{ display: "inline-block" }}>
                        <div className="card-body">
                            <img src="/Plum-Goodness-removebg-preview.png" width="280px"
                                height="100px" style={{ marginLeft: "-30px" }} />
                        </div>
                    </div>
                </Link>


                <Link to="/Himalaya" className="t1">
                    <div className="card rounded-end-5 rounded-start-5 me-3 border-3 border-success" style={{ display: "inline-block" }}>
                        <div className="card-body">
                            <img src="/b216aeadcf434aff0f744cd316441109-removebg-preview.png"
                                width="200px" height="100px" style={{ marginLeft: "10px" }} />
                        </div>
                    </div>
                </Link>


                <Link to="/Mamaearth" className="t1">
                    <div className="card rounded-end-5 rounded-start-5 me-3 border-3 border-warning" style={{ display: "inline-block" }}>
                        <div className="card-body">
                            <img src="/a52ee43fa0feb076b1defdbb6998ddb9-removebg-preview.png"
                                width="200px" height="100px" style={{ marginLeft: "10px" }} />
                        </div>
                    </div>
                </Link>


                <Link to="/Bata" className="t1">
                    <div className="card rounded-end-5 rounded-start-5 me-3 border-3 border-danger" style={{ display: "inline-block" }}>
                        <div className="card-body">
                            <img src="/images__8_-removebg-preview.png" width="220px"
                                height="100px" className="ms-1" />
                        </div>
                    </div>
                </Link>

            </marquee>

            <div className="mt-5"></div>

            <div className="card w-100 border border-none" style={{ height: "400px", background: "linear-gradient(to right,#CE8231,#CC7A24,#CC7A24,#CC7A23)" }}>
                <div className="card-body">
                    <div className="container d-flex  mt-5" style={{ gap: "20px" }}>
                        <div>
                            <a className="text-decoration-none" href="#"><img
                                src="/Screenshot_2026-01-27_212511-removebg-preview.png" />
                                <h1 className="fs-140 ">TRENDZ</h1>
                                <button type="button" className=" rounded-pill w-25 d1">Shop
                                    now</button>
                            </a>
                        </div>

                        <div className="d-flex gap">
                            <Link to="/Summer" className="t1">
                                <div className="card e1" style={{ width: "160px", height: "210px" }}>
                                    <div className="card-body" style={{ marginTop: "-100px", marginLeft: "-100px" }}>
                                        <img src="/romantic-portrait-woman-long-blue-dress-beach-by-sea-windy-day__1_-removebg-preview.png"
                                            width="300px" height="350px" />
                                        <button type="button" className="w-50 rounded-4 bg-orange"
                                            style={{ height: "50px", marginTop: "-30px", marginLeft: "110px" }}>Summer Dresses</button>
                                    </div>
                                </div>
                            </Link>




                            <Link to="/Earrings" className="t1">
                                <div className="card e1" style={{ width: "160px", height: "210px" }}>
                                    <div className="card-body" style={{ marginTop: "8px", marginLeft: "-12px" }}>
                                        <img src="/download__3_-removebg-preview.png"
                                            width="150px" height="160px" />
                                        <button type="button" className="w-75 rounded-4 bg-orange"
                                            style={{ marginTop: "55px", marginLeft: "20px", height: "50px" }}>Earrings</button>
                                    </div>
                                </div>
                            </Link>



                            <Link to="/Footwear" className="t1">
                                <div className="card e1" style={{ width: "160px", height: "210px" }}>
                                    <div className="card-body" style={{ marginTop: "-10px", marginLeft: "-12px" }}>
                                        <img src="/61ASCEpNLcL._AC_SR768_1024_-removebg-preview.png"
                                            width="150px" height="210px" />
                                        <button type="button" className="w-75 rounded-4 bg-orange"
                                            style={{ height: "50px", marginTop: "25px", marginLeft: "25px" }}>Foots</button>

                                    </div>
                                </div>
                            </Link>


                        </div>



                    </div >
                </div >
            </div >


            <div className="mt-5"></div>


            <div className="container d-flex">
                <div className="container card rounded-5"
                    style={{ width: "260px", height: "365px", border: "3px solid #341C83", boxShadow: "3px 3px #341C83" }}>
                    <a className="text-decoration-none" href="kidsclothes.html">
                        <div className="card-body">
                            <Link to="/Kidsclothes" className="t1">
                                <img className="rounded-5" src="/download (4).jpg"
                                    width="200px" height="180px" />
                                <h5 className="text-secondary text-center mt-3"><b>Kids Clothes</b></h5>
                            </Link>
                            <div className="d-flex ms-5">
                                <img style={{ marginTop: "-3.5px" }}
                                    src="/591777-200-removebg-preview.png" width="33px"
                                    height="33px" />
                                <h5 className="text-dark" style={{ marginLeft: "-5px" }}>600.00</h5>
                            </div>
                            <button type="button" className="border border-orangered rounded-pill text-dark ms-35">
                                <p> Free Delivery</p>
                            </button>
                            <div className="border border-success rounded-pill text-bg-green mt-2 ms-57 ">
                                <h5 className="ms-2 text-light">4.5</h5>
                                <img style={{ marginTop: "-65px" }} className="ms-5"
                                    src="/images__6_-removebg-preview.png" width="20px"
                                    height="20px" />
                            </div>

                        </div>
                    </a>
                </div>


                <div className="container card rounded-5 "
                    style={{ width: "260px", height: "365px", border: "3px solid #341C83", boxShadow: "3px 3px #341C83" }}>

                    <div className="card-body">
                        <Link to="/Mens" className="t1">
                            <img className="rounded-5 " src="/images (5).jpg" width="200px"
                                height="180px" />
                            <h5 className="text-secondary text-center mt-3"><b>Mens Wear</b></h5>
                        </Link>
                        <div className="d-flex ms-5 ">
                            <img style={{ marginTop: "-3.5px" }}
                                src="/591777-200-removebg-preview.png" width="33px"
                                height="33px" />
                            <h5 className="text-dark" style={{ marginLeft: "-5px" }}>1500.00</h5>
                        </div>
                        <button type="button" className="border border-orangered rounded-pill  text-dark ms-35">
                            <p> Free Delivery</p>
                        </button>
                        <div className="border border-success rounded-pill text-bg-green mt-2 ms-57">
                            <h5 className="ms-2 text-light">5.0</h5>
                            <img style={{ marginTop: "-65px" }} className="ms-5"
                                src="/images__6_-removebg-preview.png" width="20px"
                                height="20px" />
                        </div>

                    </div>

                </div>


                <div className="container card rounded-5"
                    style={{ width: "260px", height: "365px", border: "3px solid #341C83", boxShadow: "3px 3px #341C83" }}>

                    <div className="card-body">
                        <Link to="/Western" className="t1">
                            <img className="rounded-5 ms-20 " src="/images (7).jpg"
                                width="200px" height="180px" />
                            <h5 className="text-secondary text-center mt-3"><b>Western Wear</b></h5>
                        </Link>
                        <div className="d-flex ms-5">
                            <img style={{ marginTop: "-3.5px" }}
                                src="/591777-200-removebg-preview.png" width="33px"
                                height="33px" />
                            <h5 className="text-dark" style={{ marginLeft: "-5px" }}>600.00</h5>
                        </div>
                        <button type="button" className="border border-orangered rounded-pill  text-dark ms-35">
                            <p> Free Delivery</p>
                        </button>
                        <div className="border border-success rounded-pill text-bg-green mt-2 ms-57">
                            <h5 className="ms-2 text-light">4.0</h5>
                            <img style={{ marginTop: "-65px" }} className="ms-5"
                                src="/images__6_-removebg-preview.png" width="20px"
                                height="20px" />
                        </div>

                    </div>

                </div>


                <div className="container card rounded-5"
                    style={{ width: "260px", height: "365px", border: "3px solid #341C83", boxShadow: "3px 3px #341C83" }}>
                    <a className="text-decoration-none" href="saree.html">
                        <div className="card-body">
                            <Link to="/Saree" className="t1">
                                <img className="rounded-5 ms-20 " src="/images (9).jpg"
                                    width="200px" height="180px" />
                                <h5 className="text-secondary text-center mt-3"><b>Saree</b></h5>
                            </Link>
                            <div className="d-flex ms-5 gap-0">
                                <img style={{ marginTop: "-3.5px" }}
                                    src="/591777-200-removebg-preview.png" width="33px"
                                    height="33px" />
                                <h5 className="text-dark" style={{ marginLeft: "-5px" }}>1200.00</h5>
                            </div>
                            <button type="button" className="border border-orangered rounded-pill  text-dark ms-35 ">
                                <p> Free Delivery</p>
                            </button>
                            <div className="border border-success rounded-pill text-bg-green mt-2 ms-57">
                                <h5 className="ms-2 text-light">5.0</h5>
                                <img style={{ marginTop: "-65px" }} className="ms-5"
                                    src="/images__6_-removebg-preview.png" width="20px"
                                    height="20px" />
                            </div>

                        </div>
                    </a>
                </div>

            </div >



            <div className="mt-5"></div>

            <div className="card border border-none rounded-4 ms-170" style={{ backgroundColor: "lightblue" }}>
                <div className="d-flex gap-5 ms-190">
                    <div className="card border border-none rounded-4 mt-3 w-25 ">
                        <div className="card-body text-center">
                            <img src="/4399007-removebg-preview.png" width="40px"
                                height="40px" />
                            <h3>Return Easily</h3>
                        </div>
                    </div>

                    <div className="card border border-none rounded-4 mt-3  w-25">
                        <div className="card-body text-center">
                            <img src="/shipping-fast-delivery-man-riding-600nw-1145000942-removebg-preview.png"
                                width="70px" height="40px" />
                            <h3>Fast Delivery</h3>
                        </div>
                    </div>

                    <div className="card border border-none rounded-4 mt-3 w-25">
                        <div className="card-body text-center">
                            <img src="/low-price-sign-icon-special-offer-symbol-vector-10900270__1_-removebg-preview-removebg-preview.png"
                                width="60px" height="40px" />
                            <h3>Lowest Price</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-5"></div>

            <Footer />
        </>

    )
}
export default Home