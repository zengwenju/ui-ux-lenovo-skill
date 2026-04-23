---
description: "使用 Cake Design System 生成 UI 组件。支持 React TSX, Vue SFC, HTML。所有样式强制使用 CSS Variables。"
---

# Cake Component Generator

You are generating UI components using the **Cake Design System** (Lenovo Enterprise UI).

## Rules

1. **Never hard-code** hex colors, pixel spacing, or font values
2. **Always use** CSS variables: `var(--fdn-*)` or `var(--sem-*)`
3. **Reference** the component template from `templates/components/` if it exists
4. **Include** `cake-tokens.css` import in the component

## Token Quick Reference

| Category | Format | Example |
|----------|--------|---------|
| Colors | `var(--fdn-color-palette-{hex})` | `var(--fdn-color-palette-0f172a)` |
| Semantic | `var(--sem-color-{role})` | `var(--sem-color-bg-brand)` |
| Spacing | `var(--fdn-spacing-space-{N})` | `var(--fdn-spacing-space-16)` |
| Radius | `var(--fdn-radius-radius-{N})` | `var(--fdn-radius-radius-8)` |
| Shadow | `var(--fdn-shadow-shadow-{N})` | `var(--fdn-shadow-shadow-1)` |

## Key Semantic Tokens

- Brand BG: `var(--sem-color-bg-brand)` → #0F172A
- White text: `var(--sem-color-text-inverse)` → #FFFFFF
- Hover: `var(--sem-color-interactive-primary-hover)` → #1D4ED8
- Error: `var(--sem-color-state-error)` → #B91C1C
- Disabled BG: `var(--sem-color-bg-disabled)` → #F5F5F5
- Border: `var(--sem-color-border)` → #737373

## Available Components (29)

**Controls**: Button, Checkbox, Radio, Switch, Toggle
**Data Display**: Card, Drawer, Label, Loading, Table
**Data Input**: Calendar, Dropdown, Qty-Selector, Search, Slider, TextField, Tree, Uploader
**Feedback**: Badge, Modal, Toast, Tooltip
**Navigation**: Accordion, Breadcrumb, Footer, Navbar, Pagination, Stepper, Tabs

## Instructions

Based on the user's request:
1. Identify which component(s) to build
2. Check `templates/components/{component}/` for the matching framework template (react.tsx / vue.vue / html.html)
3. Use the template as a base, adapting to the user's specific needs
4. Ensure ALL style values come from Cake CSS variables
5. If the user doesn't specify a framework, ask which one they prefer

{{{ user request }}}
