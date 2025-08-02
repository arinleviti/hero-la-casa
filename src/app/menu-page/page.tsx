'use client';

import styles from './page.module.css';
import { Burger, burgers, Beer, beers } from './../Services/menuItems';
import ProductGrid from './components/ProductGrid/product-grid';
import BurgerDetailView from './components/BurgerDetailView/burger-detail-view';
import BeerDetailView from './components/BeerDetailView/beer-detail-view';
import BurgerCard from './components/BurgerCard/burger-card';
import BeerCard from './components/BeerCard/beer-card';
import { motion } from 'framer-motion';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

export default function MenuPage() {
    return (
        // useSearchParams() works only on the client side (browser),
        // so we wrap the client-only part in Suspense to delay rendering
        // until the page loads in the browser and search params are available.

        <Suspense fallback={<div>Loading...</div>}>
            <MenuPageContent />
        </Suspense>
    );
}


function MenuPageContent() {

    const router = useRouter();
    //“Look at the URL query, get the value of the key named burger.”
    //More importantly, it subscribes React to URL changes — so when the URL query changes, your component reacts by re-rendering with the new values.
    const searchParams = useSearchParams();
    //Extracts the value of the burger parameter from the URL query string.
    const burgerName = searchParams.get('burger');
    const beerName = searchParams.get('beer');
    const urlBurger = burgers.find((b) => b.name === burgerName) || null;
    const urlBeer = beers.find((b) => b.name === beerName) || null;

    // When user clicks a burger, update the URL to include ?burger=name
    //encodeURIComponent? It converts special characters in the burger name into URL-safe characters.
    //For example, spaces become %20, accents become %C3%A8, etc.
    //router.push(url) navigates to a new URL client-side without a full page reload. But React re-renders the parts of the UI that depend on the URL to show the correct view.
    //This is called client-side navigation or SPA-style navigation (Single Page Application).
    const handleSelectedBurger = (burger: Burger) => {
        router.push(`?burger=${encodeURIComponent(burger.name)}`, { scroll: false })
    }
    const handleSelectedBeer = (beer: Beer) => {
        router.push(`?beer=${encodeURIComponent(beer.name)}`, { scroll: false })
    }
    // When user clicks "Back", go back in history (browser back)
    const handleBackFromBurger = () => {
        router.back();
    };

    return (
        <div className={styles.sliderContainer}>
            <div className={styles.sliderInner}>
                <div className={styles.gridPage}>
                    <ProductGrid items={burgers} title="I NOSTRI BURGER" isBeer={false} renderCard={(burger) => (
                        <BurgerCard
                            burger={burger}
                            onClick={() => handleSelectedBurger(burger)}
                        />
                    )} />
                    <ProductGrid showFilters={false} items={beers} title="LE NOSTRE BIRRE" isBeer={true} renderCard={(beer) => (
                        <BeerCard
                            beer={beer}
                            onClick={() => handleSelectedBeer(beer)}
                        />
                    )} />
                </div>

                <motion.div
                    className={styles.detailPage}
                    initial={{ x: '100%' }}
                    animate={{ x: urlBurger ? '0%' : '100%' }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                >
                    {urlBurger && (
                        <BurgerDetailView
                            burger={urlBurger}
                            onBack={handleBackFromBurger}
                        />
                    )}
                </motion.div>
                <motion.div
                    className={styles.detailPage}
                    initial={{ x: '100%' }}
                    animate={{ x: urlBeer ? '0%' : '100%' }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                >
                    {urlBeer && (
                        <BeerDetailView
                            beer={urlBeer}
                            onBack={handleBackFromBurger}
                        />
                    )}
                </motion.div>
            </div>
        </div>
    );
}

