'use client';
import styles from './product-grid.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import { JSX, useState } from 'react';
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
        mediumSpicy: false,
        spicy: false,
        fish: false
    })

    // The special return type 'eatItem is Burger' tells TypeScript:
    //   "If this returns true, treat 'eatItem' as a Burger from now on."
    //function isBurger(item: Burger | Beer): item is Burger {
        // 'itemAsBurger' is just telling TypeScript to treat 'eatItem' like a Burger here
        // We check if 'categories' exists on it — that's how we know it's a Burger
        //return (item as Burger).categories !== undefined;
    //}
    //If showFilters is true, apply the filters on the items array.
    //Otherwise, just use the full items list (e.g. for beers).
  
   
    const filteredItems = showFilters
        ?(items as Burger[]).filter(item => {
            if (filters.vegan && !item.categories.includes('vegano')) return false;
            if (filters.beef && !item.categories.includes('manzo')) return false;
            if (filters.mediumSpicy && !item.categories.includes('leggermente piccante')) return false;
            if (filters.spicy && !item.categories.includes('piccante')) return false;
            if (filters.fish && !item.categories.includes('pesce')) return false;
            return true;
        }) as T[] : items;
console.log("Filtered items count:", filteredItems.length);
    return (
        <>
            {showFilters && (
                <div className={styles.filterBar}>
                    <FilterBar filters={filters} setFilters={setFilters} />
                </div>
            )}
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
            </Container>
        </>
    );
}