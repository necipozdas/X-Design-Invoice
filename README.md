# X Design Build Invoice App

Private invoice tool for X Design Build (legal name: X design LLC).

## Open
Open index.html in a browser. No installation or server is required. Editable source is in src/. Run node scripts/build.mjs after editing it. Run node scripts/check.mjs to check JavaScript syntax.

## Features
- Invoice history, editing and overwriting saved invoices
- Client details and automatic company address and email
- Remodeling categories and quantities
- Labor pricing plus an optional material charge on each item
- Tax, discounts, per-item and invoice totals
- Print / Save as PDF with matching logo
- JSON backup export and import

## Storage
Invoices are kept in browser localStorage under x-design-invoices-v1. The repository contains app source, not the user's saved invoice records. Export backup from the old app and import it after moving to another browser, app file, or domain. There is no cross-device sync.

## Deployment status
Not deployed to Hostinger or the user's domain. Desired future location: invoices.xdesignbuild.com, PRIVATE for the owner. No authentication has been implemented. Do not expose this as a private app merely by using an obscure URL; configure real access control before deployment.

See CLAUDE.md for the handoff.
