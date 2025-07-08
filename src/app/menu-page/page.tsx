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
            <motion.div
            className={styles.SliderInner}
            animate={{x: selectedBurger === null ? '0%' : '100%'}}
            transition= {{duration: 0.6, ease: 'easeInOut'}}
            >
            <div className={styles.gridPage}>
                <BurgerGrid burgers={burgers} onSelect={setSelectedBurger} /> 
            </div>
            <div className={styles.detailPage}>
                {selectedBurger !== null && (
                    <BurgerDetailView burger={burgers.find(b => b.id === selectedBurger.id)!} 
                    onBack = {() => setSelectedBurger(null)}/>
                )}
            </div>
           </motion.div>
        </div>
    )
}