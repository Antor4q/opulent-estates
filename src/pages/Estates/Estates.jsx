import PropTypes from "prop-types"
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Estates = ({estate}) => {
   const {image_url,estate_title,status,description,location,id} = estate
    

    return (
        <div>
            
            <div className="card card-compact  bg-base-100 shadow-xl">
                <figure className="relative">
                    <img className="lg:h-[260px] h-[200px] w-full" src={image_url} alt="Shoes" />
                   
                     
                   
                </figure>
                <div className="w-[80px] absolute top-0 rounded-tl-xl flex items-center justify-center   h-10 bg-[#1DD100] bg-opacity-70">
                <p className="text-white text-2xl">{status}</p>
                </div>
                <div className="card-body">
                    <h2 className="card-title text-3xl">{estate_title}</h2>
                    <p className="flex gap-3 font-semibold text-xl items-center"><IoLocationOutline /> {location}</p>
                    <p>{description}</p>
                    <div className="card-actions ">
                    <Link to={`/estateDetail/${id}`} className="btn bg-[#1DD100] text-white">View Property</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Estates;

Estates.propTypes = {
    estate: PropTypes.object
}