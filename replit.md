# Jade Royale Casino Platform

## Overview

Jade Royale is a promotional landing page with user registration functionality for an online casino platform. Built with React, Express, and PostgreSQL, it provides a clean, simple interface for new users to discover and join the platform.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack**: React with TypeScript, Vite build system, Wouter for routing

The frontend uses a component-based architecture with shadcn/ui components built on Radix UI primitives. The application consists of two main pages:

- **Main Landing Page** (`/`): Promotional page with hero section, platform features, and call-to-action buttons to register
- **Registration Page** (`/register`): User registration form for creating new accounts

**State Management**: TanStack Query (React Query) handles all server state with automatic caching. Local component state managed with React hooks.

**Design System**: Tailwind CSS with custom dark theme color palette. CSS variables enable consistent theming across components. Custom animations for particles background and floating casino chips.

**Form Handling**: React Hook Form with Zod validation ensures type-safe form submissions with client-side validation before API calls.

### Backend Architecture

**Technology Stack**: Express.js with TypeScript, ESM module format

The server implements a simple RESTful API with the following endpoint:

- `POST /api/register` - Create new user account with duplicate username validation

**Development Mode**: Vite integration in middleware mode provides HMR during development. Production builds serve static assets from `dist/public`.

### Data Storage

**Database**: PostgreSQL accessed via Neon serverless driver for connection pooling and serverless compatibility

**Schema Design**: Single table defined using Drizzle ORM:

1. **users** - User accounts
   - id (UUID primary key)
   - username (unique)
   - email, fullName, phone, password

**Data Access Layer**: Storage interface abstraction in `server/storage.ts` uses raw SQL queries via Neon driver. This provides direct database access while maintaining type safety through TypeScript interfaces. All database column names use snake_case, mapped to camelCase in TypeScript objects.

**Migration Strategy**: Drizzle Kit configured for schema push. Schema source file: `shared/schema.ts`.

### Authentication & Authorization

**Current State**: Basic user registration implemented. Passwords are currently stored as plain text.

**Future Considerations**: Production deployment would require:
- Password hashing (bcrypt/argon2)
- Session management (connect-pg-simple for PostgreSQL-backed sessions)
- Authentication middleware
- Login functionality

## External Dependencies

### Third-Party Services

**Database Hosting**: Neon (serverless PostgreSQL)
- Connection string via `DATABASE_URL` or `POSTGRES_URL` environment variables
- Serverless driver enables HTTP-based database access

**UI Components**: Radix UI primitives provide accessible, unstyled components, all styled via Tailwind CSS with shadcn/ui conventions

### Build & Development Tools

**Vite**: Frontend build system and dev server with path aliases for clean imports (@/, @shared, @assets)

**TypeScript**: Strict mode enabled with ESNext module resolution. Shared types between client/server via `shared/` directory.

**Drizzle**: ORM and migration toolkit with schema-first approach and Zod integration for runtime validation

### Styling & Fonts

**Tailwind CSS**: Utility-first styling with custom dark theme configuration and custom color palette using CSS variables

**Google Fonts**: Three font families:
- Inter (sans-serif, primary UI font)
- Playfair Display (serif, headings)
- JetBrains Mono (monospace, code/data)

### Data Management

**TanStack Query**: Asynchronous state management with centralized fetch wrapper and error handling

**React Hook Form**: Form state management with Zod resolver for schema validation

**Zod**: Runtime type validation and schema definition, shared between frontend validation and backend enforcement

## Recent Changes (October 2025)

Simplified the application from a complex multi-tenant casino platform to a basic promotional landing page with user registration:

- Removed subdomain-based routing and multi-tenancy features
- Removed master dashboard and agent registration portals
- Removed player registration management system (status updates, filtering, etc.)
- Removed real-time alert system for registrations
- Simplified database schema to single users table
- Simplified backend API to single registration endpoint
- Removed featured games section and VIP club promotional content
- Created clean, focused landing page with registration flow
