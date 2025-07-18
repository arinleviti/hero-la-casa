'use client';
import styles from './product-grid.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import { JSX, useState, useRef, useEffect } from 'react';
import FilterBar from '../FilterBar/filter-bar';

import { Burger, Beer } from '../../../Services/menuItems';

interface Props<T extends Burger | Beer> {
    items: T[];
    title: string;
    showFilters?: boolean;
    renderCard: (item: T) => JSX.Element; // function that returns a card component for item T
}
//The component is generic — it works for any type T that is either a Burger or a Beer.
export default function BurgerGrid<T extends Burger | Beer>({
    items,
    title,
    renderCard,
    showFilters = true
}: Props<T>) {

    const [filters, setFilters] = useState({
        vegan: false,
        beef: false,
        chicken:false,
        mediumSpicy: false,
        spicy: false,
        fish: false
    })

    // refs for the burger grid wrapper and filter bar
    const burgerGridRef = useRef<HTMLDivElement | null>(null);
    const [isSticky, setIsSticky] = useState(false);

    // Scroll handler to toggle sticky state
    // Add event listeners INSIDE useEffect to set them up once and clean them up properly.
    // This prevents memory leaks and avoids adding multiple listeners on every render.
    // Always add event listeners inside useEffect to ensure they are registered
    // only when needed, and clean them up properly to avoid duplicates or memory leaks.
    // The cleanup function removes the listener when the component unmounts or dependencies change.
    useEffect(() => {
        if (!showFilters) return;

        const onScroll = () => {
            if (!burgerGridRef.current) return;
            //getBoundingClientRect() returns the size and position of the burger grid container relative to the viewport.
            const rect = burgerGridRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            // If the bottom of the burger grid is below the viewport bottom,
            // the filter bar should stick to viewport bottom
            //bottom: distance from the top of the viewport to the bottom of the element
            setIsSticky(rect.bottom > viewportHeight);
        };

        window.addEventListener('scroll', onScroll);
        onScroll(); // check immediately

        return () => window.removeEventListener('scroll', onScroll);
    }, [showFilters]);

    const filteredItems = showFilters
        ? (items as Burger[]).filter(item => {
            if (filters.vegan && !item.categories.includes('vegano')) return false;
            if (filters.beef && !item.categories.includes('manzo')) return false;
            if (filters.chicken && !item.categories.includes('pollo')) return false;
            if (filters.mediumSpicy && !item.categories.includes('leggermente piccante')) return false;
            if (filters.spicy && !item.categories.includes('piccante')) return false;
            if (filters.fish && !item.categories.includes('pesce')) return false;
            return true;
        }) as T[] : items;

    return (

        <div className={styles.burgerGridWrapper} ref={burgerGridRef}>

            <Container fluid className={styles.burgerGridContainer}>
                <h2 className={styles.gridTitle}>{title}</h2>

                <Row>
                    {filteredItems.map(item => (
                        <Col key={item.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                            {renderCard(item)}
                        </Col>
                    ))}
                </Row>

                {filteredItems.length === 0 && (
                    <p className="text-muted text-center mt-5">Nessun burger corrisponde ai filtri selezionati.</p>
                )}

                {showFilters && (
                    <div className={`${styles.filterBar} ${isSticky ? styles.sticky : styles.static}`}>
                        <FilterBar filters={filters} setFilters={setFilters} />
                    </div>
                )}

            </Container>


        </div>

    );
}