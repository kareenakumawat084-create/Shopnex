import "./Privacy.css"
const Privacy = () => {
    return (
        <>
            <div className="bg1 mt-4">
                <div className="border border-3 shadow-lg">
                    <div className="b text-center p-4"><h2> Privacy Policy</h2></div>
                    <div className="ms-5">
                        <h5 className="text fs-4 mt-4">1. Information We Collect</h5>
                        <ul className="fw-medium">
                            <li>Personal details: name, email, phone, billing & shipping address</li>
                            <li>Payment details (processed securely via third-party payment providers)</li>
                            <li>Device information: IP address, browser type, operating system</li>
                            <li>Cookies and usage data</li>
                        </ul>
                        <hr />
                        <h5 className="text fs-4 mt-4">2. How We Use Your Data</h5>
                        <ul className="fw-medium">
                            <li>Process and deliver your orders</li>
                            <li>Provide customer service</li>
                            <li>Personalize your shopping experience</li>
                            <li>Improve our website and marketing</li>
                            <li>Send promotional offers (optional, unsubscribe anytime)</li>
                        </ul>
                        <hr />
                        <h5 className="text fs-4 mt-4">3. Sharing of Information</h5>
                        <p className="fw-medium">We never sell your data. We may share it with:</p>
                        <ul className="fw-medium">
                            <li>Service providers (payment gateways, shipping companies, IT support)</li>
                            <li>Legal authorities if required by law</li>
                            <li>Business partners in case of a merger or acquisition</li>
                        </ul>
                        <hr />
                        <h5 className="text fs-4 mt-4">4. Cookies</h5>
                        <p className="fw-medium">We use cookies to:</p>
                        <ul className="fw-medium">
                            <li>Remember your login and shopping cart</li>
                            <li>Improve website performance</li>
                            <li>Provide targeted offers</li>
                        </ul>
                        <hr />
                        <h5 className="text fs-4 mt-4">5. Data Security</h5>
                        <li className="fw-medium">We implement security measures to protect your personal data from unauthorized access or
                            disclosure.</li>
                        <hr />
                        <h5 className="text fs-4 mt-4">6. Your Rights</h5>
                        <p className="fw-medium">Depending on your location, you may:</p>
                        <ul className="fw-medium">
                            <li>Improve website performance</li>
                            <li>Provide targeted offers</li>
                            <li> Access, update, or delete your personal data</li>
                            <li> Opt-out of marketing communications </li>
                            <li>Request a copy of your data </li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Privacy