---
name: cake-design-system
description: "Use when: 实现任何 Lenovo 企业级 UI 组件。强制使用 Cake Design System 的 CSS Variables (--fdn-*, --sem-*), 29 个组件模板 (React/Vue/HTML), 260+ 设计 tokens。Enforce Cake Design System tokens for all UI code."
---

# Cake Design System Skill — Lenovo Enterprise UI

> **Version**: 1.0.0
> **Figma Source**: cake For Enterprise (prev. Coffee) — 61 component sets, 2717 variants
> **Token Architecture**: Foundation (`--fdn-*`) → Semantic (`--sem-*`) → Component (`cmp.*`)

---

## When to Use This Skill

Activate this skill whenever you are:
- Implementing any UI component for a Lenovo enterprise product
- Writing React, Vue, or HTML pages that must follow the Cake design system
- Choosing colors, spacing, typography, shadows, or border-radius values
- Reviewing or refactoring existing code for Cake compliance
- Creating new components that must be consistent with the existing system

---

## MANDATORY RULES

These rules are **non-negotiable**. Every line of generated code must comply.

### 1. Colors — CSS Variables Only

```
✅ color: var(--fdn-color-palette-0f172a);
✅ background: var(--sem-color-bg-brand);
❌ color: #0F172A;
❌ background: rgb(15, 23, 42);
```

All colors must reference `--fdn-color-palette-*` or `--sem-color-*` CSS variables.
Hard-coded hex, rgb, hsl values are **forbidden**.

### 2. Spacing — Fixed Scale Only

Only these spacing values are allowed:

| Variable | Value |
|----------|-------|
| `--fdn-spacing-space-0` | 0px |
| `--fdn-spacing-space-1` | 1px |
| `--fdn-spacing-space-2` | 2px |
| `--fdn-spacing-space-4` | 4px |
| `--fdn-spacing-space-8` | 8px |
| `--fdn-spacing-space-10` | 10px |
| `--fdn-spacing-space-12` | 12px |
| `--fdn-spacing-space-16` | 16px |
| `--fdn-spacing-space-20` | 20px |
| `--fdn-spacing-space-24` | 24px |
| `--fdn-spacing-space-28` | 28px |
| `--fdn-spacing-space-80` | 80px |

```
✅ padding: var(--fdn-spacing-space-8) var(--fdn-spacing-space-16);
❌ padding: 10px 15px;
```

### 3. Border Radius — Fixed Scale Only

| Variable | Value | Use For |
|----------|-------|---------|
| `--fdn-radius-radius-4` | 4px | Buttons, inputs, checkboxes, labels |
| `--fdn-radius-radius-5` | 5px | Toggle track |
| `--fdn-radius-radius-8` | 8px | Cards, modals, toasts, drawers |
| `--fdn-radius-radius-100` | 100px | Pills, badges, switches |
| `--fdn-radius-radius-128` | 128px | Circles, avatars, radio, stepper icons |

### 4. Shadows — Fixed Scale Only

| Variable | Value | Use For |
|----------|-------|---------|
| `--fdn-shadow-shadow-1` | 0px 1px 3px rgba(0,0,0,0.12) | Cards, toasts, tooltips |
| `--fdn-shadow-shadow-2` | 0px 4px 4px rgba(0,0,0,0.25) | Modals, dropdowns |
| `--fdn-shadow-shadow-3` | 0px 1px 1px rgba(0,0,0,0.14) | Toggle thumbs |
| `--fdn-shadow-shadow-4` | 0px 2px 1px -1px rgba(0,0,0,0.2) | Toggle thumbs |
| `--fdn-shadow-shadow-5` | -2px 0px 6px rgba(0,0,0,0.1) | Drawers, sticky columns |

### 5. Typography — Segoe UI via Token Variables

Font family is fixed to **"Segoe UI"** (with Roboto fallback for specific styles).
Always reference `--fdn-typo-style-{N}-{property}`:

```css
font-family: var(--fdn-typo-style-5-font-family);
font-size: var(--fdn-typo-style-5-font-size);
font-weight: var(--fdn-typo-style-5-font-weight);
line-height: var(--fdn-typo-style-5-line-height);
```

Key typography styles:

| Style | Size | Weight | Role |
|-------|------|--------|------|
| style-19 | 34px | 700 | Display / Hero heading |
| style-6 | 32px | 600 | Page heading XL |
| style-25 | 30px | 700 | Section heading 2XL |
| style-35 | 24px | 700 | Section heading LG |
| style-5/38 | 20px | 600 | Card/section heading MD |
| style-10 | 20px | 700 | Card heading bold |
| style-16/17 | 16px | 600-700 | Body semibold/bold |
| style-34 | 16px | 400 | Body regular |
| style-12/14 | 14px | 400 | Body small |
| style-13/26 | 14px | 600 | Body small semibold |
| style-11/30 | 14px | 700 | Label bold |
| style-2/7 | 12px | 400 | Caption |
| style-18/23 | 12px | 600 | Caption semibold |
| style-8 | 9px | 400 | Micro text |

### 6. Component Implementation — Match Figma Variants

Every Cake component must implement the variant dimensions from Figma:

- **Button**: Condition (Icon only / Icon+Text / Text only / Text+Icon) × Property (Filled / Outlined / Not Filled) × State (Default / Hover / Disabled / Success / Error) × Size (Small / Medium)
- **Checkbox**: Checked / Unchecked / Indeterminate × State (normal / hover / disabled) × Surface (default / inverse)
- **Radio**: Checked / Unchecked × State (normal / hover / disabled)
- **Switch**: Content mode (text / icon / icon-only) × Options (2/3) × State
- **Toggle**: On / Off × State (normal / hover / disabled)
- **Card**: Layout (horizontal / vertical / compact / carousel) × hoverable
- **Dropdown**: Type (single / multi / tree / tag) × State (default / hover / focus / error / disabled)
- **TextField**: Type (text lead / icon lead / field label / caption / textarea) × State (default / typing / error / disabled / readonly) × Size (sm / md / lg)
- **Table**: Row size (sm / md / lg) × Features (filter / expand / sticky / selection)
- **Modal**: Variant (confirm / danger / detail) × Size (sm / md / lg)
- **Toast**: Type (info / success / error / warning) × closable
- **Tabs**: Direction (horizontal / vertical) × Type (line / card) × State

### 7. CSS File Inclusion

Every project using Cake must include the token CSS file:

```html
<!-- HTML -->
<link rel="stylesheet" href="cake-tokens.css">
```

```js
// React / Vue
import './cake-tokens.css';
```

---

## Semantic Token Reference

These semantic tokens alias foundation tokens for consistent usage:

| Semantic Variable | Maps To | Hex |
|-------------------|---------|-----|
| `--sem-color-interactive-primary` | `--fdn-color-palette-0f172a` | #0F172A |
| `--sem-color-interactive-primary-hover` | `--fdn-color-palette-1d4ed8` | #1D4ED8 |
| `--sem-color-text-secondary` | `--fdn-color-palette-737373` | #737373 |
| `--sem-color-text-disabled` | `--fdn-color-palette-737373` | #737373 |
| `--sem-color-text-inverse` | `--fdn-color-palette-ffffff` | #FFFFFF |
| `--sem-color-text-link` | `--fdn-color-palette-0f172a` | #0F172A |
| `--sem-color-text-link-hover` | `--fdn-color-palette-1d4ed8` | #1D4ED8 |
| `--sem-color-bg-primary` | `--fdn-color-palette-ffffff` | #FFFFFF |
| `--sem-color-bg-secondary` | `--fdn-color-palette-f5f5f5` | #F5F5F5 |
| `--sem-color-bg-surface` | `--fdn-color-palette-ffffff` | #FFFFFF |
| `--sem-color-bg-disabled` | `--fdn-color-palette-f5f5f5` | #F5F5F5 |
| `--sem-color-bg-brand` | `--fdn-color-palette-0f172a` | #0F172A |
| `--sem-color-border` | `--fdn-color-palette-737373` | #737373 |
| `--sem-color-border-focus` | `--fdn-color-palette-0f172a` | #0F172A |
| `--sem-color-border-disabled` | `--fdn-color-palette-f5f5f5` | #F5F5F5 |
| `--sem-color-border-error` | `--fdn-color-palette-b91c1c` | #B91C1C |
| `--sem-color-state-success` | `--fdn-color-palette-f0fdf4` | #F0FDF4 |
| `--sem-color-state-success-light` | `--fdn-color-palette-16a34a` | #16A34A |
| `--sem-color-state-warning` | `--fdn-color-palette-fff7ed` | #FFF7ED |
| `--sem-color-state-warning-light` | `--fdn-color-palette-f59e0b` | #F59E0B |
| `--sem-color-state-error` | `--fdn-color-palette-b91c1c` | #B91C1C |
| `--sem-color-state-error-light` | `--fdn-color-palette-fff1f2` | #FFF1F2 |
| `--sem-color-state-info` | `--fdn-color-palette-047857` | #047857 |
| `--sem-color-state-info-light` | `--fdn-color-palette-14b8a6` | #14B8A6 |

---

## Token Search

When implementing a component, search for exact token combinations:

```bash
# Find button tokens
python scripts/search.py "button success filled" --domain component

# Find color by role
python scripts/search.py "primary blue" --domain color

# Find typography style
python scripts/search.py "heading bold 20" --domain typography

# Find spacing/radius/shadow
python scripts/search.py "card padding shadow" --domain spacing
```

---

## Component Templates

Pre-built templates for all 29 Cake components are in `templates/components/`.
Each component has React (.tsx), Vue (.vue), and HTML (.html) versions.

When implementing a component:
1. Look up the matching template in `templates/components/{component}/`
2. Use the template as a starting point
3. Customize props/variants per the user's specific needs
4. Ensure all CSS values use `var(--fdn-*)` or `var(--sem-*)` tokens

### Available Components

**Controls**: Button, Checkbox, Radio, Switch, Toggle
**Data Display**: Card, Drawer, Label, Loading, Table
**Data Input**: Calendar, Dropdown, QtySelector, Search, Slider, TextField, Tree, Uploader
**Feedback**: Badge, Modal, Toast, Tooltip
**Navigations**: Accordion, Breadcrumb, Footer, Navbar, Pagination, Stepper, Tabs

---

## Framework Integration Guide

### React

```tsx
// 1. Import tokens at app root
import '../cake-tokens.css';

// 2. Use CSS variables in components
const buttonStyle = {
  background: 'var(--sem-color-bg-brand)',
  color: 'var(--sem-color-text-inverse)',
  borderRadius: 'var(--fdn-radius-radius-4)',
  padding: 'var(--fdn-spacing-space-8) var(--fdn-spacing-space-16)',
};

// 3. Or use CSS Modules / className approach
<button className="cake-btn cake-btn--filled">Submit</button>
```

### Vue

```vue
<script setup>
// 1. Import in main.ts or App.vue
import './cake-tokens.css';
</script>

<style scoped>
/* 2. Use CSS variables */
.cake-btn--filled {
  background: var(--sem-color-bg-brand);
  color: var(--sem-color-text-inverse);
  border-radius: var(--fdn-radius-radius-4);
  padding: var(--fdn-spacing-space-8) var(--fdn-spacing-space-16);
}
</style>
```

### HTML

```html
<!-- 1. Link CSS file -->
<link rel="stylesheet" href="cake-tokens.css">

<!-- 2. Use variables in inline or embedded styles -->
<style>
  .cake-btn--filled {
    background: var(--sem-color-bg-brand);
    color: var(--sem-color-text-inverse);
    border-radius: var(--fdn-radius-radius-4);
    padding: var(--fdn-spacing-space-8) var(--fdn-spacing-space-16);
  }
</style>
```

---

## Anti-Patterns

| ❌ Don't | ✅ Do |
|----------|-------|
| `color: #0F172A` | `color: var(--fdn-color-palette-0f172a)` |
| `padding: 15px` | `padding: var(--fdn-spacing-space-16)` |
| `border-radius: 6px` | `border-radius: var(--fdn-radius-radius-4)` or `var(--fdn-radius-radius-8)` |
| `font-family: Arial` | `font-family: var(--fdn-typo-style-5-font-family)` |
| `box-shadow: 0 2px 4px rgba(0,0,0,0.1)` | `box-shadow: var(--fdn-shadow-shadow-1)` |
| Inventing new spacing values | Use only the fixed spacing scale |
| Mixing design systems | Use Cake tokens exclusively |

---

## File Structure

```
skills/ui-ux-lenovo-skill/
├── SKILL.md                          ← You are here
├── data/
│   ├── cake-colors.csv               33 colors with semantic roles
│   ├── cake-components.csv           90+ component-variant token specs
│   ├── cake-typography.csv           39 typography styles
│   └── cake-spacing.csv              Spacing, radius, shadow scales
├── scripts/
│   ├── core.py                       BM25 search engine
│   └── search.py                     CLI search tool
├── templates/
│   ├── cake-tokens.css               Full CSS variable file (include in projects)
│   └── components/                   29 components × 3 frameworks
│       ├── button/                   react.tsx, vue.vue, html.html
│       ├── modal/                    ...
│       └── ...
└── references/
    ├── cake-tokens.json              Source token data
    ├── cake-components.json          Source component data
    └── cake-token-draft.json         Token provenance data
```
