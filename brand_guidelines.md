# Brand Theme Guidelines

This document outlines the design system and brand theme for Samkhya.ai to ensure consistency across all pages.

## 1. Typography

We use a sophisticated combination of serif and sans-serif fonts to convey a "High-Status Editorial" and "Financial Intelligence" aesthetic.

### Font Families

| Role | Font Family | Variable | Usage |
| :--- | :--- | :--- | :--- |
| **Headings** | **Newsreader** | `var(--font-newsreader)` | Used for all major headlines, article titles, and editorial emphasis. Gives a classic, authoritative feel. |
| **Body (UI)** | **Inter** | `var(--font-inter)` | Used for UI elements, navigation, metadata, and short descriptions. Clean and modern. |
| **Body (Long Form)** | **Merriweather** | `var(--font-merriweather)` | Used for long-form article content for optimal readability. |

### Usage Examples
- **Page Titles:** `font-serif` (Newsreader), `tracking-tight`, `leading-[1.1]`
- **Metadata (Dates, Tags):** `font-mono` (or Inter with uppercase), `text-xs`, `tracking-wider`
- **Article Text:** `font-serif-body` (Merriweather), `leading-relaxed`

---

## 2. Color Palette

The color scheme is a high-contrast "Dark Mode Finance" theme, switching between a crisp white editorial look and a deep "Void Navy" dark mode.

### Core Colors

| Color Name | Light Mode Hex | Dark Mode Hex | Description |
| :--- | :--- | :--- | :--- |
| **Background** | `#FFFFFF` | `#050A14` | The primary canvas. Dark mode uses a specific deep navy/black ("Void Navy"). |
| **Surface/Card** | `#F5F5F5` | `rgba(255,255,255, 0.05)` | Hover states for cards and interactive elements. |
| **Primary Text** | `#0A0A0A` | `#FFFFFF` | Main headlines and body text. |
| **Secondary Text** | `#666666` | `#9CA3AF` (Gray-400) | Metadata, captions, and less important text. |
| **Border** | `#E5E5E5` | `#1F2937` (Gray-800) | Subtle dividers and borders. |

### Accent Colors (Visuals)
Used in the "Signal" visualization and data elements.
- **Chaos/Noise:** `#64748B` (Slate 500) / `#475569` (Slate 600)
- **Order/Signal:** `#000000` / `#FFFFFF`

---

## 3. UI Elements & Effects

### Buttons & Links
- **Links:** Underlined with `border-b`, hover transitions to lighter gray.
- **Buttons:** Minimalist, often just text with an arrow icon, or simple bordered buttons.

### Visual Effects
- **Glassmorphism:** Used in navigation and overlays.
  - `bg-white/80` / `dark:bg-[#050A14]/80`
  - `backdrop-blur-md`
- **Animations:** Subtle entry animations using Framer Motion (`fade-in-up`), smooth color transitions (`duration-300`).

## 4. Implementation Notes

To maintain consistency, use the following Tailwind utility patterns:

- **Backgrounds:** `bg-white dark:bg-[#050A14]`
- **Text:** `text-[#0A0A0A] dark:text-white` (Primary), `text-[#666666] dark:text-gray-400` (Secondary)
- **Borders:** `border-[#E5E5E5] dark:border-gray-800`

> [!TIP]
> For strict consistency, we recommend moving the hardcoded hex values (like `#050A14`) into `tailwind.config.ts` as named tokens (e.g., `colors: { 'void-navy': '#050A14' }`).
