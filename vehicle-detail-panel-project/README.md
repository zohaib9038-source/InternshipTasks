# Vehicle Detail Panel (React + Vite)

A beginner-friendly example of a vehicle list with a slide-in details panel and a Leaflet map.

## Requirements

- Node.js 18 or newer
- Internet connection for OpenStreetMap map tiles

## Run the project

```bash
npm install
npm run dev
```

Open the local address printed by Vite (usually `http://localhost:5173`).

## Run the Cypress end-to-end tests

Keep the Vite server running in one terminal. In another terminal, run:

```bash
npm run test:e2e
```

Or open the Cypress test runner:

```bash
npm run test:e2e:open
```

## How the code works

- `src/data/vehicles.js` contains easy-to-edit sample vehicle data.
- `src/App.jsx` stores the selected vehicle ID and status filter in React state.
- `src/components/DetailPanel.jsx` displays details and the Leaflet map.
- The panel is rendered alongside the list, so opening it does not recreate the list or reset its filter/scroll position.
- The panel has a labelled dialog, focus on open, Escape-to-close, and a basic Tab focus trap.
- The map uses OpenStreetMap tiles and does not need an API key.

## Notes

The map needs internet access to load tiles. Cypress tests check opening, closing, accessibility labelling, focus, and filter persistence. The sample project does not include your existing vehicle API or existing list virtualization; connect the same `vehicle` object to this panel when merging into another app.
