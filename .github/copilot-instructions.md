# Cake Design System — Copilot Instructions

## Overview
This project uses the **Cake Design System** (Lenovo Enterprise UI).
All UI code must use CSS variables from `cake-tokens.css`.

## Mandatory Rules
1. **Colors**: Use `var(--fdn-color-palette-*)` or `var(--sem-color-*)`. Never hard-code hex/rgb.
2. **Spacing**: Only `var(--fdn-spacing-space-{0,1,2,4,8,10,12,16,20,24,28,80})`.
3. **Radius**: Only `var(--fdn-radius-radius-{4,5,8,100,128})`.
4. **Shadows**: Only `var(--fdn-shadow-shadow-{1,2,3,4,5})`.
5. **Typography**: Font family fixed to "Segoe UI" via `var(--fdn-typo-style-{N}-*)`.
6. **Components**: Match Figma variant structure (State/Size/Property/Condition).

## Key Semantic Tokens
| Variable | Hex | Usage |
|----------|-----|-------|
| `--sem-color-bg-brand` | #0F172A | Primary brand bg, filled buttons |
| `--sem-color-text-inverse` | #FFFFFF | Text on dark backgrounds |
| `--sem-color-interactive-primary-hover` | #1D4ED8 | Hover state |
| `--sem-color-border` | #737373 | Default borders |
| `--sem-color-border-error` | #B91C1C | Error borders |
| `--sem-color-bg-disabled` | #F5F5F5 | Disabled state bg |
| `--sem-color-text-disabled` | #737373 | Disabled text |

## Component Templates
29 pre-built components with React/Vue/HTML templates are available in `templates/components/`.
Reference the correct template when implementing Cake components.

## Full Specification
See `SKILL.md` for complete rules, all tokens, and framework integration guides.
