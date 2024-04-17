import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";


const Contact = () => {
    return (
        <div className="lg:max-w-[1440px] mx-auto lg:h-[calc(100vh-426px)] lg:mt-12 h-[calc(100vh-597px)] md:h-[calc(100vh-465px)]">
           <section className="py-6 bg-gray-300 w-2/3 mx-auto shadow-2xl text-black">
            <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                <div className="py-6 md:py-0 md:px-6">
                    <h1 className="text-4xl font-bold">Get in touch</h1>
                    <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
                    <div className="space-y-4">
                        <p className="flex items-center">
                        <SlLocationPin className="w-5 h-5 mr-2 sm:mr-6" />
                            <span>Fake address, 9999 City</span>
                        </p>
                        <p className="flex items-center">
                        <IoIosCall className="w-5 h-5 mr-2 sm:mr-6" />
                            <span>123456789</span>
                        </p>
                        <p className="flex items-center">
                        <MdEmail className="w-5 h-5 mr-2 sm:mr-6" />
                            <span>contact@business.com</span>
                        </p>
                    </div>
                </div>
                <form noValidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
                    <label className="block">
                        <span className="mb-1">Full name</span>
                        <input type="text" placeholder="Leroy Jenkins" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 bg-gray-800" />
                    </label>
                    <label className="block">
                        <span className="mb-1">Email address</span>
                        <input type="email" placeholder="leroy@jenkins.com" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 bg-gray-800" />
                    </label>
                    <label className="block">
                        <span className="mb-1">Message</span>
                        <textarea rows="3" className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 bg-gray-800"></textarea>
                    </label>
                    <button type="button" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-violet-400 text-gray-900 focus:ring-violet-400 hover:ring-violet-400">Submit</button>
                </form>
            </div>
            </section>
        </div>
    );
};

export default Contact;