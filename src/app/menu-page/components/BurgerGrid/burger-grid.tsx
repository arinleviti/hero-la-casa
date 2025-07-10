'use client';
import styles from './burger-grid.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import FilterBar from '../FilterBar/filter-bar';
import BurgerCard from '../BurgerCard/burger-card'
import { Burger } from '../../../Services/menuItems';

interface Props {
    burgers: Burger[];
    onSelect: (burger: Burger) => void;
}

export default function BurgerGrid({ burgers, onSelect }: Props) {

    const [filters, setFilters] = useState({
        vegan: false,
        beef: false,
        mediumSpicy: false,
        spicy: false,
        fish: false
    })

    const filteredBurgers = burgers.filter(burger => {
        if (filters.vegan && !burger.categories.includes('vegano')) return false;
        if (filters.beef && !burger.categories.includes('manzo')) return false;
        if (filters.mediumSpicy && !burger.categories.includes('leggermente piccante')) return false;
        if (filters.spicy && !burger.categories.includes('piccante')) return false;
        if (filters.fish && !burger.categories.includes('pesce')) return false;
        return true;
    });

    return (
        <>
            <div className={styles.filterBar}>
                <FilterBar filters={filters} setFilters={setFilters} />
            </div>
            <Container fluid className={styles.burgerGridContainer}>
                <h2 className={styles.gridTitle}>I NOSTRI BURGER</h2>

                <Row>
                    {filteredBurgers.map(burger => (
                        <Col key={burger.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                            <BurgerCard burger={burger} onClick={() => onSelect(burger)} />
                        </Col>
                    ))}
                </Row>

                {filteredBurgers.length === 0 && (
                    <p className="text-muted text-center mt-5">Nessun burger corrisponde ai filtri selezionati.</p>
                )}
            </Container>
        </>
    );
}