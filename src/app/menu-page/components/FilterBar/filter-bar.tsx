'use client';
import styles from './filter-bar.module.css';
import { div } from 'framer-motion/client';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

interface Filters {
  vegan: boolean;
  beef: boolean;
  mediumSpicy: boolean;
  spicy: boolean;
  fish: boolean;
}

interface FilterBarProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

export default function FilterBar({ filters, setFilters }: FilterBarProps) {

  const toggleFilter = (key: keyof Filters) => {
    setFilters(prev => ({
        // Copy all the properties from the previous filters object
// Then overwrite the property named by 'key' with the opposite of its current value
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className={styles.filterBar}>
    <ButtonGroup className=" flex-wrap">
      <ToggleButton
        id="filter-vegan"
        value="vegan"
        type="checkbox"
        className={`${styles.button} ${styles.vegan}`}
        checked={filters.vegan}
        onClick={() => toggleFilter('vegan')}
      >
        VEGANO
      </ToggleButton>

      <ToggleButton
        id="filter-beef"
        value="beef"
        type="checkbox"
        className={`${styles.button} ${styles.beef}`}
        checked={filters.beef}
        onClick={() => toggleFilter('beef')}
      >
        MANZO
      </ToggleButton>

      <ToggleButton
        id="filter-mediumSpicy"
        value="mediumSpicy"
        type="checkbox"
        className={`${styles.button} ${styles.mediumSpicy}`}
        checked={filters.mediumSpicy}
        onClick={() => toggleFilter('mediumSpicy')}
      >
        LEGGERMENTE PICCANTE
      </ToggleButton>

      <ToggleButton
        id="filter-spicy"
        value="spicy"
        type="checkbox"
        className={`${styles.button} ${styles.spicy}`}
        checked={filters.spicy}
        onClick={() => toggleFilter('spicy')}
      >
        PICCANTE
      </ToggleButton>

      <ToggleButton
        id="filter-fish"
        value="fish"
        className={`${styles.button} ${styles.fish}`}
        type="checkbox"
        checked={filters.fish}
        onClick={() => toggleFilter('fish')}
      >
        PESCE
      </ToggleButton>
    </ButtonGroup>
    </div>
  );
}