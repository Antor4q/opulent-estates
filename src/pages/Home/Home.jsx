import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Estates from "../Estates/Estates";
import { useLoaderData } from "react-router-dom";
// import Reviews from "../Reviews/Reviews";



const Home = () => {

    const estates =  useLoaderData();
    
    return (
        <div>
            <Helmet>
                <title>Opulent Estates | Home</title>
            </Helmet>
           

            <Banner></Banner>
           
           <div className="lg:mt-10 mt-7">
           <h2 className="text-3xl lg:mb-5 text-center font-bold">Luxury Estates</h2>
            <div className="lg:max-w-[1440px] p-5 lg:p-0  lg:my-12 mx-auto grid lg:grid-cols-3 gap-4 lg:gap-8">
                {
                    estates.map(estate =>  <Estates key={estate.id} estate={estate}></Estates>)
                }
            </div>
            
           </div>
           {/* <div>
                <Reviews></Reviews>
           </div> */}
        </div>
    );
};

export default Home;