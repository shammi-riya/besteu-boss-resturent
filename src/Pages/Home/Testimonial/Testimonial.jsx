import React, { useEffect, useState } from 'react';
import Sectiontitle from '../../Component/Sectiontitle/Sectiontitle';
import { Swiper, SwiperSlide } from "swiper/react";
import grup from '../../../assets/home/Group.png'
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const Testimonial = () => {
    const [reviw,setRevew] = useState([]);


    useEffect(()=>{
      fetch("/reviews.json")
      .then(res=>res.json())
      .then(data=>setRevew(data))
    },[])




    return (
        <div className='my-28 px-28'>
           <Sectiontitle
                subtitle={"cheake it Out"}
                title={"TESTIMONIAL"}

            >

            </Sectiontitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
{

reviw.map(singleRevew=>


<SwiperSlide
key={singleRevew._id}
>

    <div className='space-y-4 text-center flex justify-center items-center px-28'>
       <div className='space-y-4'>
       
        <div className='w-28  mx-auto'>
        <Rating
      style={{ maxWidth: 180 }}
      value={singleRevew.rating}
      readOnly
    />
        <img className='my-2' src={grup} alt="" />
        </div>
       <p>{singleRevew.details}</p>
      <p className='text-2xl text-yellow-500'>  {singleRevew.name}</p>
       </div>
    </div>
</SwiperSlide>
)


     
     
       
      
     
   
}
</Swiper>

        </div>
    );
};

export default Testimonial;