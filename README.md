# RUKIGA FM — EKICUNCU | Official Radio Station Platform

> **Tagline:** EKICUNCU

A modern, high-performance web broadcasting platform custom-built for **RUKIGA FM (EKICUNCU)** in Western Uganda. Designed to match international media house standards while preserving deep cultural connection to the Rukiga community.

---

## 📻 Key Features

1. **Station Branding & Identity**
   - Distinctive broadcasting logo with animated sound waves & EKICUNCU emblem.
   - Tagline: *“EKICUNCU”*
   - Color palette: `#0B0B0D` (Primary Dark), `#151519` (Secondary Charcoal), `#E5232E` (Brand Red), `#F5B82E` (Gold Accent).

2. **Full-Width Hero Experience**
   - Studio broadcasting atmosphere with high-contrast text overlay.
   - Live sound-wave graphic and animated ON AIR badge.
   - Quick action triggers: **LISTEN LIVE** and **EXPLORE OUR PROGRAMMES**.

3. **Live Radio Player**
   - Persistent dockable bottom audio player with HTML5 audio streaming.
   - Dynamic play/pause, volume slider, mute toggle, and live soundwave equalizer animation.
   - Live stream status detection and connection error states.
   - Shows *“Online streaming is being configured. Please check back soon.”* when stream URL is offline or unconfigured, plus an audio check preview.

4. **5 Official Weekday Programmes (Monday – Friday)**
   - **ORUUME PROGRAM** (06:00 AM – 10:00 AM) — Energetic morning radio atmosphere.
   - **AMANI GOMUKOZI** (10:00 AM – 02:00 PM) — Engaging conversations & grassroots community focus.
   - **SPORTS MAGAZINE** (02:00 PM – 04:00 PM) — Sports discussions, match updates, and local athletics.
   - **EVENING OVERDRIVE** (04:00 PM – 08:00 PM) — High-energy evening entertainment & music.
   - **KURIKAYO** (08:00 PM – 12:00 AM) — Nightly homecoming, soulful tunes & heartfelt stories.
   - Filterable Monday to Friday timetable on dedicated Programmes page.

5. **Meet Our Presenters**
   - Portrait cards with biographies, show affiliations, and social media handles.
   - Honest editable placeholders ready for official headshots and confirmed broadcaster names.

6. **Editorial News & Community Features**
   - Categorized reporting: Local Community, Rukiga Stories, Uganda News, Entertainment, Sports, Education, Business.
   - Dedicated news listing and individual article view (`/news/:slug`) with social share button.

7. **On-Demand Podcasts & Recordings**
   - Highlight clips, interviews, and sermon archives with in-browser audio playback.

8. **Community Listener Interaction**
   - **Floating WhatsApp button** connected directly to the station desk.
   - **Song Request Modal** with validation and queued storage.
   - **Interactive Weekly Listener Poll** with real-time percentage calculations and local persistence.
   - Direct studio hotline and email contact points.

9. **Commercial Advertising & Partnerships**
   - Dedicated `/advertising` page with spot ads, sponsored shows, outside broadcasts, and rate card inquiry form.

10. **Fully Responsive & Accessible**
    - Seamless on mobile phones, tablets, and wide monitors.
    - Zero horizontal overflow.
    - Keyboard-friendly navigation.

---

## 🛠️ Technology Stack

- **Framework:** React 18 with TypeScript
- **Tooling:** Vite 5
- **Styling:** Tailwind CSS 3.4
- **Routing:** React Router DOM 6
- **Icons:** Lucide React
- **Typography:** Plus Jakarta Sans & Inter

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js (v18 or higher)
- npm or pnpm / yarn

### 2. Installation
```bash
# Navigate to the project directory
cd rukiga-fm-ekicuncu

# Install dependencies
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 4. Build for Production
```bash
npm run build
```
The optimized static build will be placed into the `dist/` directory.

---

## ⚙️ Configuration & Connecting Live Audio

All station metadata, stream URLs, schedules, presenters, and contact numbers are managed in **one central file**:

📁 `src/config/stationConfig.ts`

### 1. Live Streaming Configuration & rukigafm.com
The website is pre-configured with the official live broadcast audio stream and portal:
```typescript
export const stationConfig: StationConfig = {
  stationName: 'RUKIGA FM',
  brandIdentity: 'EKICUNCU',
  // Official Live Audio Stream:
  streamUrl: 'https://stream1.rcast.net/65813',
  // Official Online Portal:
  onlineWebsiteUrl: 'https://rukigafm.com',
  ...
};
```
- Clicking **LISTEN LIVE** or **Play** immediately connects and broadcasts live high-definition audio in the modern player.
- Clicking **rukigafm.com** anywhere in the navigation bar, hero section, or player bar opens the official web portal in a new tab.

### 2. Updating Contact Numbers & WhatsApp
```typescript
contact: {
  phone: '0754789562 / 0770607189',
  studioLine1: '0754789562',
  studioLine2: '0770607189',
  whatsappNumber: '256754789562',
  whatsappFormatted: '+256 754 789 562 / +256 770 607 189',
  email: 'info@rukigafm.com',
  studioAddress: 'Muhanga Town Council, Rukiga District, along Mbarara–Kabale Road, Western Uganda',
  region: 'Muhanga Town Council, Rukiga District, Kigezi, Western Uganda',
}
```

### 3. Updating the Station Slogan or Programmes
Edit `stationConfig.slogan` or update the `officialProgrammes` array in `src/config/stationConfig.ts`.

---

## 🚢 Deployment to Vercel

The project is pre-configured for instant zero-configuration deployment to Vercel:

1. Push your repository to GitHub / GitLab.
2. In the [Vercel Dashboard](https://vercel.com), click **Add New Project**.
3. Select your repository.
4. Set Build Command to `npm run build` and Output Directory to `dist`.
5. Click **Deploy**.

For single-page-app client-side routing on Vercel, ensure `vercel.json` is present (provided in repository):
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

---

## 🏛️ Future Admin Extension Architecture

The repository is modularly structured to connect an administrator panel (e.g. Next.js backend, Supabase, or headless CMS like Strapi) to manage live schedules, song request submissions, poll results, and breaking news banners.

---

© RUKIGA FM — EKICUNCU. All rights reserved.
