# Jade Royale Casino Platform

## Overview

Jade Royale is a multi-tenant casino platform featuring a subdomain-based architecture for agent management and player registration. The application supports three distinct access modes: a main landing page, agent-specific registration portals, and a master dashboard for administrative oversight. Built with React, Express, and PostgreSQL, it provides real-time registration tracking, alert systems, and comprehensive player management capabilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack**: React with TypeScript, Vite build system, Wouter for routing

The frontend uses a component-based architecture with shadcn/ui components built on Radix UI primitives. The application implements a subdomain-based routing system that determines which interface to display based on the hostname:

- Main domain (`jaderoyale` or empty subdomain): Displays marketing landing page with navigation to agent and master portals
- Agent subdomains (`genai`, `test`): Shows player registration forms specific to each agent
- Master subdomain (`webmasterx3`): Provides administrative dashboard for monitoring all registrations

**State Management**: TanStack Query (React Query) handles all server state with automatic caching, background refetching disabled in favor of explicit invalidation. Local component state managed with React hooks.

**Design System**: Tailwind CSS with custom dark theme color palette. CSS variables enable consistent theming across components. Custom animations for particles background, floating casino chips, and slide-in alerts.

**Form Handling**: React Hook Form with Zod validation ensures type-safe form submissions with client-side validation before API calls.

### Backend Architecture

**Technology Stack**: Express.js with TypeScript, ESM module format

The server implements a RESTful API structure with the following endpoints:

- `GET /api/registrations` - Retrieve all player registrations
- `GET /api/registrations/agent/:agentCode` - Filter registrations by agent
- `POST /api/registrations` - Create new player registration with duplicate username validation
- `PATCH /api/registrations/:id/status` - Update player status (pending/active/suspended)
- `DELETE /api/registrations/:id` - Remove registration
- `GET /api/alerts` - Fetch unread registration alerts
- `PATCH /api/alerts/:id/read` - Mark alert as read
- `DELETE /api/alerts/:id` - Remove alert
- `GET /api/stats` - Retrieve dashboard statistics

**Request Logging**: Custom middleware captures request duration and response data for API endpoints, with automatic truncation for long responses.

**Development Mode**: Vite integration in middleware mode provides HMR during development. Production builds serve static assets from `dist/public`.

### Data Storage

**Database**: PostgreSQL accessed via Neon serverless driver for connection pooling and serverless compatibility

**Schema Design**: Three main tables defined using Drizzle ORM:

1. **users** - Base user table (currently unused, available for future authentication)
   - id (UUID primary key)
   - username (unique)
   - email, fullName, phone, password

2. **playerRegistrations** - Player sign-up records
   - id (UUID primary key)
   - username, email, fullName, phone, password
   - agentCode (identifies referring agent)
   - status (pending/active/suspended)
   - createdAt (timestamp)
   - metadata (JSONB for extensibility - IP, referrer, etc.)

3. **registrationAlerts** - Real-time notifications
   - id (UUID primary key)
   - playerId (foreign key to playerRegistrations)
   - message (alert content)
   - isRead (text field storing "true"/"false")
   - createdAt (timestamp)

**Data Access Layer**: Storage interface abstraction in `server/storage.ts` uses raw SQL queries via Neon driver rather than Drizzle query builder. This provides direct database access while maintaining type safety through TypeScript interfaces. All database column names use snake_case, mapped to camelCase in TypeScript objects.

**Migration Strategy**: Drizzle Kit configured for schema push with migrations stored in `./migrations` directory. Schema source file: `shared/schema.ts`.

### Authentication & Authorization

**Current State**: No authentication implemented. The system relies on subdomain-based access control, with agent codes embedded in registration forms.

**Future Considerations**: Password fields exist in schema but are currently stored as plain text. Production deployment would require:
- Password hashing (bcrypt/argon2)
- Session management (connect-pg-simple for PostgreSQL-backed sessions)
- Authentication middleware
- Protected routes for master dashboard

### Multi-Tenancy Model

**Subdomain Routing**: Client-side logic (`lib/subdomain.ts`) parses hostname to determine tenant context:

- Predefined agent subdomains maintain a whitelist approach
- Master subdomain restricted to single known value
- New agents require code deployment to add subdomain support

**Agent Isolation**: Each agent operates independently through their subdomain, but shares the same database. Agent code automatically populated in registration forms based on subdomain, creating logical data separation.

**Scalability Consideration**: Current subdomain whitelist approach limits dynamic agent onboarding. Future enhancement could include database-driven agent configuration.

## External Dependencies

### Third-Party Services

**Database Hosting**: Neon (serverless PostgreSQL)
- Connection string via `DATABASE_URL` or `POSTGRES_URL` environment variables
- Serverless driver enables HTTP-based database access

**UI Components**: Radix UI primitives provide accessible, unstyled components:
- Dialogs, dropdowns, popovers for overlays
- Form controls (checkbox, radio, select, switch)
- Navigation components (accordion, tabs, menubar)
- All styled via Tailwind CSS with shadcn/ui conventions

### Build & Development Tools

**Vite**: Frontend build system and dev server
- Plugin ecosystem includes Replit-specific integrations (error overlay, cartographer, dev banner)
- Path aliases for clean imports (@/, @shared, @assets)

**TypeScript**: Strict mode enabled with ESNext module resolution
- Shared types between client/server via `shared/` directory
- Path mapping configured for monorepo structure

**Drizzle**: ORM and migration toolkit
- Schema-first approach with Zod integration for runtime validation
- Type generation from database schema

### Styling & Fonts

**Tailwind CSS**: Utility-first styling with custom configuration
- Dark theme as default
- Custom color palette using CSS variables
- Responsive breakpoints for mobile optimization

**Google Fonts**: Three font families loaded on-demand:
- Inter (sans-serif, primary UI font)
- Playfair Display (serif, headings)
- JetBrains Mono (monospace, code/data)

### Data Management

**TanStack Query**: Asynchronous state management
- Centralized fetch wrapper with error handling
- Optimistic updates and cache invalidation
- Configurable refetch behavior (disabled by default)

**React Hook Form**: Form state management
- Zod resolver for schema validation
- Uncontrolled inputs for performance

**Zod**: Runtime type validation and schema definition
- Shared between frontend validation and backend enforcement
- Integration with Drizzle for database schema generation

### Date Handling

**date-fns**: Date formatting and manipulation
- Used for relative timestamps ("2 hours ago")
- Lightweight alternative to moment.js