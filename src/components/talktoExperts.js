import { useMediaQuery } from 'react-responsive';

import { useState } from 'react';
import Carousel from './carousel';

const TalktoExperts = () =>{
    const [activeSlideIndex, setActiveSlideIndex] = useState(0)

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

    const isMobile = useMediaQuery({ maxWidth: 940 });
    return (
        <>
          <div className={`p-20 flex ${isMobile ? "flex-col" : ""} items-center justify-center gap-10`}>
          {
                isMobile?
            <div className="">
                <img src="https://techsharks.in/wp-content/uploads/2023/05/how-we-make-our-website.gif"></img>

            </div>
            :
            <></>
            }

            <div className="text-left">
                <h1 className="text-2xl font-bold">An personalised product tour makes it simple to get started.</h1>
                <h1 className="text-xl ">You now have access to an onboarding professional who will walk you through the setup process and answer any questions you may have.</h1>

                <button class="bg-yellow-300 border border-black rounded-full p-4 mt-10 text-black">Talk to Our Experts</button>
            </div>
            {
                !isMobile?
            <div className="">
                <img src="https://techsharks.in/wp-content/uploads/2023/05/how-we-make-our-website.gif"></img>

            </div>
            :
            <></>
            }

          </div>
          <div className="">
          <h1 className="mt-10 text-5xl font-bold">Don't Know Which Package to Pick?</h1>
          <button class="bg-yellow-300 border border-black rounded-full px-8 py-4 mt-10 text-black font-bold">Request a call from us</button>
          </div>

          <div className="">
          <h1 className="mt-40 text-3xl font-bold">Work with a trusted industry leader</h1>
        <div className="w-full flex gap-20 items-center justify-center">

       

            

             <Carousel/>
       
        
     
      
           
            
            
           

        </div>
          </div>
        </>
    )


}

export default TalktoExperts;