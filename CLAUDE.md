# Handoff to Claude

## User intent
Keep this a SIMPLE invoice app for a remodeling / kitchen-and-bath business. Do not add contracts, payment schedules, project-plan UI, or material pictures. Those were explored and then explicitly removed from the user-facing app.

## Current requirements
Business name: X Design Build. Legal company name line: X design LLC (user approved leaving it). Address: 1551 Powells Tavern Pl, Herndon, VA 20170. Email: xdesignbuildllc@gmail.com.

Palette: gray, black, mustard. Sidebar is medium light gray so the black portion of the X remains visible. Logo: user's original two-color X, mustard tinted, small inside a thin square outline beside X Design Build and BUSINESS STUDIO. The PDF header clones the sidebar logo. Keep the user's chosen mark; do not substitute generated alternatives.

Each invoice item has description, quantity, category, labor unit price and its own Include material checkbox. Optional material unit price is charged only when that row is checked. Show line totals and separate material/labor totals. Unchecked material values can be retained for editing but must not affect totals or appear as charged on the PDF.

Invoice history opens from Invoices. Selecting a record edits it; Save invoice overwrites the same ID. No email sending exists; user downloads and sends PDFs themselves.

## Source and build
Root index.html is the complete distributable app, generated from src/index.html, src/style.css and scripts in this order: app.js, remodel.js, invoice-only.js, cost-sections.js, simple.js. Run node scripts/build.mjs.

Implementation accumulated overrides while prototyping. remodel.js still contains legacy contract/photo/payment code that invoice-only.js and simple.js hide or bypass. User-facing features are invoice-only. Refactoring into a clean implementation is worthwhile, but preserve browser data and pricing behavior. No hosted backend, cloud storage, authentication, or automated visual tests exist. Previous browser QA was blocked by local-file browser automation policy; syntax and selected calculation checks passed. Do not claim full end-to-end verification.

## Data preservation
Storage key x-design-invoices-v1. Preserve record IDs, legacy rate/category fields, laborRate, materialRate, includeMaterial, and import/export compatibility. Existing browser invoices are NOT included here. Never overwrite an existing history with a blank array during migration. Always offer backup before changing storage location or schema. Multiple local file copies/URLs previously confused history visibility.

## Hosting request still pending
Domain xdesignbuild.com; intended subdomain invoices.xdesignbuild.com; owner wants private access. Hostinger is the intended provider, account managed with brother. No domain or hosting configuration was changed. Do not publish publicly. Add actual authentication/access protection before a private deployment. App Store distribution was only a future idea, not current scope.
