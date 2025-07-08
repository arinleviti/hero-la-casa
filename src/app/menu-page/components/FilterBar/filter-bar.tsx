'use client';

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
    <ButtonGroup className="mb-4 flex-wrap">
      <ToggleButton
        id="filter-vegan"
        value="vegan"
        type="checkbox"
        variant={filters.vegan ? 'success' : 'outline-success'}
        checked={filters.vegan}
        onClick={() => toggleFilter('vegan')}
      >
        Vegano
      </ToggleButton>

      <ToggleButton
        id="filter-beef"
        value="beef"
        type="checkbox"
        variant={filters.beef ? 'danger' : 'outline-danger'}
        checked={filters.beef}
        onClick={() => toggleFilter('beef')}
      >
        Manzo
      </ToggleButton>

      <ToggleButton
        id="filter-mediumSpicy"
        value="mediumSpicy"
        type="checkbox"
        variant={filters.mediumSpicy ? 'warning' : 'outline-warning'}
        checked={filters.mediumSpicy}
        onClick={() => toggleFilter('mediumSpicy')}
      >
        Leggermente Piccante
      </ToggleButton>

      <ToggleButton
        id="filter-spicy"
        value="spicy"
        type="checkbox"
        variant={filters.spicy ? 'warning' : 'outline-warning'}
        checked={filters.spicy}
        onClick={() => toggleFilter('spicy')}
      >
        Piccante
      </ToggleButton>

      <ToggleButton
        id="filter-fish"
        value="fish"
        type="checkbox"
        variant={filters.fish ? 'info' : 'outline-info'}
        checked={filters.fish}
        onClick={() => toggleFilter('fish')}
      >
        Pesce
      </ToggleButton>
    </ButtonGroup>
  );
}