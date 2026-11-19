import "./Otp.css"
const Otp = () => {
    return (
        <>
        <div className="a1">
            <center className="pt-1">
                <div className="mt-5">
                    <div>
                        <img src="/ChatGPT_Image_Aug_6__2025__11_45_13_AM-removebg-preview_1-removebg-preview (1).png" className="w-290" />
                    </div>
                    <h4 className="fs-5 fw-bold">OTP Verification</h4>
                    <h6>Enter 6 digit code sent to <br /> your Mobile no.*********12 </h6>
                    <img src="public\images__4_-removebg-preview (1).png" width="50px" style={{ marginBottom: "20px" }} />
                    <div className="a5 d-flex justify-content-around mb-3">
                        <input type="text" className="a4 text-center focus-ring border-patinate-blue border-1 rounded-3" />
                        <input type="text" className="a4 text-center focus-ring border-patinate-blue  border-1 rounded-3" />
                        <input type="text" className="a4 text-center focus-ring  border-patinate-blue  border-1 rounded-3" />
                        <input type="text" className="a4 text-center focus-ring  border-patinate-blue border-1 rounded-3" />
                        <input type="text" className="a4 text-center focus-ring  border-patinate-blue  border-1 rounded-3" />
                        <input type="text" className="a4 text-center focus-ring border-patinate-blue  border-1 rounded-3" />
                    </div>
                    <a href="#" className="fs-5 fw-bold text-dark ">Resend</a> <br />
                    <button type="button" className="a7 fs-5 mt-4 rounded-pill border border-primary fw-bold text-light">Verify</button>
                </div>
            </center>
            </div>
            </>
            )
}
            export default Otp