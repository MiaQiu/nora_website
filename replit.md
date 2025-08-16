# ParentPro - Family Support Platform

## Overview

ParentPro is a comprehensive digital platform designed to provide expert support for working families at every stage of their journey. The application serves as a global, proactive care model offering personalized guidance, expert consultations, and community connections. The platform features a modern React-based frontend with a clean, professional design showcasing services like mental health support, return-to-work guidance, child care assistance, and specialized support for neurodivergent families.

## Recent Changes (August 16, 2025)

✓ Complete parenting coach landing page built based on Cleo-inspired design screenshots
✓ Implemented hero section with compelling headline and call-to-action buttons  
✓ Created services grid with 8 different support categories
✓ Built timeline journey component showing family support stages
✓ Added "How it Works" section with mobile app mockup
✓ Implemented scrollable therapist carousel with auto-scroll functionality
✓ Added navigation, contact section, and footer
✓ Professional color scheme and responsive design completed

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with custom design tokens for consistent theming
- **UI Components**: shadcn/ui component library built on Radix UI primitives for accessibility
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management and caching
- **Forms**: React Hook Form with Zod validation for robust form handling

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for full-stack type safety
- **Build System**: ESBuild for fast server-side bundling
- **Development**: TSX for TypeScript execution in development
- **Storage Interface**: Abstracted storage layer with in-memory implementation (ready for database integration)

### Data Storage
- **ORM**: Drizzle ORM configured for PostgreSQL with schema-first approach
- **Database**: PostgreSQL (configured via Neon serverless)
- **Migrations**: Drizzle Kit for database schema management
- **Schema**: Type-safe database schemas with Zod validation integration

### Development Environment
- **Monorepo Structure**: Shared types and schemas between client and server
- **Hot Reload**: Vite HMR for frontend, automatic server restart for backend changes
- **Path Aliases**: Configured for clean imports (@/, @shared/, @assets/)
- **Error Handling**: Runtime error overlay for development debugging

### Styling and Design System
- **Design Tokens**: Custom CSS variables for colors, spacing, and typography
- **Theme Support**: Light/dark mode capability with CSS custom properties
- **Typography**: Inter font family for consistent text rendering
- **Component Variants**: Class variance authority for systematic component styling
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## External Dependencies

### Core Frontend Libraries
- **React Ecosystem**: React, React DOM, React Query for modern React patterns
- **UI Framework**: Radix UI primitives for accessible, unstyled components
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer for utility-first CSS
- **Icons**: Lucide React for consistent iconography
- **Date Handling**: date-fns for date manipulation and formatting

### Backend Dependencies
- **Server Framework**: Express.js for HTTP server and middleware
- **Database**: Neon serverless PostgreSQL with connection pooling
- **ORM**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **Session Management**: connect-pg-simple for PostgreSQL-backed sessions
- **Validation**: Zod for runtime type validation and schema definition

### Development Tools
- **Build Tools**: Vite, ESBuild, TypeScript compiler for optimized builds
- **Replit Integration**: Custom Vite plugins for Replit development environment
- **Code Quality**: TypeScript strict mode for enhanced type checking
- **Package Management**: NPM with lock file for reproducible installs

### Notable Integrations
- **Image Assets**: Unsplash for placeholder imagery in the marketing site
- **Font Loading**: Google Fonts integration for web typography
- **Error Tracking**: Replit-specific error modal for development debugging
- **Performance**: Trace mapping for source map optimization