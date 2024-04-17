import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import 'animate.css';



import { IoMdArrowRoundBack, IoMdArrowRoundForward } from 'react-icons/io';
import "./Slider.css"



const Slider = () => {
    return(
      <div className="lg:h-[750px] md:h-[350px]">
        <Swiper
        className="relative lg:h-[750px] md:h-[350px]"
        loop = {true}
         modules={[Navigation]}
         navigation={{
         
          prevEl: ".button-prev-slide",
          nextEl: ".button-next-slide",
         }}
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          >
          <SwiperSlide>
            <div className='lg:h-[750px] slid md:h-[350px] sm:h-[200px]'>
              <div className="hero lg:min-h-screen h-[350px]" style={{backgroundImage: 'url(https://i.ibb.co/Z6bnwTK/islands.jpg)'}}>
               <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content absolute top-10 lg:top-40 text-center text-neutral-content">
                <div >
                  <h1 className="lg:mb-5 mb-3 text-2xl lg:text-5xl font-bold animate__animated animate__zoomIn animate__slow	">Welcome to <span className='text-[#1DD100]'>Opulent</span> Estates</h1>
                  <p className="lg:mb-5 mb-3 animate__animated animate__zoomIn animate__slow	">Explore Luxury Living at its Finest: Penthouses, Beachfront Escapes, Resorts,<br></br> Private Islands, Villas, and Mansions. Find Your Dream Property Today. Explore Now.</p>
                  <div className='flex gap-3 justify-center'>
                  <button className="btn text-white hover:btn-outline animate__animated animate__zoomIn animate__slow border-none bg-[#1DD100]">Get Started</button>
                  <button className="btn text-white btn-outline animate__animated animate__zoomIn animate__slow hover:bg-[#1DD100]">Read More</button>
                  </div>
                </div>
              </div>
          </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='lg:h-[750px] slid md:h-[500px] sm:h-[200px]'>
              <div className="hero lg:min-h-screen h-[350px]" style={{backgroundImage: 'url(https://i.ibb.co/0FBqnqR/beachfront.jpg)'}}>
               <div className="hero-overlay bg-opacity-50"></div>
               <div className="hero-content absolute top-10 lg:top-40 text-center text-neutral-content">
                <div >
                  <h1 className="lg:mb-5 mb-3 text-2xl lg:text-5xl font-bold animate__animated animate__zoomIn animate__slow">Welcome to <span className='text-[#1DD100]'>Opulent</span> Estates</h1>
                  <p className="lg:mb-5 mb-3 animate__animated animate__zoomIn animate__slow">Explore Luxury Living at its Finest: Penthouses, Beachfront Escapes, Resorts,<br></br> Private Islands, Villas, and Mansions. Find Your Dream Property Today. Explore Now.</p>
                  <div className='flex gap-3 justify-center'>
                  <button className="btn text-white hover:btn-outline animate__animated animate__zoomIn animate__slow border-none bg-[#1DD100]">Get Started</button>
                  <button className="btn text-white btn-outline animate__animated animate__zoomIn animate__slow hover:bg-[#1DD100]">Read More</button>
                  </div>
                </div>
              </div>
          </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='lg:h-[750px] slid md:h-[500px] sm:h-[200px]'>
              <div className="hero lg:min-h-screen h-[350px]" style={{backgroundImage: 'url(https://i.ibb.co/Lt4r7Gy/penthous.jpg)'}}>
               <div className="hero-overlay bg-opacity-50"></div>
               <div className="hero-content absolute top-10 lg:top-40 text-center text-neutral-content">
                <div >
                  <h1 className="lg:mb-5 mb-3 text-2xl lg:text-5xl font-bold animate__animated animate__zoomIn animate__slow">Welcome to <span className='text-[#1DD100]'>Opulent</span> Estates</h1>
                  <p className="lg:mb-5 mb-3 animate__animated animate__zoomIn animate__slow">Explore Luxury Living at its Finest: Penthouses, Beachfront Escapes, Resorts,<br></br> Private Islands, Villas, and Mansions. Find Your Dream Property Today. Explore Now.</p>
                  <div className='flex gap-3 justify-center'>
                  <button className="btn text-white hover:btn-outline animate__animated animate__zoomIn animate__slow border-none bg-[#1DD100]">Get Started</button>
                  <button className="btn text-white btn-outline animate__animated animate__zoomIn animate__slow hover:bg-[#1DD100]">Read More</button>
                  </div>
                </div>
              </div>
          </div>
            </div>
            </SwiperSlide>
          
           <div className="flex bottom-0 left-0 right-0 absolute items-center justify-center gap-10 p-5 lg:gap-20">
              <div className="button-prev-slide bg-[#1DD100]  rounded-full text-2xl lg:text-4xl z-10">
              <IoMdArrowRoundBack />
              </div>
              <div className="button-next-slide bg-[#1DD100] rounded-full text-2xl lg:text-4xl z-10">
              <IoMdArrowRoundForward />
              </div>
           </div>
           
        </Swiper>
            
      </div>
    )
}

export default Slider