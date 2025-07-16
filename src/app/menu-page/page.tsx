'use client';

import styles from './page.module.css';
import { useState } from 'react';
import { Burger, burgers, Beer, beers } from './../Services/menuItems';
import ProductGrid from './components/ProductGrid/product-grid';
import BurgerDetailView from './components/BurgerDetailView/burger-detail-view';
import BeerDetailView from './components/BeerDetailView/beer-detail-view';
import BurgerCard from './components/BurgerCard/burger-card';
import BeerCard from './components/BeerCard/beer-card';
import { motion } from 'framer-motion';

export default function MenuPage() {
    const [selectedBurger, setSelectedBurger] = useState<Burger | null>(null);
    const [selectedBeer, setSelectedBeer] = useState<Beer | null>(null);

    return (
        <div className={styles.sliderContainer}>
            <div className={styles.sliderInner}>
                <div className={styles.gridPage}>
                    <ProductGrid items={burgers} title="I NOSTRI BURGER" renderCard={(burger) => (
                        <BurgerCard
                            burger={burger}
                            onClick={() => setSelectedBurger(burger)}
                        />
                    )} />
                    <ProductGrid showFilters={false} items={beers} title="LE NOSTRE BIRRE" renderCard={(beer) => (
                        <BeerCard
                            beer={beer}
                            onClick={() => setSelectedBeer(beer)}
                        />
                    )} />
                </div>

                <motion.div
                    className={styles.detailPage}
                    initial={{ x: '100%' }}
                    animate={{ x: selectedBurger ? '0%' : '100%' }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                >
                    {selectedBurger && (
                        <BurgerDetailView
                            burger={selectedBurger}
                            onBack={() => setSelectedBurger(null)}
                        />
                    )}
                </motion.div>
                <motion.div
                    className={styles.detailPage}
                    initial={{ x: '100%' }}
                    animate={{ x: selectedBeer ? '0%' : '100%' }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                >
                    {selectedBeer && (
                        <BeerDetailView
                            beer={selectedBeer}
                            onBack={() => setSelectedBeer(null)}
                        />
                    )}
                </motion.div>
            </div>
        </div>
    );
}

