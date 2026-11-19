import { Link } from "react-router-dom"
import "./Forgot.css"
const Forgot = () => {
    return (
        <>
            <div className="card container shadow-lg w-50 text-center mt-4 p-3 rounded-5" style={{height: "300px"}}>
                <div className="card-body">
                    <h3 className="pb-3">Forgot your password?</h3>
                    <p className="p-1 fw-medium">Please enter the email or mobile number you'd like your password <br /> reset information sent to</p>
                    <input type="text" placeholder="Email or Mobile number" className="w-75 rounded-3 p-2" /> <br />
                    <Link to="/otp">
                        <button type="button" className="bg-purple rounded-5 mt-4 border border-none text-light px-3 py-1">Send OTP</button>
                    </Link>
                </div>

            </div>
        </>
    )
}
export default Forgot