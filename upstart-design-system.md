# Upstart Design System

> Derived from the Upstart borrower dashboard UI — loan detail and home screens.

---

## 1. Design Tokens

### 1.1 Color

#### Brand / Primary
| Token | Value | Usage |
|-------|-------|-------|
| `color-brand-primary` | `#00857C` | CTA buttons, links, progress bar fill, nav header bg |
| `color-brand-primary-hover` | `#006B63` | Hover state for primary buttons and links |
| `color-brand-primary-light` | `#E6F4F3` | Tinted backgrounds, subtle highlights |
| `color-brand-primary-dark` | `#004F4B` | Active/pressed state |

#### Neutral
| Token | Value | Usage |
|-------|-------|-------|
| `color-neutral-0` | `#FFFFFF` | Card backgrounds, page background |
| `color-neutral-50` | `#F7F8F8` | Page canvas background |
| `color-neutral-100` | `#F0F1F1` | Section dividers, subtle fills |
| `color-neutral-200` | `#E2E4E4` | Borders, input outlines |
| `color-neutral-400` | `#9BA0A0` | Placeholder text, disabled text |
| `color-neutral-600` | `#636A6A` | Body secondary text, labels |
| `color-neutral-800` | `#2B3232` | Primary body text |
| `color-neutral-900` | `#1A1F1F` | Headings |

#### Semantic
| Token | Value | Usage |
|-------|-------|-------|
| `color-success` | `#00857C` | Paid on time indicator, verified badge |
| `color-success-light` | `#E6F4F3` | Success background tint |
| `color-warning` | `#D97706` | Paid late indicator |
| `color-warning-light` | `#FEF3C7` | Warning background tint |
| `color-error` | `#DC2626` | Past due / reported late indicator |
| `color-error-light` | `#FEE2E2` | Error background tint |
| `color-info` | `#2563EB` | Informational links |

---

### 1.2 Typography

**Font Family:** `"Plus Jakarta Sans", "Inter", sans-serif`
*(Clean geometric humanist sans-serif consistent with fintech/Upstart brand)*

#### Scale
| Token | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| `text-display` | 28px | 700 | 36px | Page-level congratulations / hero text |
| `text-heading-lg` | 20px | 700 | 28px | Section headings ("Loan summary") |
| `text-heading-md` | 16px | 600 | 24px | Card titles, subsection headers |
| `text-heading-sm` | 14px | 600 | 20px | Table column headers, labels |
| `text-body-lg` | 16px | 400 | 24px | Primary body text |
| `text-body-md` | 14px | 400 | 20px | Secondary body, form labels |
| `text-body-sm` | 12px | 400 | 18px | Captions, footnotes, legal copy |
| `text-label` | 12px | 500 | 16px | Status badges, chips |
| `text-link` | 14px | 400 | 20px | Inline links (color: `color-brand-primary`) |
| `text-amount` | 24px | 700 | 32px | Dollar amounts, key financial figures |

---

### 1.3 Spacing

8px base grid.

| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | 4px | Icon gaps, tight inline spacing |
| `space-2` | 8px | Compact padding, list item gaps |
| `space-3` | 12px | Input internal padding |
| `space-4` | 16px | Card content padding, section gaps |
| `space-5` | 20px | Form field spacing |
| `space-6` | 24px | Card padding, section headers |
| `space-8` | 32px | Between major sections |
| `space-10` | 40px | Page-level section separation |
| `space-12` | 48px | Hero / header vertical padding |

---

### 1.4 Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `radius-sm` | 4px | Input fields, small chips |
| `radius-md` | 8px | Cards, panels, modals |
| `radius-lg` | 12px | Large cards, hero panels |
| `radius-full` | 9999px | Pills, badges, progress bar, avatar |

---

### 1.5 Shadows / Elevation

| Token | Value | Usage |
|-------|-------|-------|
| `shadow-none` | `none` | Flat cards with border |
| `shadow-sm` | `0 1px 3px rgba(0,0,0,0.08)` | Cards on white background |
| `shadow-md` | `0 4px 12px rgba(0,0,0,0.10)` | Modals, dropdowns |
| `shadow-lg` | `0 8px 24px rgba(0,0,0,0.12)` | Floating panels, popovers |

---

### 1.6 Motion

| Token | Value | Usage |
|-------|-------|-------|
| `duration-fast` | 100ms | Hover color transitions |
| `duration-base` | 200ms | State transitions, expand/collapse |
| `duration-slow` | 300ms | Page transitions, modals |
| `easing-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | All standard motion |

---

## 2. Components

---

### 2.1 Button

#### Variants
| Variant | Background | Text | Border | Usage |
|---------|-----------|------|--------|-------|
| `primary` | `color-brand-primary` | white | none | Main CTA — "Check your rate", "View loan" |
| `secondary` | white | `color-brand-primary` | `color-brand-primary` 1.5px | Secondary actions |
| `ghost` | transparent | `color-brand-primary` | none | Tertiary, low-emphasis actions |
| `destructive` | `color-error` | white | none | Irreversible actions |

#### Sizes
| Size | Height | Padding H | Font |
|------|--------|-----------|------|
| `sm` | 32px | 12px | `text-body-sm`, 500 weight |
| `md` | 40px | 16px | `text-body-md`, 600 weight |
| `lg` | 48px | 24px | `text-body-lg`, 600 weight |

#### States
| State | Change |
|-------|--------|
| Default | Base variant styles |
| Hover | Background darkens 10% (`color-brand-primary-hover`) |
| Active/Pressed | Background darkens 20% |
| Disabled | 40% opacity, `cursor: not-allowed` |
| Loading | Spinner replaces label, same dimensions |

#### Accessibility
- **Role:** `button`
- **Keyboard:** `Enter` / `Space` to activate
- **Focus ring:** 2px offset, `color-brand-primary` at 50% opacity
- **Disabled:** `aria-disabled="true"`, not `disabled` attr (preserves focus)

#### Do's / Don'ts
| ✅ Do | ❌ Don't |
|------|---------|
| Use primary for one main action per section | Stack two primary buttons side by side |
| Keep labels to 1–3 words | Use vague labels like "Click here" |
| Show loading state while async action runs | Remove button during loading |

---

### 2.2 Card

The primary container unit throughout the UI. Used for bank accounts, payment lists, loan summary, loan options.

#### Anatomy
- Background: `color-neutral-0`
- Border: 1px solid `color-neutral-200`
- Border radius: `radius-md` (8px)
- Padding: `space-6` (24px)
- Shadow: `shadow-sm`

#### Variants
| Variant | Description |
|---------|-------------|
| `default` | Standard white card with border |
| `highlighted` | Left border accent `color-brand-primary` 3px — used for featured loan options |
| `success-banner` | `color-brand-primary` header band + white body — used for payoff congratulations |
| `flat` | No shadow, no border — used inside other containers |

#### Sub-components
- **Card Header** — title (`text-heading-md`) + optional action (link or chevron)
- **Card Body** — main content area
- **Card Divider** — 1px `color-neutral-200` separator between sections
- **Card Footer** — secondary actions row

---

### 2.3 Badge / Status Chip

Used for bank account verification status and payment streak dots.

#### Variants
| Variant | Background | Text Color | Usage |
|---------|-----------|------------|-------|
| `success` | `color-success-light` | `color-success` | "Verified", paid on time |
| `warning` | `color-warning-light` | `color-warning` | Paid late |
| `error` | `color-error-light` | `color-error` | Past due, reported late |
| `neutral` | `color-neutral-100` | `color-neutral-600` | Default / inactive state |

#### Anatomy
- Height: 24px
- Padding: 0 `space-2`
- Border radius: `radius-full`
- Font: `text-label` (12px / 500)
- Optional leading icon: 12px, same color as text

---

### 2.4 Progress Bar

Used for payoff progress ("$6,600 of $6,600 paid toward principal").

#### Anatomy
- Track height: 8px
- Track background: `color-neutral-200`
- Track border radius: `radius-full`
- Fill color: `color-brand-primary`
- Fill border radius: `radius-full`

#### States
| State | Fill % | Notes |
|-------|--------|-------|
| Empty | 0% | Show track only |
| Partial | 1–99% | Fill with brand primary |
| Complete | 100% | Full fill, trigger celebration state |

#### Accessibility
- `role="progressbar"`
- `aria-valuenow`, `aria-valuemin="0"`, `aria-valuemax="100"`
- Accompanied by text label showing exact values

---

### 2.5 Data Row (Key-Value Pair)

Used extensively in the loan summary section.

#### Anatomy
```
[Label]          [Value]
Loan Amount      $6,600.00
```
- Label: `text-body-md` / `color-neutral-600`
- Value: `text-body-md` / `color-neutral-800` (or `text-amount` for primary figures)
- Layout: `display: flex; justify-content: space-between`
- Vertical spacing between rows: `space-3` (12px)
- Optional bottom border: 1px `color-neutral-200` for grouped sets

---

### 2.6 Payment List Item

Used in the payments history list.

#### Anatomy
- Left: Icon (circle, 32px, `color-neutral-100` bg) + date text (`text-body-md`)
- Right: Amount (`text-body-md`, 600 weight) + chevron icon
- Full-width separator: 1px `color-neutral-200`
- Height: 56px
- Hover: `color-neutral-50` background

#### States
| State | Change |
|-------|--------|
| Default | White background |
| Hover | `color-neutral-50` background |
| Active | `color-neutral-100` background |

---

### 2.7 Payment Streak Dot

Visual indicator in the payment streak grid.

#### Variants
| State | Color | Icon |
|-------|-------|------|
| Paid on time | `color-brand-primary` | ✓ checkmark |
| Paid late | `color-warning` | ✓ checkmark (orange) |
| Reported late | `color-error` | ✗ or ! |
| Past due | `color-error` | ✗ |
| Upcoming / empty | `color-neutral-200` | Circle outline |

#### Size: 20px diameter, `radius-full`

---

### 2.8 Navigation Header

#### Anatomy
- Height: 56px
- Background: `color-brand-primary` (on homepage) / white (on detail pages)
- Logo: Upstart wordmark, white (on teal) / brand color (on white)
- User name: `text-body-md` / 600 weight, right-aligned
- Status indicator: 8px dot, `color-error` for active session
- Breadcrumb: `text-body-sm` / `color-brand-primary` with `<` prefix ("My Account")

---

### 2.9 Loan Option Card

Used in the "Loan options" section on the home screen.

#### Anatomy
- Icon: 48px illustration in left column
- Title: `text-heading-sm`
- Subtitle: `text-body-sm` / `color-neutral-600`
- CTA button: primary, right-aligned, full height of row
- Separator: 1px `color-neutral-200` between items

#### Layout: horizontal flex row, vertically centered

---

### 2.10 Section Header with "See more" Link

#### Anatomy
- Title: `text-heading-md`
- Link: `text-link` / `color-brand-primary`, right-aligned
- Layout: `display: flex; justify-content: space-between; align-items: center`
- Bottom margin: `space-4`

---

### 2.11 Accordion / Collapsible Row

Used for "Bank accounts", "Pay by check", "Fees" sections.

#### Anatomy
- Header: full-width clickable row
- Title: `text-heading-sm` / `color-neutral-800`
- Chevron icon: 16px, rotates 180° when expanded (`transition: transform 200ms`)
- Content: slides down on expand, `overflow: hidden`

#### States
| State | Chevron | Content |
|-------|---------|---------|
| Collapsed | Pointing down ▾ | Hidden |
| Expanded | Pointing up ▴ | Visible |

---

### 2.12 Alert / Banner

Used for the payoff congratulations message.

#### Anatomy
- Background: `color-brand-primary-light`
- Border: none
- Border radius: `radius-md`
- Icon: 24px celebration/thumbs-up, `color-brand-primary`
- Text: `text-body-md` / `color-neutral-800`
- Padding: `space-4` vertical, `space-6` horizontal

#### Variants
| Variant | Color | Icon |
|---------|-------|------|
| `success` | `color-success-light` | ✓ |
| `warning` | `color-warning-light` | ⚠ |
| `error` | `color-error-light` | ✗ |
| `info` | `#EFF6FF` | ℹ |

---

### 2.13 Link

#### Anatomy
- Color: `color-brand-primary`
- Text decoration: none by default, underline on hover
- Cursor: pointer
- Font: inherits context (no independent sizing)

#### Variants
| Variant | Usage |
|---------|-------|
| `inline` | Within body text |
| `standalone` | Navigation links, "See more", "What is principal?" |
| `external` | Opens in new tab — includes trailing icon (↗ 12px) |

---

## 3. Patterns

### 3.1 Loan Summary Block
Two-column grid of Data Rows. Left column: Loan Amount, Outstanding Principal, Unpaid Accrued Interest. Right column: Loan Number, Interest Rate, Origination Date. Footer row of document links (Amortization Schedule, Promissory Note, TILA Notice).

### 3.2 Payment History List
Card with header ("Payments" + "See more" link) containing a vertical list of Payment List Items, max 3 visible by default. Pagination via "See more".

### 3.3 Bank Account Table
Card with accordion header. Table body: two columns (Bank Account Name / Status). Each row shows account name + masked number and a status Badge. "Add bank account" button (secondary, full-width) in footer.

### 3.4 Contact Support Row
Four items in a 2×2 grid: Chat (link), Email (link), Phone (link), Documents link. Each prefixed with a 16px icon. Used at the bottom of detail pages.

### 3.5 Loan Options List
Vertically stacked Loan Option Cards inside a white container. Each option is separated by a divider. Header reads "Loan options" with subtext "Checking your rate won't affect your credit score."

### 3.6 Explore Loans Grid
2×2 grid of navigation cards. Each card: icon, title (`text-heading-sm`), subtitle (`text-body-sm`). Arrow icon → right-aligned. Hover: subtle `color-neutral-50` background shift.

---

## 4. Layout

### 4.1 Page Grid
- Max content width: **760px** (single-column loan detail) / **1024px** (home/dashboard)
- Horizontal page padding: `space-6` (24px) on mobile, `space-10` (40px) on desktop
- Column gap (two-column layouts): `space-6`

### 4.2 Two-Column Detail Layout
Loan detail page uses a ~40/60 split:
- Left panel: Bank Accounts + Pay by Check
- Right panel: Payments + Fees + Payment Streak + Payoff Progress + Loan Summary + Contact

### 4.3 Responsive Breakpoints
| Name | Width | Behavior |
|------|-------|----------|
| Mobile | < 640px | Single column, full-width cards |
| Tablet | 640–1024px | Two columns where applicable |
| Desktop | > 1024px | Two columns, centered max-width container |

---

## 5. Iconography

- Style: **Outlined**, rounded stroke caps, 1.5px stroke weight
- Sizes: 16px (inline), 20px (list items), 24px (cards / navigation)
- Color: inherits from context — `color-neutral-600` default, `color-brand-primary` for interactive

Common icons used:
- Chevron down/up (accordion toggle)
- Chevron right (list item navigation)
- Check circle (paid on time)
- Bank / card icon (payment method)
- Chat bubble (support)
- Envelope (email)
- Phone (call)
- Document (notices)

---

## 6. Accessibility

- **Color contrast:** All text meets WCAG AA (4.5:1 for body, 3:1 for large text)
- **Focus management:** Visible focus rings on all interactive elements (2px offset, brand color)
- **Motion:** Respect `prefers-reduced-motion` — disable transitions and animations
- **Screen readers:** All status badges include text, not just color (e.g., "Verified", not just a green dot)
- **Forms:** All inputs have associated `<label>` elements
- **Landmarks:** Page uses `<header>`, `<main>`, `<nav>`, `<footer>` semantic elements

---

## 7. Voice & Tone (UI Copy)

- **Warm and direct:** "Congrats, your personal loan is paid in full!" — celebrate milestones
- **Plain language:** "Checking your rate won't affect your credit score" — demystify finance
- **Action-oriented CTAs:** "Check your rate", "View loan", "Add bank account"
- **Reassuring labels:** "Verified" next to bank accounts builds trust
- **Avoid jargon:** Use "principal" with a "What is principal?" tooltip link when necessary
