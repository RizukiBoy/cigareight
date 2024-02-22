import { useRef, useState } from 'react';

import {Swiper, SwiperSlide } from 'swiper/react';
 
import About from './About'
import Blog from './Blog'
import 'swiper/css';
import 'swiper/css/effect-cards';
import '../App.css';
import { EffectCards } from 'swiper/modules';
import foto1 from '../assets/npm1.jpg';
import foto2 from '../assets/npm2.jpg';
import foto3 from '../assets/npm3.jpg';
import foto4 from '../assets/npm4.jpg';
import foto5 from '../assets/npm5.jpg';
import foto6 from '../assets/npm6.jpg';
import foto7 from '../assets/npm7.jpg';
import foto9 from '../assets/npm9.jpg';




export default function Home() {
    return(
        <>
    <section className="md:flex md:p-10 text-white h-screen">
    <div className="lg:flex items-center md:mt-28">
       <div className="lg:px-16">
        <h1 className="font-bold text-4xl">We Are</h1>
        <h1 className="font-extrabold text-5xl md:text-8xl lg:text-[150px]">C I G A R - <br></br>E I G H T</h1>
        <p className="font-light text-xl mt-4 lg:text-2xl lg:font-medium">Programming is useless. They simply provide <br></br> answer to the future of the world.</p>
        <span className="flex text-right">
         <p className="font-bold text-right">Ahmad</p>
        </span>

        <span className="w-1/2 flex justify-evenly mt-6">
        {/* <FaInstagram size={35} />
        <FaGithub size={35} />
        <FaYoutube size={35} />  */}
        </span>
       </div>

    </div>

    <div className="w-[50%] md:w-[25%] lg:w-[20%] mx-auto h-max md:mt-40">
    <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]} className="MySwiper">
        <SwiperSlide>
          <img src={foto1} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={foto2} />
        </SwiperSlide>

        <SwiperSlide>
          <img src={foto3} />
        </SwiperSlide>

        <SwiperSlide>
          <img src={foto4} />
        </SwiperSlide>

        <SwiperSlide>
          <img src={foto5} />
        </SwiperSlide>

        <SwiperSlide>
          <img src={foto6} />
        </SwiperSlide>

        <SwiperSlide>
          <img src={foto7} />
        </SwiperSlide>

        <SwiperSlide>
          <img src={foto9} />
        </SwiperSlide>

      </Swiper>
    </div>
    </section>

    <section className="mt-20">
      <About />
    </section>

    <section className="md:p-10 mt-20">
      <Blog />
    </section>
        </>
    )
}