---
description: "审查代码是否符合 Cake Design System 规范。检查硬编码颜色、间距、圆角、阴影等违规项。"
---

# Cake Design System — Code Review

Review the provided code for **Cake Design System** compliance.

## Check These Rules

### 1. Colors
- ❌ Hard-coded hex: `#0F172A`, `#FFFFFF`, `rgb(...)`, `hsl(...)`
- ✅ CSS variable: `var(--fdn-color-palette-0f172a)`, `var(--sem-color-bg-brand)`

### 2. Spacing
- ❌ Arbitrary values: `15px`, `18px`, `22px`
- ✅ Cake scale only: `var(--fdn-spacing-space-{0,1,2,4,8,10,12,16,20,24,28,80})`

### 3. Border Radius
- ❌ Any non-standard radius: `6px`, `10px`, `16px`
- ✅ Cake radii only: `var(--fdn-radius-radius-{4,5,8,100,128})`

### 4. Shadows
- ❌ Custom box-shadow: `0 2px 4px rgba(...)`
- ✅ Cake shadows only: `var(--fdn-shadow-shadow-{1,2,3,4,5})`

### 5. Typography
- ❌ `font-family: Arial`, `font-size: 15px`
- ✅ `font-family: "Segoe UI"`, use `var(--fdn-typo-style-{N}-*)`

### 6. Component Structure
- Check variant naming matches Figma (Filled/Outlined/Text, Default/Success/Error, sm/md)

## Output Format

For each violation found, report:
```
⚠️ Line {N}: {violation description}
   Current:  {current code}
   Fix:      {corrected code}
```

After listing violations, provide a summary:
- Total violations count
- Severity breakdown
- Overall compliance score (0-100%)

## Code to Review

Review the currently open file or the code provided by the user:

{{{ user request }}}
