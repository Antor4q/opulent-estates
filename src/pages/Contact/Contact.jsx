import { Helmet } from "react-helmet-async";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";


const Contact = () => {
    return (
        <div className="lg:max-w-[1440px] mx-auto lg:h-[calc(100vh-426px)] lg:my-16 md:my-8 my-5 md:h-[calc(100vh-465px)]">
            <Helmet>
                <title>Opulent Estates | Contact Us</title>
            </Helmet>
           <section className="py-6  w-2/3 mx-auto shadow-2xl text-black">
            <div className="grid max-w-6xl grid-cols-1 px-6  mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                <div className="py-6 md:py-0 md:px-6">
                    <h1 className="lg:text-4xl text-2xl md:text-3xl font-bold">Get in touch</h1>
                    <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
                    <div className="space-y-4">
                        <p className="flex items-center">
                        <SlLocationPin className="w-5 h-5 mr-2 sm:mr-6" />
                            <span>Beverly Hills, California</span>
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
                        <input type="text" placeholder="Full name" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-[#1DD100] input bg-gray-200" />
                    </label>
                    <label className="block">
                        <span className="mb-1">Email address</span>
                        <input type="email" placeholder="Email Address" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-[#1DD100] bg-gray-200 input" />
                    </label>
                    <label className="block">
                        <span className="mb-1">Message</span>
                        <textarea rows="3" placeholder="Enter Message" className="block textarea w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-[#1DD100] bg-gray-200"></textarea>
                    </label>
                    
                    <button className="bg-[#1DD100] text-white font-semibold btn w-full">Submit</button>
                </form>
            </div>
            </section>
        </div>
    );
};

export default Contact;