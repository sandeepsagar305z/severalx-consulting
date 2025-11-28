# SeveralX Consulting - Project Submission Document

## 📋 Project Overview

**Project Name:** SeveralX Consulting Website  
**Version:** 0.1.0  
**Framework:** Next.js 15.5.3 with App Router  
**Current Branch:** feature/chatassistant-integration  
**Repository:** Severalx-consulting  

This is a modern, full-featured consulting company website built with Next.js 15, featuring:
- Multi-section landing page with hero, solutions, consulting verticals, insights, resources, about, and contact sections
- Integrated AI-powered chat assistant (LibreChat integration)
- User authentication system (JWT-based)
- Content management via Ghost CMS integration
- Email notification system with SMTP support
- Responsive design with dark theme and brand-consistent styling

---

## 🛠 Tech Stack

### Core Technologies
- **Framework:** Next.js 15.5.3 (with Turbopack)
- **Runtime:** React 19.1.0
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4, Framer Motion 12.23.12
- **UI Components:** Radix UI primitives
- **Form Handling:** React Hook Form 7.62.0 + Zod 4.1.8 validation

### Backend & Services
- **Authentication:** JWT (jsonwebtoken 9.0.2) + bcryptjs 3.0.2
- **Email:** Nodemailer 7.0.6
- **Content API:** Ghost Content API (@tryghost/content-api 1.12.0)
- **HTTP Client:** ofetch 1.4.1
- **Database:** In-memory store (ready for database integration)

### UI Libraries
- **Components:** Custom components built on Radix UI
- **Icons:** Lucide React 0.544.0
- **Carousel:** Embla Carousel 8.6.0
- **Charts:** Recharts 3.2.0
- **Video:** React YouTube 10.1.0
- **Utilities:** class-variance-authority, clsx, tailwind-merge

### Development Tools
- **Linting:** ESLint 9 with Next.js config
- **Build Tool:** Turbopack (Next.js 15)
- **CSS Processing:** PostCSS with Tailwind CSS 4
- **Animations:** tw-animate-css 1.3.8

---

## 🌟 Key Features

### 1. **Landing Page Sections**
- **Hero Section:** Animated hero with call-to-action buttons
- **Solutions Section:** Showcase of CRM, Knowledge Base, and Project Management solutions
- **Consulting Verticals:** Business verticals served (Transportation, Logistics, Manufacturing, etc.)
- **Insights Section:** Blog integration with Ghost CMS
- **Resources Section:** Video resources and learning materials
- **About Section:** Company information and team profiles
- **Contact Section:** Contact form with email integration

### 2. **AI Chat Assistant**
- Integrated chat bar with LibreChat backend
- Persistent chat sessions across page navigation
- Real-time messaging interface
- User authentication-aware chat experience

### 3. **Authentication System**
- JWT-based authentication
- Signup/Login/Logout functionality
- Session management with HTTP-only cookies
- Protected routes and API endpoints
- In-memory user store (ready for database integration)

### 4. **Content Management**
- Ghost CMS integration for blog posts and publications
- Dynamic content fetching
- Image optimization with Next.js Image component
- Remote image support (Unsplash, Ghost CDN)

### 5. **Email System**
- SMTP-based email sending
- Contact form submissions
- Mock email support for development
- Branded email templates

### 6. **Responsive Design**
- Mobile-first approach
- Dark theme with brand colors (#63b583 primary green)
- Animated transitions and micro-interactions
- Accessible UI components (Radix UI)

---

## 📁 Project Structure

```
Severalx-consulting/
├── public/                          # Static assets
│   ├── logo.png                     # Company logos
│   ├── severalinnovations-logo.png
│   ├── severalmillers-logo.png
│   ├── severalroutes-logo.png
│   ├── profile-jesse-miller.jpg     # Team member photos
│   └── solutions/                   # Solution screenshots
│       ├── crm-dashboard.png
│       ├── crm-companies.png
│       ├── crm-opportunities.png
│       └── crm-tasks.png
│
├── src/
│   ├── app/                         # Next.js App Router
│   │   ├── api/                     # API Routes
│   │   │   ├── auth/               # Authentication endpoints
│   │   │   │   ├── login/route.ts
│   │   │   │   ├── signup/route.ts
│   │   │   │   ├── logout/route.ts
│   │   │   │   ├── me/route.ts
│   │   │   │   └── utils.ts
│   │   │   ├── chat/
│   │   │   │   └── assistant/route.ts
│   │   │   ├── contact/route.ts     # Contact form handler
│   │   │   ├── publications/route.ts # Ghost CMS integration
│   │   │   └── placeholder/         # Dynamic placeholder images
│   │   ├── layout.tsx               # Root layout
│   │   ├── page.tsx                 # Homepage
│   │   └── globals.css              # Global styles
│   │
│   ├── components/                   # React components
│   │   ├── layout/
│   │   │   ├── Header.tsx           # Navigation header
│   │   │   └── Footer.tsx           # Footer component
│   │   ├── sections/                # Page sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── SolutionsSection.tsx
│   │   │   ├── ConsultingVerticalsSection.tsx
│   │   │   ├── InsightsSection.tsx
│   │   │   ├── ResourcesSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   └── ContactSection.tsx
│   │   ├── ui/                      # Reusable UI components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── input.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── avatar.tsx
│   │   │   ├── carousel.tsx
│   │   │   ├── sheet.tsx
│   │   │   ├── tabs.tsx
│   │   │   └── team-member.tsx
│   │   ├── AuthModal.tsx            # Authentication modal
│   │   ├── ChatBar.tsx              # Chat assistant interface
│   │   └── Publications.tsx         # Blog posts display
│   │
│   ├── context/
│   │   └── AuthModalContext.tsx     # Auth modal state management
│   │
│   └── lib/                         # Utility libraries
│       ├── auth.ts                  # JWT authentication utilities
│       ├── constants.ts             # Brand colors and styles
│       ├── database.ts              # In-memory data store
│       ├── email-templates.ts       # Email HTML templates
│       ├── ghost-client.ts          # Ghost CMS client
│       ├── ghost.ts                 # Ghost API helpers
│       ├── librechatSession.ts      # LibreChat session management
│       ├── url.ts                   # URL utilities
│       └── utils.ts                 # General utilities
│
├── components.json                   # shadcn/ui configuration
├── next.config.ts                   # Next.js configuration
├── tailwind.config.js               # Tailwind CSS configuration
├── tsconfig.json                    # TypeScript configuration
├── package.json                     # Dependencies and scripts
├── env-template.txt                 # Environment variables template
└── README.md                        # Project documentation
```

---

## 🔐 Environment Variables

### Required Configuration

Create a `.env.local` file in the root directory with the following variables:

```bash
# =============================================================================
# JWT CONFIGURATION
# =============================================================================
# Generate a secure random string (minimum 32 characters)
# Example: openssl rand -base64 32
JWT_SECRET=your-super-secret-jwt-key-change-in-production-make-it-long-and-random-32-chars-minimum

# =============================================================================
# APP CONFIGURATION
# =============================================================================
# Base URL for your application (used for redirects and absolute URLs)
# Development: http://localhost:3001
# Production: https://yourdomain.com
NEXT_PUBLIC_BASE_URL=http://localhost:3001

# LibreChat URL (public-facing chat interface URL)
# This is the URL where users will access the chat interface
# Example: https://chat.severalxconsulting.com
NEXT_PUBLIC_LIBRECHAT_URL=https://chat.yourdomain.com

# =============================================================================
# CHAT API CONFIGURATION
# =============================================================================
# Backend API endpoint for chat functionality
# This is the internal API endpoint that the Next.js server calls
# Development: http://localhost:3080/api/chat
# Production: http://librechat-server:3080/api/chat (or external URL)
LIBRECHAT_API_URL=http://localhost:3080/api/chat

# =============================================================================
# SMTP EMAIL CONFIGURATION
# =============================================================================
# SMTP server details for sending emails
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587

# Email credentials
# For Gmail: Use an App Password, not your regular password
# Generate at: https://myaccount.google.com/apppasswords
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# From email address (appears in email "From" field)
SMTP_FROM_EMAIL=noreply@severalxconsulting.com

# To email address (where contact form submissions are sent)
SMTP_TO_EMAIL=contact@severalxconsulting.com

# =============================================================================
# EMAIL DEVELOPMENT CONFIGURATION
# =============================================================================
# Set to "true" to use mock email (logs to console instead of sending)
# Set to "false" to use real SMTP email sending
# Useful for development/testing without SMTP credentials
USE_MOCK_EMAIL=false
```

### Environment Variable Details

| Variable | Required | Description | Example |
|----------|----------|-------------|---------|
| `JWT_SECRET` | ✅ Yes | Secret key for JWT token generation and verification. Must be at least 32 characters. | `your-super-secret-jwt-key...` |
| `NEXT_PUBLIC_BASE_URL` | ✅ Yes | Base URL of your application. Used for redirects and API calls. | `http://localhost:3001` |
| `NEXT_PUBLIC_LIBRECHAT_URL` | ✅ Yes | Public URL where LibreChat is hosted. Shown to users. | `https://chat.yourdomain.com` |
| `LIBRECHAT_API_URL` | ✅ Yes | Internal API endpoint for LibreChat backend communication. | `http://localhost:3080/api/chat` |
| `SMTP_HOST` | ⚠️ Conditional* | SMTP server hostname for email sending. | `smtp.gmail.com` |
| `SMTP_PORT` | ⚠️ Conditional* | SMTP server port (usually 587 for TLS or 465 for SSL). | `587` |
| `SMTP_USER` | ⚠️ Conditional* | SMTP authentication username (usually your email). | `your-email@gmail.com` |
| `SMTP_PASS` | ⚠️ Conditional* | SMTP authentication password or app-specific password. | `your-app-password` |
| `SMTP_FROM_EMAIL` | ⚠️ Conditional* | Email address shown in the "From" field. | `noreply@severalxconsulting.com` |
| `SMTP_TO_EMAIL` | ⚠️ Conditional* | Email address where contact form submissions are sent. | `contact@severalxconsulting.com` |
| `USE_MOCK_EMAIL` | ❌ No | Set to `true` to disable real email sending (logs to console). | `false` |

*\*Conditional: Required if `USE_MOCK_EMAIL=false` (production email sending)*

### Security Notes

1. **Never commit `.env.local`** - It contains sensitive credentials
2. **JWT_SECRET** - Use a cryptographically secure random string
3. **SMTP credentials** - Use app-specific passwords, not your main password
4. **Production URLs** - Use HTTPS URLs in production
5. **Environment isolation** - Use different secrets for dev/staging/production

### Generating Secure Secrets

```bash
# Generate a secure JWT secret (Linux/macOS)
openssl rand -base64 32

# Or use Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

---

## 🚀 Setup Instructions

### Prerequisites

- **Node.js:** 20.x or higher
- **npm:** 10.x or higher (or yarn/pnpm/bun)
- **Git:** For version control
- **LibreChat Instance:** (Optional) For chat functionality

### Installation Steps

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd Severalx-consulting
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   ```bash
   # Copy the template file
   cp env-template.txt .env.local
   
   # Edit .env.local with your actual values
   nano .env.local  # or use your preferred editor
   ```

4. **Verify Configuration**
   ```bash
   # Check that all required environment variables are set
   cat .env.local
   ```

5. **Run Development Server**
   ```bash
   npm run dev
   ```
   
   The application will be available at `http://localhost:3001`

---

## 💻 Development

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack (default port: 3000) |
| `npm run build` | Build production bundle with Turbopack |
| `npm start` | Start production server (requires `npm run build` first) |
| `npm run lint` | Run ESLint to check code quality |

### Development Workflow

1. **Start the dev server:**
   ```bash
   npm run dev
   ```

2. **Make changes** to components in `src/components/` or pages in `src/app/`

3. **Hot reload** is enabled - changes will reflect immediately

4. **Run linter** before committing:
   ```bash
   npm run lint
   ```

5. **Test email functionality** (with mock email):
   ```bash
   # In .env.local
   USE_MOCK_EMAIL=true
   ```
   Check console logs for email content

### Port Configuration

- **Default development port:** 3000
- **Configured base URL:** 3001 (update `NEXT_PUBLIC_BASE_URL` if needed)
- **LibreChat default port:** 3080

To change the development port:
```bash
npm run dev -- -p 3001
```

Or update `package.json`:
```json
"scripts": {
  "dev": "next dev --turbopack -p 3001"
}
```

---

## 🏗 Build & Deployment

### Production Build

```bash
# Build the application
npm run build

# Start production server
npm start
```

### Build Output

The build process generates:
- Optimized JavaScript bundles
- Static assets in `public/`
- Server-side rendering components
- API routes

### Deployment Options

#### 1. **Vercel (Recommended)**

Vercel is the recommended platform for Next.js applications:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

**Environment Variables on Vercel:**
- Go to Project Settings → Environment Variables
- Add all variables from `.env.local`
- Separate configurations for Production, Preview, and Development

#### 2. **Docker**

Create a `Dockerfile`:

```dockerfile
FROM node:20-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Build application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

Build and run:
```bash
docker build -t severalx-consulting .
docker run -p 3000:3000 --env-file .env.local severalx-consulting
```

#### 3. **Traditional Node.js Server**

```bash
# Build
npm run build

# Start with PM2 (process manager)
npm i -g pm2
pm2 start npm --name "severalx-consulting" -- start

# Or with systemd
sudo systemctl enable severalx-consulting.service
sudo systemctl start severalx-consulting
```

#### 4. **Static Export (if applicable)**

If you want a static site without server-side features:

```bash
# Update next.config.ts
const nextConfig = {
  output: 'export',
  // ... other config
};

# Build
npm run build

# Deploy 'out' directory to any static host
```

**Note:** Static export doesn't support:
- API routes
- Server-side rendering
- Dynamic routes without `generateStaticParams`

### Pre-Deployment Checklist

- [ ] Update `NEXT_PUBLIC_BASE_URL` to production URL
- [ ] Set secure `JWT_SECRET` (different from development)
- [ ] Configure production SMTP credentials
- [ ] Set `USE_MOCK_EMAIL=false`
- [ ] Update `NEXT_PUBLIC_LIBRECHAT_URL` to production chat URL
- [ ] Test all authentication flows
- [ ] Test contact form submission
- [ ] Verify image loading (remote patterns in `next.config.ts`)
- [ ] Run `npm run lint` and fix any issues
- [ ] Test on multiple devices and browsers
- [ ] Set up SSL/TLS certificates (HTTPS)
- [ ] Configure CORS if API is on different domain
- [ ] Set up monitoring and error tracking
- [ ] Configure backup strategy for user data

---

## 🔌 API Routes

### Authentication Endpoints

#### `POST /api/auth/signup`
Create a new user account.

**Request:**
```json
{
  "email": "user@example.com",
  "password": "securePassword123",
  "name": "John Doe"
}
```

**Response (Success):**
```json
{
  "user": {
    "id": "1234567890",
    "email": "user@example.com",
    "name": "John Doe"
  }
}
```

**Sets HTTP-only cookie:** `auth-token`

---

#### `POST /api/auth/login`
Authenticate existing user.

**Request:**
```json
{
  "email": "user@example.com",
  "password": "securePassword123"
}
```

**Response (Success):**
```json
{
  "user": {
    "id": "1234567890",
    "email": "user@example.com",
    "name": "John Doe"
  }
}
```

**Sets HTTP-only cookie:** `auth-token`

---

#### `POST /api/auth/logout`
End user session.

**Response:**
```json
{
  "message": "Logged out successfully"
}
```

**Clears cookie:** `auth-token`

---

#### `GET /api/auth/me`
Get current user information.

**Headers:**
```
Cookie: auth-token=<jwt-token>
```

**Response (Authenticated):**
```json
{
  "user": {
    "id": "1234567890",
    "email": "user@example.com",
    "name": "John Doe"
  }
}
```

**Response (Unauthenticated):**
```json
{
  "user": null
}
```

---

### Contact Endpoint

#### `POST /api/contact`
Submit contact form.

**Request:**
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "company": "Acme Corp",
  "message": "I'm interested in your consulting services."
}
```

**Response (Success):**
```json
{
  "message": "Message sent successfully"
}
```

**Email Sent To:** Value of `SMTP_TO_EMAIL` environment variable

---

### Chat Assistant Endpoint

#### `POST /api/chat/assistant`
Proxy requests to LibreChat backend.

**Headers:**
```
Content-Type: application/json
Cookie: auth-token=<jwt-token> (optional)
```

**Request:** (Forwarded to LibreChat)
```json
{
  "message": "Hello, I need help with my project",
  "conversationId": "conv-123",
  ...
}
```

**Response:** (Proxied from LibreChat)
```json
{
  "response": "Hello! I'd be happy to help...",
  ...
}
```

---

### Publications Endpoint

#### `GET /api/publications`
Fetch blog posts from Ghost CMS.

**Query Parameters:**
- `limit` (optional): Number of posts to return (default: 10)
- `page` (optional): Page number for pagination (default: 1)

**Request:**
```
GET /api/publications?limit=5&page=1
```

**Response:**
```json
{
  "posts": [
    {
      "id": "post-id-123",
      "title": "Introduction to AI Consulting",
      "slug": "intro-to-ai-consulting",
      "excerpt": "Learn how AI can transform your business...",
      "feature_image": "https://example.com/image.jpg",
      "published_at": "2024-11-28T10:00:00.000Z",
      "authors": [
        {
          "name": "John Doe",
          "profile_image": "https://example.com/profile.jpg"
        }
      ]
    }
  ],
  "meta": {
    "pagination": {
      "page": 1,
      "limit": 5,
      "pages": 3,
      "total": 15
    }
  }
}
```

---

### Placeholder Image Endpoint

#### `GET /api/placeholder/[width]/[height]`
Generate placeholder images dynamically.

**Request:**
```
GET /api/placeholder/800/600
```

**Response:** PNG image (800x600 pixels)

---

## 🧩 Key Components

### Layout Components

#### `Header.tsx`
- Navigation menu with sections
- User authentication state
- Mobile responsive menu
- Brand logo and styling

#### `Footer.tsx`
- Company information
- Social links
- Copyright notice

### Section Components

#### `HeroSection.tsx`
- Animated hero banner
- Call-to-action buttons
- Brand messaging

#### `SolutionsSection.tsx`
- Showcase of software solutions
- CRM, Knowledge Base, Project Management
- Interactive cards with images

#### `ConsultingVerticalsSection.tsx`
- Business verticals served
- Icon-based presentation
- Transportation, Logistics, Manufacturing, etc.

#### `InsightsSection.tsx`
- Integration with Ghost CMS
- Blog post cards
- Dynamic content loading

#### `ResourcesSection.tsx`
- Video resources (YouTube integration)
- Learning materials
- Educational content

#### `AboutSection.tsx`
- Company background
- Team member profiles
- Mission and values

#### `ContactSection.tsx`
- Contact form with validation
- Email integration
- Company contact information

### UI Components

All UI components are built on Radix UI primitives with custom styling:

- `Button`: Primary and secondary variants
- `Card`: Content containers with glass morphism effect
- `Dialog`: Modal dialogs for authentication
- `Input/Textarea`: Form inputs with validation
- `Avatar`: User profile images
- `Carousel`: Image and content carousels
- `Sheet`: Slide-out panels (mobile menu)
- `Tabs`: Tabbed content sections

### Utility Components

#### `AuthModal.tsx`
- Login/Signup forms
- Form validation with Zod
- JWT token management
- Error handling

#### `ChatBar.tsx`
- Chat interface overlay
- Message history
- Real-time messaging
- LibreChat integration

#### `Publications.tsx`
- Ghost CMS blog display
- Post cards
- Pagination
- Image optimization

---

## ⚙️ Configuration Files

### `next.config.ts`

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'static.ghost.org',
        port: '',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
```

**Key Settings:**
- Remote image patterns for Unsplash and Ghost CDN
- Turbopack enabled for faster builds

### `tsconfig.json`

TypeScript configuration with strict type checking and path aliases:
- `@/*` alias points to `src/*`
- Strict mode enabled
- ES2023 target

### `components.json`

shadcn/ui configuration:
- Component aliases
- Tailwind CSS integration
- Style preferences

---

## 🎨 Design System

### Brand Colors

Primary brand color: **#63b583** (Green)

```typescript
const BRAND_COLORS = {
  primary: '#63b583',
  primaryLight: '#4a9666',
  primaryDark: '#5aa676',
  secondary: '#61b280',
};
```

### Theme

- **Base:** Dark theme with gray gradients
- **Accents:** Subtle green overlays
- **Effects:** Glass morphism, backdrop blur
- **Typography:** Modern, clean fonts via next/font

### Gradients

Consistent gradient patterns across all sections:
- Hero: Gray-focused with slate accents
- Sections: Dark gray with subtle green radials
- Cards: White overlays with transparency

---

## 📝 Important Notes

### Current Limitations

1. **Database:** Currently using in-memory storage
   - User data is lost on server restart
   - Not suitable for production without database integration
   - Ready for PostgreSQL, MySQL, or MongoDB integration

2. **Authentication:** Basic JWT implementation
   - No password reset functionality
   - No email verification
   - No OAuth providers (Google, GitHub, etc.)

3. **Chat Integration:** Requires external LibreChat instance
   - LibreChat must be running separately
   - Session management is basic
   - No chat history persistence in this app

4. **Ghost CMS:** Optional integration
   - Can work without Ghost (Insights section will be empty)
   - Requires Ghost API credentials for blog functionality

### Production Recommendations

1. **Database Integration:**
   - Replace `src/lib/database.ts` with real database
   - Recommended: PostgreSQL with Prisma ORM
   - Add database migrations
   - Implement proper connection pooling

2. **Enhanced Authentication:**
   - Add password reset via email
   - Implement email verification
   - Add OAuth providers (NextAuth.js)
   - Add rate limiting on auth endpoints
   - Implement refresh tokens

3. **Security Enhancements:**
   - Add CSRF protection
   - Implement rate limiting (all API routes)
   - Add input sanitization
   - Set up Content Security Policy (CSP)
   - Enable HTTPS everywhere
   - Add security headers (helmet.js)

4. **Monitoring & Logging:**
   - Set up error tracking (Sentry)
   - Add application monitoring (New Relic, DataDog)
   - Implement structured logging
   - Set up analytics (Google Analytics, Plausible)

5. **Performance:**
   - Add Redis for caching
   - Implement CDN for static assets
   - Set up database query optimization
   - Add image optimization pipeline
   - Implement lazy loading for heavy components

6. **Email System:**
   - Use transactional email service (SendGrid, AWS SES)
   - Add email templates library
   - Implement email queue
   - Add unsubscribe functionality

7. **Testing:**
   - Add unit tests (Jest, React Testing Library)
   - Add integration tests
   - Add E2E tests (Playwright, Cypress)
   - Set up CI/CD pipeline

8. **Documentation:**
   - Add API documentation (Swagger/OpenAPI)
   - Create user documentation
   - Add inline code documentation
   - Create runbook for operations

---

## 🔧 Troubleshooting

### Common Issues

#### Port Already in Use
```bash
# Find process using port 3000
lsof -ti:3000

# Kill the process
kill -9 $(lsof -ti:3000)

# Or use a different port
npm run dev -- -p 3001
```

#### Environment Variables Not Loading
```bash
# Ensure .env.local exists
ls -la .env.local

# Restart development server
# Environment variables are loaded at startup
```

#### Email Not Sending
```bash
# Check if mock email is enabled
grep USE_MOCK_EMAIL .env.local

# Verify SMTP credentials
# For Gmail, ensure "App Password" is used, not regular password
```

#### Chat Not Working
```bash
# Verify LibreChat is running
curl http://localhost:3080/api/chat

# Check LIBRECHAT_API_URL in .env.local
grep LIBRECHAT_API_URL .env.local

# Check browser console for errors
```

#### Build Errors
```bash
# Clear Next.js cache
rm -rf .next

# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Rebuild
npm run build
```

#### Type Errors
```bash
# Check TypeScript version
npm list typescript

# Regenerate TypeScript definitions
npx next telemetry disable
rm -rf .next
npm run dev
```

---

## 📞 Support & Contact

### Project Maintainer
- **Company:** SeveralX Consulting
- **Email:** contact@severalxconsulting.com

### Useful Links
- **Next.js Documentation:** https://nextjs.org/docs
- **React Documentation:** https://react.dev
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Radix UI:** https://www.radix-ui.com
- **LibreChat:** https://www.librechat.ai

---

## 📄 License

This project is proprietary software owned by SeveralX Consulting.

---

## 🎯 Quick Start Checklist

- [ ] Clone repository
- [ ] Install dependencies (`npm install`)
- [ ] Copy `env-template.txt` to `.env.local`
- [ ] Update all environment variables in `.env.local`
- [ ] Generate secure JWT_SECRET
- [ ] Configure SMTP credentials (or set USE_MOCK_EMAIL=true)
- [ ] Start development server (`npm run dev`)
- [ ] Test authentication flow
- [ ] Test contact form
- [ ] Test chat integration (if LibreChat available)
- [ ] Review all sections of the website
- [ ] Run linter (`npm run lint`)
- [ ] Build for production (`npm run build`)
- [ ] Test production build (`npm start`)

---

## 📊 Project Statistics

- **Total Components:** 20+ React components
- **API Routes:** 7 endpoints
- **Sections:** 7 landing page sections
- **Dependencies:** 40+ packages
- **TypeScript:** 100% type-safe codebase
- **Build Tool:** Turbopack (Next.js 15)

---

## 🚧 Future Enhancements

### Planned Features
- [ ] Database integration (PostgreSQL + Prisma)
- [ ] OAuth authentication (Google, GitHub)
- [ ] Password reset functionality
- [ ] Email verification
- [ ] User profile management
- [ ] Admin dashboard
- [ ] Analytics dashboard
- [ ] A/B testing framework
- [ ] Multi-language support (i18n)
- [ ] Dark/Light mode toggle
- [ ] Advanced search functionality
- [ ] Newsletter subscription
- [ ] Blog commenting system
- [ ] Social media sharing
- [ ] SEO optimization
- [ ] Progressive Web App (PWA)

### Technical Improvements
- [ ] Add unit tests (Jest + React Testing Library)
- [ ] Add E2E tests (Playwright)
- [ ] Set up CI/CD pipeline
- [ ] Add Storybook for component documentation
- [ ] Implement caching strategy (Redis)
- [ ] Add rate limiting middleware
- [ ] Implement WebSocket for real-time features
- [ ] Add error boundary components
- [ ] Set up Sentry for error tracking
- [ ] Add performance monitoring
- [ ] Implement lazy loading
- [ ] Add service worker for offline support

---

**Document Version:** 1.0  
**Last Updated:** November 28, 2024  
**Branch:** feature/chatassistant-integration  
**Status:** Development

---

*This document contains all necessary information for project submission, deployment, and maintenance. For questions or issues, please contact the development team.*

