---
description: "查询 Cake Design System tokens：颜色、间距、字体、阴影、组件变体。快速查找正确的 CSS Variable。"
---

# Cake Token Lookup

Help the user find the correct **Cake Design System** CSS variable for their needs.

## Token Categories

### Colors (33 foundation + 26 semantic)
| Semantic Token | Hex | Usage |
|---|---|---|
| `--sem-color-bg-brand` | #0F172A | Primary brand bg, filled buttons |
| `--sem-color-bg-primary` | #FFFFFF | Default page background |
| `--sem-color-bg-secondary` | #F5F5F5 | Secondary/muted background |
| `--sem-color-text-inverse` | #FFFFFF | Text on dark backgrounds |
| `--sem-color-text-secondary` | #737373 | Muted/secondary text |
| `--sem-color-interactive-primary` | #0F172A | Interactive elements default |
| `--sem-color-interactive-primary-hover` | #1D4ED8 | Hover state |
| `--sem-color-border` | #737373 | Default borders |
| `--sem-color-border-focus` | #0F172A | Focus ring |
| `--sem-color-border-error` | #B91C1C | Error borders |
| `--sem-color-state-success` | #F0FDF4 | Success background |
| `--sem-color-state-error` | #B91C1C | Error/destructive |
| `--sem-color-state-error-light` | #FFF1F2 | Error light bg |
| `--sem-color-state-warning` | #FFF7ED | Warning background |

### Spacing (15 values)
`0, 1, 2, 4, 8, 10, 12, 16, 20, 24, 28, 40, 60, 80, 126` px
Format: `var(--fdn-spacing-space-{N})`

### Border Radius (5 values)
`4, 5, 8, 100, 128` px
Format: `var(--fdn-radius-radius-{N})`

### Shadows (5 levels)
| Token | Value | Usage |
|---|---|---|
| `--fdn-shadow-shadow-1` | 0px 1px 3px rgba(0,0,0,0.12) | Cards, subtle elevation |
| `--fdn-shadow-shadow-2` | 0px 4px 4px rgba(0,0,0,0.25) | Modals, dropdowns |
| `--fdn-shadow-shadow-3` | 0px 1px 1px rgba(0,0,0,0.14) | Toggle thumb |
| `--fdn-shadow-shadow-4` | 0px 2px 1px rgba(0,0,0,0.2) | Inner/raised |
| `--fdn-shadow-shadow-5` | -2px 0px 6px rgba(0,0,0,0.1) | Drawer/sidebar |

### Typography
Font family: **Segoe UI** (fixed)
39 styles, format: `var(--fdn-typo-style-{N}-font-size)`, `var(--fdn-typo-style-{N}-font-weight)`, etc.

Key sizes: 9px, 12px, 14px, 16px, 20px, 24px, 30px, 32px, 34px

## Instructions

Based on what the user needs, recommend the exact CSS variable(s) to use with usage examples.

{{{ user request }}}
