# Vehicle Tracker (mock WebSocket + React Context)

    npm install
    npm run dev     # open the app; one random vehicle updates every 5s
    npm test        # integration tests

## How it works
- `src/mockServer.js` – mock-socket server, pushes `{id, lat, lng}` for a random vehicle every 5s.
- `src/store.js` – small store; only the changed vehicle object gets a new reference.
- `src/VehicleContext.jsx` – Context holds the (stable) store. `useVehicle(id)` uses
  `useSyncExternalStore` so each row subscribes to its own slice only.
  (Putting the data itself in Context value would re-render every row.)
- `src/VehicleRow.jsx` – `memo` + `<Profiler>`; list never re-renders on messages, so scroll/filter are kept.

## Verify with Chrome React DevTools Profiler
Start recording, wait for a message: only one `VehicleRow` is highlighted.
The console also logs `[render] row-N` for every row commit (one line per message).
