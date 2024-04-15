import {   useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";

const EstateDetails = () => {

    const estates = useLoaderData()
    const {id} = useParams()
    const idInt = parseInt(id)
    const estate = estates.find(singleEstate => singleEstate.id === idInt)

   const {estate_title,segment_name,description,price,status,area,location,facilities,image_url} = estate


    return (
        <div className="lg:max-w-[1440px] mx-auto lg:h-[calc(100vh-426px)] lg:mt-16 mt-10">
            <div className="grid lg:grid-cols-5 grid-cols-1 lg:gap-5 gap-4 p-8 lg:p-0">
                <div className="lg:col-span-3 relative">
                    <img className="rounded-lg" src={image_url} alt="" />
                    <div className="w-[80px] top-0 absolute rounded-tl-xl flex items-center justify-center   h-10 bg-[#1DD100] bg-opacity-70">
                        <p className="text-white text-2xl">{status}</p>
                    </div>
                    <div className=" p-5 items-center w-full bottom-0 right-0 absolute rounded-b-xl   h-10 bg-[#131313B3] bg-opacity-70 flex justify-between">
                        <p className="text-white text-2xl">Area: {area}</p>
                        <p className="text-white text-2xl">{price}</p>
                    </div>
                </div>
                
                
                <div className="lg:col-span-2">
                    <h2 className="text-[#131313] text-[40px] font-bold">{estate_title}</h2>
                    
                    <p className="text-[#131313B3] lg:my-5 my-3">{description}</p>
                    <h4 className="text-[#131313CC]  text-[20px] font-medium lg:mt-5 border-y py-3 mt-3">{segment_name}</h4>
                    <p className="flex gap-3 lg:my-5 my-3 font-semibold text-xl items-center border-b pb-3"><SlLocationPin /> {location}</p>
                    <p className="text-[#131313B3] font-bold">Facilities </p>
                    <ul className='list-disc ml-6 '>
                        {
                            facilities.map(facilitie => <li key={facilitie.id}>
                            {facilitie}
                            </li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default EstateDetails;