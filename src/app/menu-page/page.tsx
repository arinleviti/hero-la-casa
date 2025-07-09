'use client';

import styles from './page.module.css';
import { useState } from 'react';
import { Burger, burgers } from './../Services/menuItems';
import BurgerGrid from './components/BurgerGrid/burger-grid';
import BurgerDetailView from './components/BurgerDetailView/burger-detail-view';
import { motion } from 'framer-motion';

export default function MenuPage() {
    const [selectedBurger, setSelectedBurger] = useState<Burger | null>(null);

    return (
        <div className={styles.sliderContainer}>
            <div className={styles.sliderInner}>
                <div className={styles.gridPage}>
                    <BurgerGrid burgers={burgers} onSelect={setSelectedBurger} />
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
            </div>
        </div>
    );
}


/* 'use client';
import styles from './page.module.css';
import { useState } from 'react';
import { Burger, burgers } from './../Services/menuItems';
import BurgerGrid from './components/BurgerGrid/burger-grid';
import BurgerDetailView from './components/BurgerDetailView/burger-detail-view';
import { motion } from 'framer-motion';


export default function MenuPage() {
    const [selectedBurger, setSelectedBurger] = useState<Burger | null>(null);

    return (
        <div className={styles.sliderContainer}>
            <motion.div
                className={styles.sliderInner}
                animate={{ x: selectedBurger === null ? '0%' : '-100%' }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
                <div className={styles.gridPage}>
                    <BurgerGrid burgers={burgers} onSelect={setSelectedBurger} />
                </div>
                <div className={styles.detailPage}>
                    {selectedBurger !== null && (
                        <BurgerDetailView burger={selectedBurger} onBack={() => setSelectedBurger(null)} />
                    )}
                </div>
            </motion.div>
        </div>
    )
} */