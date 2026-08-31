// A regular restaurant event (karaoke night, tasting, party, etc.)
export interface RestaurantEvent {
  id: number;
  icon: string; // root-relative path into /public, e.g. '/events-icons/karaoke.svg' or '/burger-jukebox-tiny.webp'
  title: string;
  date: string; // ISO date string, e.g. '2026-09-12'
  link: string;
  videoLink?: string; // optional hosted video URL (e.g. Cloudinary), played directly in an in-page modal instead of opening `link` in a new tab
}

// The "burger of the month" entry. It doesn't come from a single date but
// from a date range, and it references a Burger from menuItems.tsx by id
// instead of carrying its own icon/title/link.
export interface BurgerOfTheMonthEvent {
  id: number;
  burgerId: number; // set this to the Burger.id you want featured that month
  from: string; // ISO date string, e.g. '2026-09-01'
  to: string; // ISO date string, e.g. '2026-09-30'
}

// Discriminated union so the component can render either kind of row
// without guessing at shape.
export type CalendarEntry =
  | { kind: 'event'; data: RestaurantEvent }
  | { kind: 'burgerOfTheMonth'; data: BurgerOfTheMonthEvent };

// --- DATA -------------------------------------------------------------
// Edit these arrays to add/remove events. Dates use ISO format
// (YYYY-MM-DD) so they sort and parse predictably.

export const restaurantEvents: RestaurantEvent[] = [
  {
    id: 1,
    icon: '/burger-jukebox-tiny.webp',
    title: 'Serata Kanta Game',
    date: '2026-09-10',
    link: 'https://www.facebook.com/heroburgerpredazzo',
    videoLink: 'https://res.cloudinary.com/dvr9t29vj/video/upload/v1788184404/KangaGame_vpqy6l.mp4',
  },
  {
    id: 2,
    icon: '/events-icons/birra.svg',
    title: 'Degustazione birre artigianali',
    date: '2026-09-20',
    link: 'https://www.facebook.com/heroburgerpredazzo',
  },
  {
    id: 3,
    icon: '/events-icons/halloween.svg',
    title: 'Halloween party',
    date: '2026-10-31',
    link: 'https://www.facebook.com/heroburgerpredazzo',
  },
];

// Set the burgerId by hand for each month you want to feature. This is
// intentionally manual rather than auto-detected from Burger.burgerOfTheMonth,
// so you decide which burger appears in which of the three columns.
export const burgerOfTheMonthEvents: BurgerOfTheMonthEvent[] = [
  {
    id: 1,
    burgerId: 1, // burger featured this month
    from: '2026-09-01',
    to: '2026-09-30',
  },
  {
    id: 2,
    burgerId: 2, // burger featured next month
    from: '2026-10-01',
    to: '2026-10-31',
  },
  {
    id: 3,
    burgerId: 3, // burger featured the month after
    from: '2026-11-01',
    to: '2026-11-30',
  },
];