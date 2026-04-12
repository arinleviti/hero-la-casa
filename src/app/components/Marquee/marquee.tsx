'use client'

import styles from './marquee.module.css'
import Marquee from "react-fast-marquee";
import { Burger, burgers } from '../../Services/menuItems'
import { newsItems, NewsItems, NewsModalContent } from '../../Services/newsItems'
import SwiperModal from '../SwiperObject/SwiperModal/swiper-modal'
import Image from "next/image";
import { useState } from 'react';
import NewsModal from '../Marquee/NewsModal/news-modal';
import React from "react";
import { useRouter } from 'next/navigation';
export default function BurgerMarquee() {
    const router = useRouter();
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedBurger, setSelectedBurger] = useState<Burger | null>(null);
    const [newsModalOpen, setNewsModalOpen] = useState(false);
    const [selectedNewsModalContent, setSelectedNewsModalContent] = useState<NewsModalContent | null>(null);

    const burgerOfTheMonth = burgers.find(burger => burger.burgerOfTheMonth === true)
    /* const newsOfTheMonth = newsItems.reduce((max: NewsItems, news: NewsItems) => news.id > max.id ? news : max, newsItems[0]); */
    const newsOfTheMonth = newsItems; // Show all news items

    const openModal = (burger: Burger) => {
        setSelectedBurger(burger);
        setModalOpen(true);
    }
    const openNewsModal = (newsModalContent: NewsModalContent) => {
        setSelectedNewsModalContent(newsModalContent);
        setNewsModalOpen(true);
    }
    const closeModal = () => {
        setSelectedBurger(null);
        setModalOpen(false);
    }
    const closeNewsModal = () => {
        setNewsModalOpen(false);
    }
   const openLink = (url: string) => {
    if (url.startsWith('http')) {
        window.open(url, '_blank'); // link esterno
    } else {
        router.push(url); // link interno Next.js
    }
}
    return (
        <>
            <Marquee speed={95} gradient={false} pauseOnHover className={styles.marqueeContainer} autoFill={true}>
                {/* Burger of the Month */}
                {burgerOfTheMonth && (
                    <div onClick={() => openModal(burgerOfTheMonth)} className={styles.itemWrapper}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src={burgerOfTheMonth.imageSmallUrl ?? "/images/default-burger.jpg"}
                                alt={burgerOfTheMonth.name}
                                width={60}
                                height={60}
                                style={{ objectFit: 'contain', marginRight: '0.0rem' }}
                                priority={false}
                            />
                        </div>
                        <div className={styles.textWrapper}>
                            <div className={styles.burgerLabel}>LIMITED EDITION!</div>
                            <div className={styles.burgerName}>{burgerOfTheMonth.name}</div>
                        </div>
                    </div>
                )}
                <div className={styles.newsLine}>
                    <Image
                        src="/MarqueeImgs/DIviderBrown.webp"
                        alt="divider"
                        width={7}
                        height={60}
                        priority
                    />
                </div>
                {/* News of the Month */}
                {newsOfTheMonth.map((news: NewsItems) => (
                    <div key={news.id} className={styles.newsItemWrapper}>
                        <div
                            onClick={() => news.newsModalContent ? openNewsModal(news.newsModalContent) : (news.urlLink ? openLink(news.urlLink) : null)}
                            className={styles.newsLink}
                        >
                            {news.pic && (
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={news.pic}
                                        alt={news.header1}
                                        width={70}
                                        height={70}
                                        style={{ objectFit: 'contain', marginRight: '1rem' }}
                                        priority
                                    />
                                </div>
                            )}
                            <div className={styles.newsSubHeader}>
                                <div className={styles.header1}>{news.header1}</div>
                                {news.header2 && <div className={styles.header2}>{news.header2}</div>}
                            </div>
                        </div>

                        {/* Divider outside the clickable area */}

                        <div className={styles.newsLine}>
                            <Image
                                src="/MarqueeImgs/DIviderBrown.webp"
                                alt="divider"
                                width={7}
                                height={60}
                                priority
                            />
                        </div>

                    </div>
                ))}


            </Marquee>

            {modalOpen &&
                <SwiperModal burger={selectedBurger} onClose={closeModal} />
            }
            {newsModalOpen && selectedNewsModalContent &&
                <NewsModal onClose={closeNewsModal} newsModalContent={selectedNewsModalContent} />
            }
        </>
    );
}
