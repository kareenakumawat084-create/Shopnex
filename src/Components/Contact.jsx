import { Link } from "react-router-dom"
import "./Contact.css"
const Contact = () => {
    return (
        <>

            <div className="bg-image w-100">
                <div className="d-flex justify-content-end gap-5 me-5">

                    <h5 > <a href="#" className=" a  text-light  ">Home</a></h5>
                    <h5> <Link to="/about" className=" a text-light ">About us</Link></h5>
                    <h5><Link to="/contact" className=" a text-light">Contact us</Link></h5>
                </div>
                <div className="mt-4 text-center mb-4">
                    <h4 className="text-light">Hello</h4>
                    <h2 className="text-light">Let's Get in touch</h2>
                </div>
                <div className="ml-41">
                    <div className="mt-20">
                        <h4 className="text-light text-center p-4 ">Contact</h4>
                        <div className="me-60">
                            <div className="d-flex gap-4 ">
                                <input type="text" placeholder="First Name" className="w-200 rounded-3 ps-2" />
                                <input type="text" placeholder="Last Name" className="w-200 rounded-3 ps-2" />
                            </div>
                            <br />
                            <input type="text" placeholder="Email" className="w-410 rounded-3 ps-2" /><br /><br />
                            <input type="text" placeholder="Message" className=" h-80 rounded-3 ps-2" />
                            <div className=" me-170 mt-4"><button
                                className=" bg-green rounded-5 w-25  text-light ">submit</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact