import styles from './marquee.module.css'
import Marquee from "react-fast-marquee";
import { Burger, burgers } from '../../Services/menuItems'
import { newsItems, NewsItems } from '../../Services/newsItems'
import SwiperModal from '../SwiperObject/SwiperModal/swiper-modal'
import Link from "next/link";
import Image from "next/image";
import { useState } from 'react';

export default function BurgerMarquee() {

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedBurger, setSelectedBurger] = useState<Burger | null>(null);

    const burgerOfTheMonth = burgers.find(burger => burger.burgerOfTheMonth === true);
    const newsOfTheMonth = newsItems.reduce((max: NewsItems, news: NewsItems) => news.id > max.id ? news : max, newsItems[0]);

    const openModal = (burger: Burger) => {
        setSelectedBurger(burger);
        setModalOpen(true);
    }

    const closeModal = () => {
        setSelectedBurger(null);
        setModalOpen(false);
    }

    return (
        <>
            <Marquee speed={40} gradient={false} pauseOnHover className={styles.marqueeContainer} autoFill={true}>
                {/* Burger of the Month */}
                {burgerOfTheMonth && (
                    <div onClick={() => openModal(burgerOfTheMonth)} className={styles.itemWrapper}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src={burgerOfTheMonth.imageSmallUrl ?? "/images/default-burger.jpg"}
                                alt={burgerOfTheMonth.name}
                               width={60}
  height={60}
  style={{ objectFit: 'contain', marginRight: '1rem' }}
  priority={false}
                            />
                        </div>
                        <div className={styles.textWrapper}>
                            <div className={styles.burgerLabel}>Burger del mese</div>
                            <div className={styles.burgerName}>{burgerOfTheMonth.name}</div>
                        </div>
                    </div>
                )}

                {/* News of the Month */}
                {newsOfTheMonth && (
                    <div  className={styles.newsLink}>
                        {newsOfTheMonth.header}
                    </div>
                )}
            </Marquee>

            {modalOpen &&
                <SwiperModal burger={selectedBurger} onClose={closeModal} />
            }
        </>
    );
}
