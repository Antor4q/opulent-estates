import { Link } from "react-router-dom";
import { FaFacebook,FaTwitter,FaInstagram } from "react-icons/fa";


const Footer = () => {
    return (
        <div>
            <footer className="px-4 divide-y lg:max-w-[1440px] mx-auto bg-[#030712] text-gray-100">
                <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                    <div className="lg:w-1/3">
                         <Link to="/" className="btn btn-ghost  p-0 text-2xl lg:text-3xl font-bold"><span className="text-[#1DD100]">Opulent</span> Estates</Link>
                    </div>
                    <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                        <div className="space-y-3">
                            <h3 className="tracking-wide uppercase text-gray-50">Product</h3>
                            <ul className="space-y-1">
                                <li>
                                    <a rel="noopener noreferrer" href="#">Features</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Integrations</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Pricing</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">FAQ</a>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h3 className="tracking-wide uppercase text-gray-50">Company</h3>
                            <ul className="space-y-1">
                                <li>
                                    <a rel="noopener noreferrer" href="#">Privacy</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Terms of Service</a>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h3 className="uppercase text-gray-50">Developers</h3>
                            <ul className="space-y-1">
                                <li>
                                    <a rel="noopener noreferrer" href="#">Public API</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Documentation</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Guides</a>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <div className="uppercase text-gray-50">Social media</div>
                            <div className="flex justify-start space-x-3">
                                <a rel="noopener noreferrer" href="#" title="Facebook" className="flex items-center p-1">
                                 <FaFacebook className="w-5 h-5" />
                                </a>
                                <a rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center p-1">
                                  <FaTwitter className="w-5 h-5" />
                                </a>
                                <a rel="noopener noreferrer" href="#" title="Instagram" className="flex items-center p-1">
                                    <FaInstagram className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-6 text-sm text-center text-gray-400">© 2024 Opulent Estates, All rights reserved.</div>
            </footer>
        </div>
    );
};

export default Footer;