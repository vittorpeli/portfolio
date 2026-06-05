---
version: alpha
name: "Developer Portfolio — Geist Mono-Minimal"
description: "Primary visual anchor uses #e4e4e7 with tech-stack badge borders, card outlines, dividers — dominant structural color (182 hits). Typography baseline relies on GeistSans for hero name heading — largest text on page, tight negative tracking."
colors:
  zinc-border: "#e4e4e7"
  background: "#ffffff"
  near-black-cta: "#18181b"
  surface-subtle: "#fafafa"
  cta-text: "#fafafa"
  foreground-text: "#000000"
  muted-text: "#424242"
typography:
  display-name:
    fontFamily: "GeistSans"
    fontSize: "24px"
    fontWeight: "600"
    lineHeight: "32px"
    letterSpacing: "-1.2px"
  section-heading:
    fontFamily: "GeistSans"
    fontSize: "18px"
    fontWeight: "500"
    lineHeight: "28px"
  body-default:
    fontFamily: "GeistSans"
    fontSize: "16px"
    fontWeight: "400"
    lineHeight: "24px"
  label-medium:
    fontFamily: "GeistSans"
    fontSize: "14px"
    fontWeight: "500"
    lineHeight: "20px"
  label-regular:
    fontFamily: "GeistSans"
    fontSize: "14px"
    fontWeight: "400"
    lineHeight: "20px"
  sub-heading:
    fontFamily: "GeistSans"
    fontSize: "14px"
    fontWeight: "500"
    lineHeight: "20px"
  body-medium:
    fontFamily: "GeistSans"
    fontSize: "16px"
    fontWeight: "500"
    lineHeight: "24px"
rounded:
  sm: "6px"
  md: "8px"
  base-var: "0.5rem"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "20px"
  xl: "24px"
  2xl: "32px"
  3xl: "48px"
  section-max: "304px"
components:
  cta-button-primary-filled:
    backgroundColor: "{colors.near-black-cta}"
    textColor: "{colors.cta-text}"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
    fontSize: "14px"
    fontWeight: "500"
    boxShadow: "rgba(0,0,0,0.1) 0px 1px 3px 0px, rgba(0,0,0,0.1) 0px 1px 2px -1px"
    display: "inline-flex"
  hero-identity-block:
    display: "grid"
    padding: "48px 0px"
    backgroundColor: "transparent"
    textColor: "{colors.foreground-text}"
  icon-link:
    textColor: "{colors.foreground-text}"
    backgroundColor: "transparent"
    fontSize: "16px"
  project-card:
    rounded: "{rounded.md}"
    backgroundColor: "transparent"
    borderColor: "{colors.zinc-border}"
    overflow: "hidden"
  section-label:
    fontSize: "14px"
    fontWeight: "500"
    textColor: "{colors.foreground-text}"
    lineHeight: "{spacing.lg}"
    padding: "0px"
  tech-stack-badge:
    borderColor: "{colors.zinc-border}"
    borderWidth: "1px"
    rounded: "{rounded.sm}"
    backgroundColor: "transparent"
    fontSize: "14px"
    fontWeight: "500"
    padding: "4px 8px"
---

## Overview

Primary visual anchor uses #e4e4e7 with tech-stack badge borders, card outlines, dividers — dominant structural color (182 hits). Typography baseline relies on GeistSans for hero name heading — largest text on page, tight negative tracking.

This system uses a 4px base grid with scale values 4, 8, 16, 20, 24, 32, 48.

**Signature traits:**
- Core token rhythm: Token evidence indicates consistent color, spacing, and radius rhythm across visible UI.

## Colors

The palette uses 7 validated color tokens across 1 theme profile. Semantic roles stay attached to observed usage so generation agents can choose accents without inventing new color meaning.

**Semantic naming:**
- **surface-background** maps to `background`: Role "background" is grounded by usage context "Page and card surface fill".
- **content-text** maps to `foreground-text`: Role "text" is grounded by usage context "Primary body and heading text, confirmed by probe (rgb(0,0,0)) and CSSOM count 149".
- **border-primary** maps to `zinc-border`: Role "primary" is grounded by usage context "Tech-stack badge borders, card outlines, dividers — dominant structural color (182 hits)".
- **action-background** maps to `near-black-cta`: Role "background" is grounded by usage context "Resume button background fill; only filled CTA on the page".

### Primary Brand
- **Zinc Border** (#e4e4e7): Tech-stack badge borders, card outlines, dividers — dominant structural color (182 hits). Role: primary. {authored: rgb(228, 228, 231), space: rgb}

### Text Scale
- **CTA Text** (#fafafa): Text on the near-black Resume button. Role: text. {authored: rgb(250, 250, 250), space: rgb}
- **Foreground Text** (#000000): Primary body and heading text, confirmed by probe (rgb(0,0,0)) and CSSOM count 149. Role: text. {authored: rgb(0, 0, 0), space: rgb}
- **Muted Text** (#424242): Secondary descriptive text, project descriptions, location label. Role: text. {authored: rgb(66, 66, 66), space: rgb}

### Surface & Shadows
- **Background** (#ffffff): Page and card surface fill. Role: background. {authored: rgb(255, 255, 255), space: rgb}
- **Near-Black CTA** (#18181b): Resume button background fill; only filled CTA on the page. Role: background. {authored: rgb(24, 24, 27), space: rgb}
- **Surface Subtle** (#fafafa): Subtle background tint for secondary surfaces. Role: background. {authored: rgb(250, 250, 250), space: rgb}

## Typography

Typography uses GeistSans across extracted hierarchy roles. Keep hierarchy mapped to these token rows before adding decorative type styles.

Uses GeistSans throughout for a uniform feel. Weight range spans semi-bold, medium, regular. Sizes range from 14px to 24px.

### Font Roles
- **Headline Font**: GeistSans
- **Body Font**: GeistSans

### Type Scale Evidence
| Role | Font | Size | Weight | Line Height | Letter Spacing | Stack / Features | Notes |
|------|------|------|--------|-------------|----------------|------------------|-------|
| Hero name heading — largest text on page, tight negative tracking | GeistSans | 24px | 600 | 32px | -1.2px | GeistSans, GeistSans Fallback, ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji | Extracted token |
| Section labels like 'Projects', 'Tech stack' | GeistSans | 18px | 500 | 28px | normal | GeistSans, GeistSans Fallback, ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji | Extracted token |
| Body copy, project descriptions, general prose (107 hits — most frequent) | GeistSans | 16px | 400 | 24px | normal | GeistSans, GeistSans Fallback, ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji | Extracted token |
| Badge labels, button text, tech-stack pill names (42 hits) | GeistSans | 14px | 500 | 20px | normal | GeistSans, GeistSans Fallback, ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji | Extracted token |
| Secondary labels, metadata text (23 hits) | GeistSans | 14px | 400 | 20px | normal | GeistSans, GeistSans Fallback, ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji | Extracted token |
| Section sub-labels, small headings (h2.text-sm probe-confirmed) | GeistSans | 14px | 500 | 20px | normal | GeistSans, GeistSans Fallback, ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji | Extracted token |
| Emphasized body text, project titles | GeistSans | 16px | 500 | 24px | normal | GeistSans, GeistSans Fallback, ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji | Extracted token |

## Layout

Responsive system uses 1 breakpoint tier(s): tablet.

### Responsive Strategy
- **tablet (>= 768px)**: Increase spacing and column structure for medium-width viewports.

### Spacing System
| Token | Value | Px | Notes |
|------|-------|----|-------|
| xs | 4px | 4 | Extracted spacing token |
| sm | 8px | 8 | Extracted spacing token |
| md | 16px | 16 | Extracted spacing token |
| lg | 20px | 20 | Extracted spacing token |
| xl | 24px | 24 | Extracted spacing token |
| 2xl | 32px | 32 | Extracted spacing token |
| 3xl | 48px | 48 | Extracted spacing token |
| section-max | 304px | 304 | Extracted spacing token |

## Elevation & Depth

Keep depth flat unless validated shadow or interaction evidence appears in the extraction payload. Do not invent shadows beyond this evidence boundary.

### Shadow Evidence
| Shadow Token | Layers | Details |
|--------------|--------|---------|
| button-sm | 4 | 0px 0px 0px 0px rgba(0, 0, 0, 0) |

### Interaction Signals
| Theme | Signal | Evidence |
|-------|--------|----------|
| Light | outline-color | rgb(0, 0, 0) ; rgb(66, 66, 66) ; rgb(250, 250, 250) |
| Light | outline-width | 3px |
| Light | outline-offset | 0px |
| Light | transform | matrix(1, 0, 0, 1, 0, 0) |

## Shapes

Shape language maps directly to rounded tokens. Keep component corners consistent with the role mapping below before introducing bespoke geometry.

### Radius Roles
| Token | Value | Px | Role Mapping |
|------|-------|----|--------------|
| sm | 6px | 6 | Subtle corner |
| md | 8px | 8 | Control corner |
| base-var | 0.5rem | 8 | Control corner |

### Geometry Evidence
| Radius Token | Shape | Units |
|--------------|-------|-------|
| sm | 6px | px |
| md | 8px | px |
| base-var | 0.5rem | rem |

## Components

Components should be recreated from token references first, then tuned with variant notes and probe-backed state guidance.
- **CTA Button**: Primary action button used for the Resume link. Near-black fill with off-white text, 6px radius, subtle two-layer shadow.
- **Tech Stack Badge**: Pill-shaped badge displaying a technology name with its icon. Zinc border, transparent background, 6px radius.
- **Project Card**: Card presenting a project with a thumbnail image, title, icon links, and description text. 8px radius on image container.
- **Icon Link**: Bare icon-only anchor used for social/external links (LinkedIn, GitHub, Email, external project links).
- **Section Label**: Small uppercase-style section heading (e.g. 'Tech stack', 'Projects') rendered as h2 with text-sm class.
- **Hero Identity Block**: Top-of-page identity section with name, title, and location stacked vertically.

### CTA Button

**Primary Filled**
- backgroundColor: #18181b
- textColor: #fafafa
- rounded: 6px
- padding: 8px 16px
- fontSize: 14px
- fontWeight: 500
- boxShadow: rgba(0,0,0,0.1) 0px 1px 3px 0px, rgba(0,0,0,0.1) 0px 1px 2px -1px
- display: inline-flex
- State guidance: Probe-confirmed: a.inline-flex in hero zone. Only filled CTA on page.

### Hero Identity Block

**Default**
- display: grid
- padding: 48px 0px
- backgroundColor: transparent
- textColor: #000000
- State guidance: Probe-confirmed: section.py-12 with padding 48px 0px. div.grid for layout.

### Icon Link

**Default**
- textColor: #000000
- backgroundColor: transparent
- fontSize: 16px
- State guidance: Visible in hero zone alongside Resume button. No border or background.

### Project Card

**Default**
- rounded: 8px
- backgroundColor: transparent
- borderColor: #e4e4e7
- overflow: hidden
- State guidance: Probe-confirmed: a.overflow-hidden with borderRadius 8px. Image thumbnails visible in screenshot.

### Section Label

**Default**
- fontSize: 14px
- fontWeight: 500
- textColor: #000000
- lineHeight: 20px
- padding: 0px
- State guidance: Probe-confirmed: h2.text-sm in heading zone.

### Tech Stack Badge

**Default**
- borderColor: #e4e4e7
- borderWidth: 1px
- rounded: 6px
- backgroundColor: transparent
- fontSize: 14px
- fontWeight: 500
- padding: 4px 8px
- State guidance: Dominant border color #e4e4e7 (182 hits). Badge grid visible in screenshot.

## Do's and Don'ts

Guardrails protect Core token rhythm without adding unsupported visual claims.

| Do | Don't |
|----|---------|
| Do maintain consistent spacing using the base grid | Don't make unsupported claims about absent visual features |
| Do maintain WCAG AA contrast ratios (4.5:1 for normal text) | Don't mix rounded and sharp corners in the same view |
| Do use the primary color only for the single most important action per screen |  |
| Do verify evidence before writing new design-system guidance |  |

## Responsive Evidence

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Tablet | >= 768px | (min-width: 768px) |

## Agent Prompt Guide

### Example Component Prompts
- Create CTA Button variant that preserves Primary action button used for the Resume link. Near-black fill with off-white text, 6px radius, subtle two-layer shadow..
- Create Hero Identity Block variant that preserves Top-of-page identity section with name, title, and location stacked vertically..
- Create Icon Link variant that preserves Bare icon-only anchor used for social/external links (LinkedIn, GitHub, Email, external project links)..

### Iteration Guide
1. Start with extracted palette and typography roles only.
2. Map spacing and radius directly from token tables before visual polish.
3. Apply component patterns one section at a time and compare against source intent.
4. Keep elevation claims tied to explicit evidence in output.
5. Iterate with smallest diffs and re-check section hierarchy after each change.
