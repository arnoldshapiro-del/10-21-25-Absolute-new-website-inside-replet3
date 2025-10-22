# Overview

This is a mental health screening and educational web application built for a psychiatric practice (Dr. Arnold G. Shapiro, MD). The application provides anonymous mental health screening tools, educational resources about various psychiatric conditions, and patient information. It serves patients in the Cincinnati and Northern Kentucky area, with support for both in-person and telepsychiatry services.

The application is built as a full-stack TypeScript project using React for the frontend, Express for the backend, with Vite as the build tool and development server. The system is designed to be privacy-focused - all screening answers stay in the user's browser with no data collection or storage.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type safety
- Vite as the development server and build tool, configured for SPA mode
- React SWC plugin for fast refresh during development
- Wouter for client-side routing (lightweight alternative to React Router)

**UI Component System**
- Shadcn/ui component library built on Radix UI primitives
- Tailwind CSS for styling with a custom psychiatric-themed design system
- Design system uses calming blues (primary) and healing greens, optimized for trust and professionalism
- CSS variables defined in HSL format for theming consistency
- Component composition pattern using class-variance-authority for variants

**State Management**
- TanStack Query (React Query) for server state management and data fetching
- React Hook Form with Zod resolvers for form validation
- Local component state using React hooks

**Static Educational Content**
- Static HTML pages in `/public/about-conditions/` for SEO optimization
- Condition-specific education pages (ADHD, anxiety, depression, PTSD, etc.)
- FAQ page with structured data markup for voice search
- All screening tools render client-side with JavaScript for privacy

**Interactive Slideshow System**
- Educational slideshows for 19 psychiatric conditions stored in `client/public/about-conditions/`
- Slides served as static PNG files (557 total slide images across all conditions)
- Manifest-based loading system for instant performance (no 404 requests)
  - Build script `scripts/generate-slide-manifest.js` scans folders and generates `/about-conditions/manifest.json`
  - React component fetches manifest once on mount, then instantly loads slides for each condition
  - Performance: Instant loading vs. previous 5-10 second delays from 404 timeouts
- Dynamic slide loading using URL-encoded folder names to handle spaces and special characters
- Folder naming convention matches condition IDs in `AdhdEducation.tsx`
- Critical: Slides must be in `client/public/` (not just `public/`) for Vite to serve them correctly
- Recent fixes (Oct 2025): 
  - Replaced 179-byte broken StackBlitz URL files with actual slide images from GitHub and uploaded zip files
  - Implemented manifest-based loading to eliminate 50-candidate brute-force approach

## Backend Architecture

**Server Framework**
- Express.js server running on port 5000
- TypeScript configuration with ES2022 target
- Request logging middleware tracking method, path, status, and timing
- JSON and URL-encoded body parsing

**Development vs Production Modes**
- Development: Vite middleware integration for HMR and instant preview
- Production: Serves pre-built static assets from `/dist/public`
- Conditional server setup based on NODE_ENV

**Routing Strategy**
- Minimal API surface - currently only `/api/health` endpoint
- SPA routing handled client-side via Vite/static serving
- All routes fall through to `index.html` for client-side routing

## Data Storage

**Database Configuration**
- Drizzle ORM configured for PostgreSQL dialect
- Database schema defined in `/shared/schema.ts` for sharing between client and server
- Schema uses Drizzle-Zod for runtime validation
- Placeholder schema currently exists (app is mostly static/client-only)
- Migration files output to `/migrations` directory
- Connection string required via `DATABASE_URL` environment variable

**Current Storage Implementation**
- In-memory storage interface defined in `server/storage.ts`
- No active database usage - application is currently stateless
- All screening results stay client-side (privacy by design)

**Data Privacy Design**
- No user answers or personal information collected
- Screening tools calculate results entirely in browser
- Educational content served as static files

## External Dependencies

**UI & Component Libraries**
- @radix-ui/* - Accessible UI primitives (accordion, dialog, dropdown, etc.)
- shadcn/ui - Pre-built component patterns
- Tailwind CSS - Utility-first styling
- Lucide React - Icon library
- embla-carousel-react - Carousel functionality
- class-variance-authority - Component variant management
- cmdk - Command menu component

**State & Forms**
- @tanstack/react-query - Server state management
- react-hook-form - Form handling
- @hookform/resolvers - Form validation
- zod - Schema validation
- drizzle-zod - Database schema to Zod conversion

**Backend Services**
- Express - Web server framework
- Drizzle ORM - Database ORM
- PostgreSQL (postgres package) - Database driver
- Vite - Development server and build tool

**Development Tools**
- TypeScript - Type safety
- ESLint - Code linting
- tsx - TypeScript execution for development
- lovable-tagger - Development component tagging

**External Services**
- Supabase (@supabase/supabase-js) - Currently configured but not actively used
- Database provisioning required via DATABASE_URL environment variable

**SEO & Analytics**
- Structured data (JSON-LD) for physician information and FAQ schema
- Google site verification configured
- Robots.txt allowing major search engines and social crawlers
- Open Graph and Twitter card meta tags