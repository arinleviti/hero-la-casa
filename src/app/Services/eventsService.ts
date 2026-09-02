// A regular restaurant event (karaoke night, tasting, party, etc.). Can span
// a single day (from === to) or a longer period, just like the
// burger-of-the-month entries below.
export interface RestaurantEvent {
  id: number;
  icon: string; // root-relative path into /public, e.g. '/events-icons/karaoke.svg' or '/burger-jukebox-tiny.webp'
  title: string;
  from: string; // ISO date string, e.g. '2026-09-12'. For a one-day event, set to === from.
  to: string; // ISO date string, e.g. '2026-09-12'
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
    icon: '/logos/kanta-game-logo.svg',
    title: '🧑‍🎤Serata Kanta Game🎤',
    from: '2026-10-01',
    to: '2026-10-01',
    link: 'https://www.facebook.com/heroburgerpredazzo',

  },
  {
    id: 2,
    icon: '/burger-jukebox-tiny.webp',
    title: '🧑‍🎤Burger & Jukebox🎤',
    from: '2026-10-22',
    to: '2026-10-22',
    link: 'https://www.facebook.com/heroburgerpredazzo',
    videoLink: 'https://res.cloudinary.com/dvr9t29vj/video/upload/v1788184404/KangaGame_vpqy6l.mp4',
  },
  {
    id: 3,
    icon: '/MarqueeImgs/envelopes_stack_shrunk.png',
    title: '🎂Si parte con le buste del Compleanno Hero!🎁',
    from: '2026-09-21',
    to: '2026-10-31',
    link: '/buste',
  },
  {
    id: 4,
    icon: '/MarqueeImgs/pumpkin.webp',
    title: '🧛Halloween party👻',
    from: '2026-10-31',
    to: '2026-10-31',
    link: 'https://www.facebook.com/heroburgerpredazzo',
  },
  {
    id: 5,
    icon: '/logos/kanta-game-logo.svg',
    title: '🧑‍🎤Serata Kanta Game🎤',
    from: '2026-11-05',
    to: '2026-11-05',
    link: 'https://www.facebook.com/heroburgerpredazzo',

  },
  {
    id: 6,
    icon: '/burger-jukebox-tiny.webp',
    title: '🧑‍🎤Burger & Jukebox🎤',
    from: '2026-11-26',
    to: '2026-11-26',
    link: 'https://www.facebook.com/heroburgerpredazzo',
    videoLink: 'https://res.cloudinary.com/dvr9t29vj/video/upload/v1788184404/KangaGame_vpqy6l.mp4',
  },
  {
    id: 7,
    icon: '/events-icons/desmontegada-icon.svg',
    title: 'Desmontegada',
    from: '2026-10-04',
    to: '2026-10-04',
    link: 'https://www.facebook.com/heroburgerpredazzo',
  },
  {
    id: 7,
    icon: '/events-icons/san-martino-icon.svg',
    title: '🔥San Martino🔔',
    from: '2026-11-11',
    to: '2026-11-11',
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