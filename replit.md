# Cristina Yules - Portfolio UGC Creator

## Project Overview
Portfolio website for Cristina Yules, a UGC (User Generated Content) creator. The site showcases her work in beauty, food, lifestyle content creation with videos, photos, and contact functionality.

## Tech Stack
- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS + shadcn/ui components
- **Routing**: React Router DOM
- **Forms**: React Hook Form with Zod validation
- **Email Service**: EmailJS for contact form

## Project Structure
- `src/pages/Index.tsx` - Main landing page with all sections
- `src/components/` - Reusable components including UI components and custom video player
- `src/assets/` - Images and videos for portfolio content
- `vite.config.ts` - Vite configuration for Replit environment

## Recent Changes (November 3, 2025)

### Migration from Lovable to Replit
- Configured Vite server for Replit environment (port 5000, host 0.0.0.0)
- Fixed syntax error in AutoPosterVideo.tsx component
- Successfully migrated all dependencies and verified functionality

### Design Enhancement: Dynamic Background
- Implemented dynamic geometric background with abstract shapes in brown/earth tones
- Added subtle radial gradients throughout the page for visual depth
- Created animated floating shapes that move slowly for a living, non-static feel
- Enhanced gradient sections (.gradient-warm and .gradient-autumn) with additional abstract layers
- All changes maintain excellent readability while adding visual interest

## Color Palette
- Primary: Warm browns (HSL: 25 55% 45%)
- Secondary: Soft beiges (HSL: 35 35% 88%)
- Accent: Terracotta (HSL: 15 65% 60%)
- Background: Light cream tones with dynamic geometric overlays

## Running the Project
- Development: `npm run dev` (runs on port 5000)
- Build: `npm run build`
- Preview: `npm run preview`

## User Preferences
- Spanish language for UI text and content
- Warm, autumn-inspired color scheme
- Dynamic, modern design with subtle animations
- Professional yet approachable aesthetic

## Environment Variables Required
- `VITE_EMAILJS_SERVICE_ID` - EmailJS service identifier
- `VITE_EMAILJS_TEMPLATE_ID` - EmailJS template identifier  
- `VITE_EMAILJS_PUBLIC_KEY` - EmailJS public key

## Portfolio Sections
1. **Hero** - Name, title, social links, profile photo
2. **About** - Bio and lifestyle photo
3. **Videos** - Categorized UGC videos (Beauty, Food, Lifestyle, Travel)
4. **Photos** - Grid of UGC photography
5. **Brands** - Companies that have worked with Cristina
6. **Contact** - Contact form powered by EmailJS

## Notes
- This is a frontend-only application (no backend/database)
- All content is static and defined in the Index.tsx component
- Videos are stored locally in src/assets/videos/
- The AutoPosterVideo component automatically generates video thumbnails from the first frame
