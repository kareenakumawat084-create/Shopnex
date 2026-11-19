import { Link } from "react-router-dom"
import "./Sign.css"
const Signup = () => {
    return (
        <>
        <div style={{backgroundColor:"lightblue"}}>
            <div className="container py-2" style={{ paddingInline: "100px"}}>
                <div className="row bg-light rounded-5">
                    <div className="col-6 p-3">
                        <h3 className="text-lightblue p-1 text-center">Create your account</h3>
                        <div className="gap-5 mt-4">
                            <input className=" p-2 w-100 rounded-3 " type="text" placeholder="Firstname" />
                            <input className=" p-2 w-100 rounded-3  mt-3" type="text" placeholder="Lastname" />
                            <input className=" p-2 w-100 rounded-3  mt-3" type="text" placeholder="Mobile no." />
                            <input className=" p-2 w-100 rounded-3  mt-3" type="text" placeholder="Adress" />
                            <input className=" p-2 w-100 rounded-3  mt-3" type="text" placeholder="Date Of Birth " />
                            <input className=" p-2 w-100 rounded-3  mt-3" type="text" placeholder="Gender" />
                        </div>
                        <div className="text-center mt-3">
                            <Link to="/otp">
                                <button type="button" className="border-0 bg-purple1 text-light rounded-5 px-3">Sign up</button></Link>
                        </div>
                        <div className="d-flex ">
                            <div className="w-21 bg-dark mx-2 "></div>
                            <div>
                                <h6 className="text-center p-2">or</h6>
                            </div>
                            <div className="w-21 bg-dark mx-2"></div>
                        </div>
                        <a href="#" className="text-decoration-none">
                            <h6 className=" w-50 rounded-pill  bg-purple1 text-light ms-10 ps-2"> <img
                                src="/download__1_-removebg-preview.png" style={{ width: "40px" }} />Continue
                                with Google
                            </h6>
                        </a>
                    </div>
                    <div className="col-6 rounded-5 text-center bg-lightblue">
                        <div className=" p-4">
                            <h1 className="text-blue1 fs-2 text-end ">Welcome to shopnex</h1>
                            <h4 className="text-blue1 fs-4 mt-4 text-start">Please signup to continue...</h4>
                        </div>
                        <img src="/Capture-removebg-preview.png" className="w-100 mt-4" />
                    </div>
                </div>
            </div>
            </div>

        </>
    )
}
export default Signup