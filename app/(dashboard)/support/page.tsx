"use client"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

const data = [{
    id: "1",
    header: "Click to open this one and close Others",
    inside: "Hello"
}, {
    id: "2",
    header: "Click to open this one and close Others",
    inside: "Hello"
}, {
    id: "3",
    header: "Click to open this one and close Others",
    inside: "Hello"
},]
const SocialMediaLinks = () => {
    return (
        <div className="text-center my-8">
            <h3 className="text-xl font-semibold mb-4">Follow Us on Social Media for Support:</h3>
            <div className="flex justify-center space-x-6">
                <a href="https://facebook.com/your-support" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                    <FaFacebook size={30} />
                </a>
                <a href="https://twitter.com/your-support" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-400">
                    <FaTwitter size={30} />
                </a>
                <a href="https://instagram.com/your-support" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500">
                    <FaInstagram size={30} />
                </a>
                <a href="https://linkedin.com/your-support" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700">
                    <FaLinkedin size={30} />
                </a>
            </div>
        </div>
    );
};

const LiveSupportHours = () => {
    return (
        <div className="text-center my-8">
            <h3 className="text-xl font-semibold mb-4">Live Support Hours:</h3>
            <ul className="list-none space-y-2">
                <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                <li>Saturday: 10:00 AM - 4:00 PM</li>
                <li>Sunday: Closed</li>
            </ul>
            <p className="text-sm text-gray-500 mt-2">Note: Response times may vary during peak hours or holidays.</p>
        </div>
    );
};

const PolicyLinks = () => {
    return (
        <div className="text-center my-8">
            <h3 className="text-xl font-semibold mb-4">Our Policies:</h3>
            <ul className="list-none space-y-2">
                <li>
                    <Link href="/refund-policy">
                        <span className="text-blue-600 hover:underline font-bold">Refund Policy</span>
                    </Link>
                </li>
                <li>
                    <Link href="/privacy-policy">
                        <span className="text-blue-600 hover:underline font-bold">Privacy Policy</span>
                    </Link>
                </li>
                <li>
                    <Link href="/terms-conditions">
                        <span className="text-blue-600 hover:underline font-bold">Terms & Conditions</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

const FAQ = function () {
    return (
        <div className="grid gap-3">
            {
                data.map((item) => {
                    return (<div className="collapse collapse-arrow bg-gray-300 rounded-none" key={item.id}>
                        <input type="radio" name="my-accordion-1" defaultChecked />
                        <div className="collapse-title text-xl font-medium">{item.header}</div>
                        <div className="collapse-content bg-gray-500 p-3">
                            <p>{item.inside}</p>
                        </div>
                    </div>)
                })
            }
        </div>

    )
}


const SupportPage = () => {
    return (
        <div>
            <SocialMediaLinks />
            <LiveSupportHours />
            <PolicyLinks />
            <FAQ />
        </div>


    )
}

export default SupportPage