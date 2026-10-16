# Pilotos Lifestyle Hub

An immersive, high-contrast web platform for **Pilotos Lifestyle Hub**, bridging daytime specialty coffee, late-night café cravings, and precision barbercraft across three strategic Batangas City locations.

---

## Project Overview

Pilotos Lifestyle Hub unifies three distinct concepts into a single brand experience:
1. **Pilotos Grounds (Main Branch)**: Flagship daytime café at JMK Building, Petron Gas Station, Gov. Antonio Carpio Road, Gulod Itaas, Batangas City (across Stonyhurst International School).
2. **Afterhours by Pilotos Grounds**: Late-night specialty branch at Petron Gas Station, Sampaga Bypass Road, Batangas City.
3. **Pilotos Barbershop 2.0**: Upgraded grooming lounge right beside Afterhours, featuring precision fades, Korean Down Perms, ear cleaning, post-haircut massages, and retail grooming pomades.

---

## Key Features

- **Multi-Page App Architecture**: Clean separation of views for Overview, Branches, 3D Café Menu, Barbershop 2.0, Pilotos Pass Loyalty, and CRM Strategy.
- **Interactive 3D Slideshow Café Menu**: Immersive card slideshow format featuring specialty coffee, artisan pastas, pastries, and power bowls one by one with next/previous navigation, tags, and instant cart ordering.
- **Barbershop Booking System**: Multi-step booking wizard enabling users to select branch, grooming service, master barber, date and time slot, and customer details, generating a confirmation pass.
- **Pilotos Pass Unified Loyalty Program**: Points tracker and reward redemptions usable across all three hub branches.
- **CRM Integration Strategy**: Comprehensive architectural plan covering Mailchimp, ActiveCampaign, and HubSpot CRM tiers, webhook mappings, and customer journey automation.
- **Accessibility Settings**: Built-in preferences modal supporting High Contrast Mode, Font Size Scaling, and Reduced Motion compliance (WCAG 2.1 AA).

---

## Tech Stack

- **Framework**: React 19 with Vite & TypeScript
- **Styling**: Tailwind CSS v4 with custom "Minimalistic Angst" theme tokens
- **Icons**: Lucide React
- **Typography**: Outfit & Inter (Google Fonts)

---

## Setup & Installation Instructions

### Prerequisites
Make sure you have **Node.js** (v18 or higher) installed on your system.

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000` (or the development port provided by your environment).

### 3. Build for Production
```bash
npm run build
```
