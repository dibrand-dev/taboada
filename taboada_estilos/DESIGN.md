---
name: Visionary Editorial
colors:
  surface: '#f8f9ff'
  surface-dim: '#d2daea'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff3ff'
  surface-container: '#e6eeff'
  surface-container-high: '#e1e8f9'
  surface-container-highest: '#dbe3f3'
  on-surface: '#141c27'
  on-surface-variant: '#44474d'
  inverse-surface: '#29313d'
  inverse-on-surface: '#ebf1ff'
  outline: '#75777e'
  outline-variant: '#c5c6cd'
  surface-tint: '#505f78'
  primary: '#06162c'
  on-primary: '#ffffff'
  primary-container: '#1c2b42'
  on-primary-container: '#8392ae'
  inverse-primary: '#b8c7e5'
  secondary: '#296676'
  on-secondary: '#ffffff'
  secondary-container: '#b1ecff'
  on-secondary-container: '#306c7d'
  tertiary: '#13171a'
  on-tertiary: '#ffffff'
  tertiary-container: '#272b2e'
  on-tertiary-container: '#8e9296'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d5e3ff'
  primary-fixed-dim: '#b8c7e5'
  on-primary-fixed: '#0c1c32'
  on-primary-fixed-variant: '#394760'
  secondary-fixed: '#b1ecff'
  secondary-fixed-dim: '#95cfe2'
  on-secondary-fixed: '#001f27'
  on-secondary-fixed-variant: '#024e5e'
  tertiary-fixed: '#e0e3e7'
  tertiary-fixed-dim: '#c3c7cb'
  on-tertiary-fixed: '#181c1f'
  on-tertiary-fixed-variant: '#43474b'
  background: '#f8f9ff'
  on-background: '#141c27'
  surface-variant: '#dbe3f3'
typography:
  display-lg:
    fontFamily: Noto Serif
    fontSize: 64px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Noto Serif
    fontSize: 40px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: Noto Serif
    fontSize: 40px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Noto Serif
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.3'
  subtitle-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.5'
    letterSpacing: 0.02em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: '8'
  section-gap-desktop: 120px
  section-gap-mobile: 64px
  container-max: 1280px
  gutter: 32px
  margin-safe: 24px
---

## Brand & Style

The design system is built for a premium medical practice that bridges the gap between clinical excellence and high-end wellness. The brand personality is authoritative yet serene, targeting a discerning audience that values preventative care and sophisticated aesthetics. 

The style merges **Minimalism** with **Editorial** sensibilities. By utilizing expansive whitespace, refined typography, and avant-garde layout structures, the UI moves away from "hospital cold" toward "boutique sanctuary." The emotional response should be one of profound trust, clarity, and calm. Visual elements are treated like high-fashion editorials—intentional, balanced, and premium.

## Colors

The palette is anchored in Deep Blue and Petroleum Green to establish a sense of depth and medical authority without the sterility of standard bright blues. 

- **Primary (#1C2B42):** Used for primary navigation, headings, and high-emphasis backgrounds.
- **Secondary (#115565):** Used for supporting structural elements and deep-tone accents.
- **Tertiary (#EEF1F5):** A "Clinical Frost" tone used for soft background layering, subtle section containers, and low-contrast UI elements to maintain the airy, premium feel.
- **Neutral Gray (#939BAA):** Utilized for secondary body text and metadata to maintain a soft, low-fatigue reading experience.
- **Background (#FFFFFF):** A pure white canvas is essential to achieve the "airy" editorial feel.

## Typography

The typography system uses **Noto Serif** for primary headings to convey an editorial, literary authority. **Plus Jakarta Sans** handles subtitles and body copy to ensure modern readability and a friendly, open tone.

- **Headings:** Use generous line heights. Display styles should use slight negative letter spacing for a tighter, high-fashion look.
- **Subtitles:** Utilize geometric weight to contrast against the serif headers.
- **Body:** Prioritize legibility with ample line spacing (1.6x) to maintain the "airy" aesthetic.

## Layout & Spacing

The layout philosophy is based on a **Fixed Grid** with expansive margins. Generous whitespace is the primary tool for conveying luxury.

- **Desktop:** 12-column grid with 32px gutters. Section vertical spacing should be aggressive (120px+) to allow the content to "breathe."
- **Mobile:** 4-column grid with 16px gutters. Reduce vertical gaps to 64px but maintain safe horizontal margins of 24px.
- **Alignment:** Use asymmetrical layouts for image/text pairings to reinforce the avant-garde editorial look.

## Elevation & Depth

This design system avoids heavy drop shadows in favor of **Tonal Layers** and **Low-Contrast Outlines**.

- **Depth:** Surfaces are defined by subtle shifts in background color (using the Tertiary #EEF1F5 for containers) rather than shadows.
- **Glassmorphism:** Use subtle backdrop blurs (10px - 20px) on navigation bars and floating appointment widgets to maintain a sense of lightness and transparency.
- **Borders:** When necessary, use 1px solid lines in a lightened version of the Neutral Gray or the Tertiary color to define areas without adding visual weight.

## Shapes

The shape language is **Soft (Level 1)**. Elements utilize a 0.25rem (4px) base radius. This creates a "sharp-but-refined" look that feels more precise and professional than fully rounded or pill-shaped designs, which can appear too casual for a specialist medical practice.

- **Image Containers:** Use clean 4px rounded corners.
- **Dividers:** Incorporate custom SVG wave patterns—specifically soft, low-amplitude curves—to separate sections while mimicking the fluidity of light and vision.

## Components

- **Buttons:** 
  - *Primary:* Solid Deep Blue (#1C2B42) with white text.
  - *Secondary:* Ghost style with a 1px Primary color border or solid Tertiary (#EEF1F5) with Primary text.
- **Input Fields:** Minimalist design. Only a bottom border in Neutral Gray that thickens and changes to Secondary Petroleum Green (#115565) on focus. Labels use the `label-caps` typography style.
- **Cards:** No shadows. Use the Tertiary color (#EEF1F5) as a subtle background tint or a 1px border. Padding should be generous (min 32px).
- **Chips/Badges:** Small, geometric tags using Tertiary backgrounds with dark text for a sophisticated, understated effect.
- **Image Containers:** High-quality imagery should be masked with subtle organic shapes or framed with wide white borders like a gallery piece.