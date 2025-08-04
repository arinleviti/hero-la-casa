'use client';
import styles from './page.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { picsForStaffAndRestaurantSwiper } from '../Services/assetsService'
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

//This is the part of the page that is client side rendered, the Swiper component.
export default function PageClient () {
    return (
         <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },   // >=640px wide: show 2 slides
          1024: { slidesPerView: 5 },  // >=1024px wide: show 3 slides
        }}
        loop={true}                           // continuous loop
        speed={1000}                         // 1 second transition duration
        autoplay={{
          delay: 2000,                      // time between transitions
          disableOnInteraction: false,      // keep autoplay even if user interacts
          pauseOnMouseEnter: true,          // optional: pause on hover
        }}
        modules={[Autoplay]}
        className={styles.swiper}                                   // enable autoplay module
      >

        {picsForStaffAndRestaurantSwiper.map((pic, index) => (
          <SwiperSlide key={index}>
            <div style={{ position: 'relative', width: '100%', height: '400px' }}>
              <Image
                src={pic.url}
                alt={`Slide ${index + 1}`}
                fill
                style={{ objectFit: 'cover', borderRadius: '10px' }}
                priority
                sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 33vw" 
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    )
}