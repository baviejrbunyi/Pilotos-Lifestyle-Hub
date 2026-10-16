# Implementation Plan - Pilotos Lifestyle Hub & Agency Portfolio

An immersive, high-contrast "Minimalistic Angst" web prototype for Pilotos Lifestyle Hub (Cafe & Barbershop across 4 Batangas City Petron-adjacent branches), serving simultaneously as a fully functional MVP (barber booking, interactive cafe menu, unified loyalty) and a professional portfolio case study demonstrating expert Elementor & WordPress project management capabilities.

---

## User Journey & Core Features

### 1. Pilotos Lifestyle Hub (Customer-Facing Experience)
- **Hero Section**: Moody industrial aesthetic, typography in "Minimalistic Angst" style, quick CTA to "Book Barbershop" or "Explore Cafe Menu", and branch selector across 4 Batangas City locations.
- **Interactive Cafe Menu**: Categories (Specialty Coffee, Pastries, Power Bowls), search, item detail modal, dietary filters, and mock checkout / dine-in order.
- **Barber Booking System**: Step-by-step wizard (Branch -> Service -> Barber -> Date/Time -> Contact Details -> Instant Confirmation with QR pass).
- **Unified Loyalty Pass**: Digital punch card and point balance tracker usable across both Barbershop and Cafe lines in any of the 4 branches.
- **Branch Locator**: Interactive guide to all 4 Petron-adjacent hubs in Batangas City with hours, map links, and real-time status.

### 2. Agency Portfolio & Elementor Showcase Mode (For Hiring Managers)
- **Toggle Mode ("Portfolio Case Study View")**: Instantly shifts the lens from customer site to professional portfolio presentation.
- **Elementor Architecture Breakdown**: Container hierarchy, flexbox settings, global color tokens (`--angst-black`, `--angst-crema`, `--angst-border`), and custom CSS snippets.
- **Transferable Project Management & Agency Experience**: Highlights agency methodologies, stakeholder management, risk mitigation, and timeline execution.
- **CRM Integration Plan (HubSpot, Mailchimp, ActiveCampaign)**: Clear blueprint, pricing/complexity tiers, API webhook mapping, and automated customer journey triggers for booking and loyalty data sync.

### 3. Accessibility & Responsiveness
- High contrast mode, font size adjustment, reduced motion toggle, and fully responsive layouts for mobile, tablet, and desktop viewports.

---

## Technical Stack & File Structure
- React 19, TypeScript, Tailwind CSS v4 (`@import "tailwindcss";`), Lucide React icons, Motion.
- Single-page application with smooth tab navigation between **Hub & Cafe**, **Barber Booking**, **Loyalty Pass**, **Branch Map**, and **WordPress/Elementor Portfolio & CRM Strategy**.

---

## Verification Plan
1. Compile applet to verify zero TypeScript errors.
2. Test interactive barber booking flow and cafe menu cart operations.
3. Verify CRM integration plan details for HubSpot, Mailchimp, and ActiveCampaign.
4. Check responsive design across mobile and desktop widths.
