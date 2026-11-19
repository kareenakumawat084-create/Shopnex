import { Link } from "react-router-dom"
import Cart from "./Cart"
import "./Login.css"
const Login=()=>{
    return(
        <>
        <div style={{backgroundColor: "lightblue"}}>
         <div className="container px-5 py-5" style={{paddingInline:"100px"}}>
        <div className="row bg-light rounded-5">
            <div className="col-6 p-5">
                <h2 className="text-lightblue ">Login</h2>
                <div className="gap-5 mt-4">
                    <input className="w-100 rounded-3 p-2" type="text" placeholder="Username"/>
                    <input className="w-100 rounded-3 p-2 mt-4" type="text" placeholder="Password"/>
                </div>
                <div className="d-flex justify-content-between mt-4">
                    <div className="d-flex gap-1 text-lightblue ">
                        <i className="bi bi-record-circle "></i>
                        <h6>Remember me</h6>
                    </div>
                    <div> <Link to="/forgot" className="text-dark text-decoration-none fw-medium">Forgot Password?</Link></div>
                </div>
                <h6 className="mt-3">Don't have an account? <Link to="/signup" className="p-1  text-decoration-none">Create
                        your account</Link> </h6>

                <div className="d-flex justify-content-center ">
                    <button type="button"
                        className="bg-purple rounded-pill w-25 fs-5 text-light  mt-4 border border-none pb-1">Login</button>
                </div>
                <div className="d-flex ">
                    <div className="w-23 bg-dark mx-2 "></div>
                <div> <h6 className="text-center p-2">or</h6></div>
                 <div className="w-23 bg-dark mx-2"></div>
                </div>
                <a href="#" className="text-decoration-none"> 
                    <h6 className=" w-50 rounded-pill  bg-purple text-light ms-10 ps-1"> <img
                            src="/download__1_-removebg-preview.png" style={{width: "40px"}}/>Continue
                        with Google
                    </h6>
                    </a>
            </div>
            <div className="col-6 rounded-5 text-center bg-light1">
                <div className="mt-4">
                    <h1 className="text-blue fs-2">Welcome Back!</h1>
                    <h4 className="text-blue fs-5 mt-4">Please Login to continue...</h4>
                </div>
                <img src="/fh-removebg-preview.png"className="w-75"/>
            </div> 
        </div>
    </div>
    </div>
        </>
    )
}
export default Login