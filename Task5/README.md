# Vehicle Filter + Sort (React + Vite + Tailwind CSS)

A small, beginner-friendly project implementing:
- Status dropdown (`all`, `active`, `inactive`)
- Sort selector (`plate`, `updated`)
- URL synchronization using React Router's `useSearchParams`
- Reload/share support for the selected URL state
- Unit tests with Vitest

## Requirements
Install Node.js (LTS), then open this folder in VS Code.

## Run locally
```bash
npm install
npm run dev
```
Open the local URL shown by Vite in your browser.

## Run tests
```bash
npm test
```

## Build
```bash
npm run build
```

## Try URL state
Choose **Active** and **Plate**. The URL should include:
`?status=active&sort=plate`

Refresh the page; the selected options and filtered list should remain.

## Project structure
- `src/FilterBar.jsx`: controlled dropdowns
- `src/VehiclePage.jsx`: URL state and page UI
- `src/VehicleList.jsx`: responsive table
- `src/vehicleUtils.js`: URL parsing, filtering, sorting
- `src/vehicleUtils.test.js`: unit tests
- `src/vehicles.js`: sample data

The sample data is only for demonstrating the feature. If you are adding this to your existing vehicle tracker, move the components and utility functions into your current project and pass your real vehicle array to `VehiclePage`.

## Note about GitHub Pages
If you deploy under a repository subpath on GitHub Pages, configure Vite's `base` and React Router's `basename` to match your repository path. For local development, the default setup works.
