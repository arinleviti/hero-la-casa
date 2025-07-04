// components/BurgerSwiper.tsx

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './BurgerSwiper.css'; // You can create this for custom styles

// Swiper modules
import { Pagination } from 'swiper/modules';
import  {Burger} from '../../Services/menuItems'; // Adjust the import path as necessary
import BurgerModal from './BurgerModal';
import BurgerCardSwiper from './BurgerCardSwiper/burger-card-swiper';

interface Props {
  burgers: Burger[];
}

const BurgerSwiper = ({ burgers }: Props) => {
  const [selectedBurger, setSelectedBurger] = useState<Burger | null>(null);

  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {burgers.map((burger) => (
          <SwiperSlide key={burger.id}>
            <BurgerCardSwiper
              burger={burger}
              onClick={() => setSelectedBurger(burger)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {selectedBurger && (
        <BurgerModal burger={selectedBurger} onClose={() => setSelectedBurger(null)} />
      )}
    </>
  );
};

export default BurgerSwiper;

