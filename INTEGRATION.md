# INTEGRATION.md — Cross-Project Contract

> **Purpose**: This file exists in both repos (rg-studio and rgas-public-site) and defines how all Rainier Gardens projects communicate. Any AI assistant (Claude Code, Claude.ai, etc.) should read this file to understand the multi-project architecture.

> **Last updated**: March 2026

---

## Who Owns What

| Owner | Project | Repo | Tech Stack | Live URL |
|---|---|---|---|---|
| Spencer | RGAS Studio App | `RGArtStudios/rg-studio` | Laravel 12, PHP 8.3, PostgreSQL, Blade, Tailwind v3, Alpine.js | https://app.rgartstudios.com |
| Spencer | RGAS Public Site | `RGArtStudios/rgas-public-site` | Next.js 16, Tailwind v4 | https://rgartstudios.com |
| Roger | RGsaasops (RG Command) | `RGArtStudios/rgsaasops` (or similar) | TypeScript, Express, Prisma, PostgreSQL | TBD (currently Fly.io) |

---

## Architecture Overview

```
┌─────────────────────────────────────┐
│     rgartstudios.com (Vercel)       │  ← Public marketing site (Next.js)
│     Forms POST to Laravel API       │
└──────────────┬──────────────────────┘
               │ HTTP POST (JSON)
               ▼
┌─────────────────────────────────────┐
│  app.rgartstudios.com (AWS EC2)     │  ← Studio management app (Laravel)
│  7 public API endpoints             │
│  Full admin/member portal           │
│  PWA mobile app at /app             │
└──────────────┬──────────────────────┘
               │ API calls (planned)
               ▼
┌─────────────────────────────────────┐
│  RGsaasops / RG Command            │  ← CRM, sales pipeline, billing hub
│  5-endpoint integration contract    │
│  (TypeScript/Express)               │
└─────────────────────────────────────┘
```

The three projects are **completely independent deployments**. They share no code, no database, no authentication, and no deployment pipeline. All communication happens via HTTP API calls using JSON.

---

## Connection 1: Next.js Public Site → Laravel API

**Direction**: Next.js site POSTs form submissions to the Laravel backend.

**Base URL**: Set via `NEXT_PUBLIC_LARAVEL_API_URL` environment variable in Vercel.
- Production: `https://app.rgartstudios.com`
- Local dev: `http://localhost:8000`

**Authentication**: None — these are public, unauthenticated endpoints.

**CORS**: Laravel allows requests from `FRONTEND_URL` env var. Set to `https://rgartstudios.com` in production.

### Endpoints

| Method | Path | Purpose | Request Body |
|---|---|---|---|
| GET | `/api/public/classes` | List active classes for the public site | — |
| GET | `/api/public/events` | List upcoming events for the public site | — |
| POST | `/api/public/contact` | Contact form submission | `{ first_name, last_name, email, phone?, subject, message }` |
| POST | `/api/public/tour-request` | Schedule a studio tour | `{ name, email, phone?, preferred_date?, preferred_time?, message? }` |
| POST | `/api/public/membership-inquiry` | Membership interest form | `{ name, email, phone?, interested_tier?, how_heard?, message? }` |
| POST | `/api/public/consignment-application` | Artist consignment application | `{ name, email, phone, medium, portfolio_url?, statement, ...}` |
| POST | `/api/public/job-application` | Job application | `{ name, email, phone, position, message, resume_url?, ...}` |

### Response Format

**Success (200/201)**:
```json
{
  "message": "Thank you! Your submission has been received.",
  "data": { ... }
}
```

**Validation Error (422)**:
```json
{
  "message": "The given data was invalid.",
  "errors": {
    "email": ["The email field is required."],
    "message": ["The message field is required."]
  }
}
```

**Server Error (500)**:
```json
{
  "message": "Server Error"
}
```

---

## Connection 2: RGAS ↔ RGsaasops (Planned — Not Yet Built)

**Purpose**: When RGAS gains a subscriber, it notifies RGsaasops so the CRM has a complete picture of all customers across all vertical apps. When RGsaasops updates a customer record, RGAS reflects the change.

**Status**: NOT YET IMPLEMENTED. This section defines the planned contract.

### 5-Endpoint Integration Contract

**Direction**: Bidirectional. Each system calls the other.

**Authentication**: API key in `Authorization: Bearer <key>` header. Keys stored in environment variables on both sides.

#### RGAS → RGsaasops (outbound from Laravel)

| Method | Path | When It Fires | Payload |
|---|---|---|---|
| POST | `/api/integrations/rgas/subscriber` | New studio subscribes to RGAS | `{ studio_name, slug, owner_name, owner_email, plan, billing_start }` |
| POST | `/api/integrations/rgas/event` | Significant event occurs | `{ studio_slug, event_type, data, timestamp }` |

Event types: `subscription_created`, `subscription_cancelled`, `subscription_upgraded`, `subscription_downgraded`, `trial_started`, `trial_expired`

#### RGsaasops → RGAS (inbound to Laravel)

| Method | Path | When It Fires | Payload |
|---|---|---|---|
| POST | `/api/integrations/command/studio-update` | CRM updates customer record | `{ studio_slug, updates: { ... } }` |
| POST | `/api/integrations/command/feature-override` | Sales team enables/disables a feature | `{ studio_slug, feature_key, enabled }` |
| GET | `/api/integrations/command/studio-health` | Daily health check / dashboard data | Query: `?slug=rgas` |

### Implementation Notes

- Estimated development effort: 2–3 weeks (Spencer's side)
- No shared database — data flows via API calls only
- No shared auth — each system has its own user/session model
- API keys are the only shared credential
- Retry logic: exponential backoff, 3 retries, dead letter queue for failures
- All payloads are JSON with UTF-8 encoding

---

## DNS and Domain Ownership

| Domain | Points To | Owner | Purpose |
|---|---|---|---|
| `rgartstudios.com` | Vercel | Spencer | Public marketing site |
| `www.rgartstudios.com` | Vercel | Spencer | Redirects to root |
| `app.rgartstudios.com` | EC2 16.148.81.21 | Spencer | Laravel studio app |
| DNS managed in | Squarespace | Shared | — |

**⚠️ KNOWN ISSUE**: There is a duplicate A record for `app` subdomain pointing to `66.241.124.106` (Roger's server). This causes traffic to randomly split between Spencer's and Roger's servers. One record must be removed or Roger's app must move to a different subdomain (e.g., `command.rgartstudios.com` or `api.rgartstudios.com`).

---

## Conventions Both Projects Must Follow

### Data Format
- All API payloads: JSON with `Content-Type: application/json`
- Date format: ISO 8601 (`2026-03-18T14:30:00Z`)
- Field naming: `snake_case` for Laravel endpoints, `camelCase` acceptable for TypeScript endpoints
- When systems communicate cross-stack, the **receiver** handles case conversion

### Error Handling
- 2xx: Success
- 4xx: Client error (validation, auth, not found)
- 5xx: Server error (unexpected failure)
- All errors return JSON with a `message` field at minimum

### Authentication for Cross-System Calls
- API key passed in `Authorization: Bearer <key>` header
- Keys stored in environment variables, never in code
- Each direction has its own key (RGAS→Command key ≠ Command→RGAS key)

### Branding
- Primary accent: Terracotta `#b07050`
- Dark mode background: `#1a1a2e`
- Light mode background: `#faf5f0` (warm cream)
- Logo: RGAS amphora — black for light mode, white for dark mode
- Font: System sans-serif for the app, Playfair Display for marketing headings

---

## Environment Variables Each Project Needs

### RGAS (Laravel — rg-studio)
```
# For receiving cross-system API calls (planned)
RGSAASOPS_API_KEY=          # Key to validate inbound calls from RGsaasops
RGSAASOPS_BASE_URL=         # URL of RGsaasops for outbound calls

# For the public site connection (active)
FRONTEND_URL=https://rgartstudios.com
```

### RGAS Public Site (Next.js — rgas-public-site)
```
# For calling the Laravel API (active)
NEXT_PUBLIC_LARAVEL_API_URL=https://app.rgartstudios.com
```

### RGsaasops (TypeScript — Roger's project)
```
# For receiving cross-system API calls (planned)
RGAS_API_KEY=               # Key to validate inbound calls from RGAS
RGAS_BASE_URL=https://app.rgartstudios.com

# For the RGAS integration (planned)
RGAS_INTEGRATION_ENABLED=false  # Flip to true when endpoints are built
```

---

## How to Start an AI Session with Full Context

### Spencer (Laravel / RGAS)
```
cd X:\projects\rg-studio
claude
```
Claude Code reads CLAUDE.md and INTEGRATION.md automatically.

### Roger (TypeScript / RGsaasops)
```
cd /path/to/rgsaasops
claude
```
Place a copy of INTEGRATION.md in the RGsaasops repo root. Claude Code reads it automatically.

### In Claude.ai (web)
Start with: "I'm [Spencer/Roger] from Rainier Gardens LLC. I'm working on [RGAS/RGsaasops]. Here's our integration document:" and paste this file.

---

## Change Log

| Date | Change | Who |
|---|---|---|
| March 2026 | Initial integration document created | Spencer |
