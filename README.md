# @fieldflow/brand

Shared brand assets and design tokens for FieldFlow Labs products.

**Product naming:** FieldFlow Labs (company), FieldFlow (directory product), FieldFlow Sync (sync/eTapestry product).

## Install

```bash
npm install @fieldflow/brand
```

Requires `.npmrc` with GitHub Packages auth. See BRAND.md in the fieldflow-labs-landing repo for full setup instructions.

## Usage

```js
import { colors, logos } from '@fieldflow/brand'

// Token values
console.log(colors.accent) // '#2563eb'

// Resolved SVG paths (for bundlers)
import logo from '@fieldflow/brand/src/logos/fieldflow/fieldflow-logo.svg'
```

## Asset naming convention

**One prefix: everything starts with `fieldflow-`.** Folder = product, filename = product-variant.ext

Use the logo SVG with `fill="currentColor"` (or CSS `color`) for light/dark — no separate logo-white asset.

```
src/logos/
  fieldflow-labs/
    fieldflow-labs-logo.svg
    fieldflow-labs-icon.svg
    ...

  fieldflow/
    fieldflow-logo.svg
    fieldflow-icon.svg
    fieldflow-icon-white.svg
    fieldflow-icon-circle.svg
    fieldflow-icon-circle-white.svg
    fieldflow-favicon.svg
    fieldflow-favicon.png

  fieldflow-sync/
    fieldflow-sync-logo.svg
    fieldflow-sync-icon.svg
    ...
```

## Publish workflow

1. Add/update assets in `src/logos/`
2. `npm version patch`
3. `npm publish`
4. In each consuming repo: `npm update @fieldflow/brand`

## Source files

Illustrator source files and print exports live in:

`Dropbox/Creative Cloud Files/21 - fieldflow/branding/`

Those files are NOT part of this package. This package contains web-ready SVG/PNG exports only.
