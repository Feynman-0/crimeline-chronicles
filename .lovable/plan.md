
# Crimeline Hollywood — Complete Author Website

## Overview
A cinematic, editorial multi-page React website for Thomas Collins' crime fiction novel "Crimeline Hollywood" with a warm Old Hollywood aesthetic, extensive Framer Motion animations, and 9 pages with nested routing.

## Design System
- **Palette**: Warm cream (#FAF6F0), deep crimson (#8B1A1A), champagne gold (#C9A84C), charcoal (#2C2C2C), white (#FFFFFF)
- **Typography**: Playfair Display (headings), Cormorant Garamond (subheadings), Lato (body), gold uppercase labels
- **Animations**: Framer Motion throughout — fadeInUp, parallax heroes, text reveal, card tilt, floating book cover, staggered children, SVG path draw, countUp stats, page transitions

## Global Components
1. **Sticky Navbar** — transparent → solid cream on scroll, "CRIMELINE / HOLLYWOOD" logo, animated underline links, "Read a Free Chapter" CTA pill, mobile full-screen overlay menu, dropdown for Insider's Story sub-pages
2. **Footer** — parchment background, 3 columns (logo+tagline, quick links, social), gold top border
3. **Scroll Progress Bar** — thin crimson line at top of viewport
4. **Page Transition Wrapper** — crimson curtain wipe between routes
5. **Custom cursor** — crosshair/magnifying glass style

## Pages

### Page 1: Home (/)
- **Hero**: Full viewport, Hollywood hills parallax bg, text reveal H1, rotating tagline typewriter, 2 CTAs, floating book cover, scroll indicator
- **Synopsis**: 2-column — pull quote with crimson bar + synopsis text, star rating
- **Buy The Book**: Marquee retailer logos in white cards with hover lift
- **Meet the Author**: Split layout — oval-framed author photo + bio, animated stat counters
- **Characters Teaser**: Constellation overlay bg, horizontal scroll character cards with zodiac symbols
- **Insider's Story Promo**: Film noir texture, 4 sub-page teasers with hover arrows, large stylized "4"
- **Press Strip**: Gold marquee ticker of press quotes
- **Contact CTA**: City lights bg, heading + inline contact form
- **Footer**

### Page 2: Crimeline Hollywood (/crimeline-hollywood)
- **Hero**: Aerial Hollywood parallax, film strip decoration
- **Book Detail**: 3D tilt book cover + full synopsis + retailer carousel + genre badges
- **Story Tension**: 3 animated feature cards (Hitman, Kidnapping, Corporate Cabal)
- **Pull Quote**: Full-width cinematic bg with frosted quote panel

### Page 3: Astrology of Characters (/the-astrology-of-hollywood-crimeliness-central-characters)
- **Hero**: Night sky bg, zodiac symbol animation
- **Characters Grid**: 2-column cards — SVG constellation draw animation, zodiac badge, character details (Dash/Aquarius, Rebecca/Taurus, Harmon/Capricorn, T. Wayne/Libra, Dr. V/Leo, Ruthann/Cancer)

### Page 4: Dash's Escape (/dashs-escape-from-hollywood)
- **Hero**: Motion-blurred city lights, radiating motion lines
- **Timeline**: Alternating left/right content blocks with scroll animations
- **Map Teaser**: Decorative SVG Hollywood map with hover tooltips

### Page 5: Book Ingredients (/book-ingredients)
- **Hero**: Vintage recipe card aesthetic, parchment texture
- **Ingredients List**: Typewriter-style scroll-triggered list
- **Recipe Card**: Vintage illustrated card with ornate borders, gold calligraphy, hover flourishes

### Page 6: Tabloids (/a-tale-told-by-the-tabloids)
- **Hero**: Newsprint texture with crimson/gold color bleed animation
- **Tabloid Layout**: Newspaper-style columns, "BREAKING NEWS" ticker, pull-out photos
- **Headline Carousel**: Rotating stack of faux tabloid front pages

### Page 7: Free Chapter (/free-chapter)
- **Hero**: Open book ambiance
- **Chapter Reader**: 680px centered, serif font, drop cap, reading progress bar, page-turn flourish
- **CTA**: Buy full book button

### Page 8: Press (/press)
- **Hero**: Luxury premiere bg
- **Press Grid**: Masonry cards with gold quote marks, star ratings, staggered animation
- **Media Kit CTA**: Full-width press inquiry banner

### Page 9: Contact (/contact)
- **Hero**: City dusk lights
- **Contact Section**: 2-column — floating info cards + full form with animated send button (paper airplane), social icons

## Routing Structure
React Router v6 with Insider's Story as a dropdown containing 4 sub-pages (Astrology, Dash's Escape, Book Ingredients, Tabloids). All routes get crimson curtain page transitions.

## Technical
- Framer Motion for all 10 animation types specified
- Google Fonts loaded via index.html
- Uploaded book cover image used throughout
- Lucide React icons
- Fully responsive mobile-first
- All Unsplash hero images with warm cream gradient overlays
