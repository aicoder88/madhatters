# Mad Hatter Pub - Feature Documentation

## Overview

Mad Hatter Pub is a single-page marketing website for a nightlife pub located in downtown Montreal. The application is built with React + Vite and features a modern, responsive design with smooth animations and interactive components.

## Technology Stack

- **Frontend Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS with shadcn/ui components
- **Animations:** Framer Motion
- **Routing:** React Router DOM
- **Backend:** Supabase (for potential future features)

## Page Sections

### 1. Navigation Header

**Location:** `src/components/home.tsx` (lines 24-64)

A fixed navigation bar that remains visible while scrolling:

- Logo and pub name on the left
- Navigation links (Home, Menu, Atmosphere, Location, Contact)
- Responsive mobile menu button
- Glass-morphism effect with backdrop blur

### 2. Hero Section

**Component:** `src/components/HeroSection.tsx`

A full-screen hero area with:

- **Image Carousel:** Rotating background images showcasing the pub atmosphere
- **Animated Decorations:** Floating decorative SVG elements
- **Content Overlay:** Title, tagline, operating hours, location info
- **Call-to-Action Button:** "Explore Our Pub" with hover effects

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| images | string[] | 4 default images | Carousel background images |
| title | string | "Mad Hatter Pub" | Main heading |
| tagline | string | "Montreal's Ultimate..." | Subtitle text |
| ctaText | string | "Explore Our Pub" | Button text |
| onCtaClick | () => void | () => {} | Button click handler |

### 3. About Section

**Location:** `src/components/home.tsx` (lines 74-105)

Brief introduction with:
- Welcome message
- Operating hours badge
- Downtown Montreal location badge
- Fade-in animation on scroll

### 4. Menu Section

**Component:** `src/components/MenuComponent.tsx`

Interactive tabbed menu display:

- **Food Menu Tab:** Appetizers, Main Courses, Desserts
- **Drinks Menu Tab:** Signature Cocktails, Beer Selection, Wine List, Non-Alcoholic Options
- Accordion-style category expansion
- Item cards with images, descriptions, prices, and tags

**Data Structure:**
```typescript
interface MenuItem {
  id: string
  name: string
  description: string
  price: string
  image?: string
  tags?: string[]  // e.g., "Vegetarian", "Shareable"
}

interface MenuCategory {
  id: string
  name: string
  items: MenuItem[]
}
```

### 5. Atmosphere Gallery

**Component:** `src/components/AtmosphereGallery.tsx`

Photo gallery showcasing pub ambiance:

- Grid layout (1-3 columns responsive)
- Category tags (Games, Nightlife)
- Hover effects with caption reveal
- Click to open full-size dialog
- Animated decorative elements

### 6. Staff Gallery

**Component:** `src/components/StaffGallery.tsx`

Team member photo gallery:

- Grid layout display
- Hover effects with captions
- Full-size image dialog on click
- Custom captions for each team member

### 7. Pub Team Gallery

**Component:** `src/components/PubTeamGallery.tsx`

Alternative team display with:

- Square aspect ratio images
- Team member names and captions
- Staggered animation on scroll
- Hover zoom effect

### 8. Location Section

**Component:** `src/components/LocationSection.tsx`

Location and contact information:

- **Embedded Google Map:** Interactive iframe showing pub location
- **Contact Card:** Address, phone, operating hours
- **Action Buttons:** "Get Directions" (opens Google Maps), "Call Now"
- **Nearby Attractions:** List of landmarks with distances and tooltips

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| address | string | "1240 Crescent St..." | Street address |
| phone | string | "(514) 393-1240" | Phone number |
| email | string | "info@madhattermtl.ca" | Email address |
| landmarks | array | Bell Center, McGill, Concordia | Nearby attractions |

### 9. Contact Section

**Location:** `src/components/home.tsx` (lines 183-231)

Contact information display:

- Phone and email cards
- Social media links (Instagram, Facebook, Twitter)
- Hover effects on social icons

### 10. Footer

**Location:** `src/components/home.tsx` (lines 235-302)

Site footer with:

- Logo and description
- Operating hours
- Quick navigation links
- Copyright notice

## UI Components

The application uses shadcn/ui components located in `src/components/ui/`:

| Component | Usage |
|-----------|-------|
| `accordion` | Menu category expansion |
| `button` | CTAs and action buttons |
| `card` | Menu items, contact info, gallery items |
| `carousel` | Hero image slider |
| `dialog` | Full-size image viewer |
| `tabs` | Food/Drinks menu switching |
| `tooltip` | Landmark descriptions |
| `badge` | Menu item tags |

## Animations

Framer Motion is used throughout for:

- **Scroll animations:** Elements fade/slide in when entering viewport
- **Hover effects:** Buttons scale, cards lift
- **Decorative elements:** Rotating/floating SVGs and images
- **Page transitions:** Smooth content reveals

## Responsive Design

- Mobile-first approach
- Breakpoints: `md` (768px), `lg` (1024px)
- Mobile navigation converts to hamburger menu
- Grid layouts adjust from 1 to 2-3 columns
- Touch-friendly carousel controls

## Development

### Running Locally

```bash
npm install
npm run dev
```

### Testing

```bash
npm run test        # Watch mode
npm run test:run    # Single run
npm run test:coverage  # With coverage report
```

### Building

```bash
npm run build
npm run preview     # Preview production build
```

## Future Enhancements

Potential features for future development:

1. Online table reservations (Supabase integration)
2. Event calendar and booking
3. Dynamic menu management via CMS
4. Customer reviews integration
5. Newsletter signup
6. Multi-language support (English/French)
