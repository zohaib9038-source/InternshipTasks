# Restaurant Menu & Reservation System — Data Model and Architecture

## 1. Task overview

This repository contains the initial data model and a small local mock API for a restaurant application. It provides sample menu data (20 items), reservation data storage, and a documented decision about browser-side offline storage.

The purpose is to prepare a reliable data foundation before building the React user interface. This is a development mock API, not a production booking service.

## 2. Data model

### Menu item

Each menu item has the following fields:

| Field | Type | Purpose |
|---|---|---|
| `id` | number | Unique menu item identifier |
| `name` | string | Display name |
| `description` | string | Short item description |
| `price` | number | Price in Pakistani rupees |
| `currency` | string | Currency code (`PKR`) |
| `category` | string | Menu category |
| `image` | string | Image path used by the frontend |
| `available` | boolean | Whether the item can currently be ordered |

Example:

```json
{
  "id": 1,
  "name": "Classic Beef Burger",
  "description": "Grilled beef patty, lettuce, tomato and house sauce.",
  "price": 850,
  "currency": "PKR",
  "category": "Burgers",
  "image": "/images/burger.jpg",
  "available": true
}
```

### Reservation

A reservation contains:

| Field | Type | Purpose |
|---|---|---|
| `id` | number | Unique reservation identifier |
| `customerName` | string | Customer's name |
| `phone` | string | Contact number |
| `guests` | number | Number of people |
| `date` | string | Reservation date (`YYYY-MM-DD`) |
| `time` | string | Reservation time (`HH:mm`, 24-hour format) |
| `status` | string | Current state, initially `pending` |
| `createdAt` | string | ISO timestamp when the record was created |

Example:

```json
{
  "id": 1,
  "customerName": "Ali Khan",
  "phone": "03001234567",
  "guests": 4,
  "date": "2026-12-01",
  "time": "19:00",
  "status": "pending",
  "createdAt": "2026-11-19T12:00:00.000Z"
}
```

The example is illustrative. The supplied `data/reservations.json` starts with an empty list.

## 3. Repository structure

```text
restaurant-architecture-task/
├── data/
│   ├── menu.json
│   └── reservations.json
├── server.js
├── package.json
├── .gitignore
└── README.md
```

- `data/menu.json` contains 20 sample menu items.
- `data/reservations.json` stores reservation records created through the mock API.
- `server.js` exposes API endpoints and writes new reservations to the JSON file.
- `package.json` contains the Express dependency and run scripts.

## 4. Run the mock API

Requirements: Node.js and npm.

Open this project folder in VS Code, then run:

```bash
npm install
npm start
```

The server runs at `http://localhost:3000`.

### Available endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/menu` | Get all 20 menu items |
| GET | `/api/reservations` | Get all reservations |
| POST | `/api/reservations` | Create a reservation |
| DELETE | `/api/reservations/:id` | Delete a reservation |

### Test the API

Open these URLs in a browser:

- `http://localhost:3000/` — API status
- `http://localhost:3000/api/menu` — menu list
- `http://localhost:3000/api/reservations` — reservation list

Example POST request (use Thunder Client, Postman, or another API client):

```http
POST http://localhost:3000/api/reservations
Content-Type: application/json
```

```json
{
  "customerName": "Ali Khan",
  "phone": "03001234567",
  "guests": 4,
  "date": "2026-12-01",
  "time": "19:00"
}
```

A successful request returns HTTP `201 Created`. The new record is written to `data/reservations.json`. The API performs basic required-field validation; production code would need stronger validation and booking conflict checks.

## 5. Architecture Decision Log

### Decision: use localStorage for the first browser-side offline version

For the initial frontend prototype, localStorage is selected for a small amount of reservation-draft data. It is simple, built into the browser, and suitable for demonstrating persistence between page refreshes. The mock API remains the source used for normal online development.

| Comparison | localStorage | IndexedDB |
|---|---|---|
| Data model | Key/value strings | Structured records and indexes |
| Ease of use | Very easy | More complex API |
| Operations | Synchronous | Asynchronous |
| Storage capacity | Relatively small; browser-dependent | Usually much larger; browser-dependent |
| Querying | Read a value by key; application parses/filters it | Object stores and indexes support queries |
| Transactions | No database-style transactions | Supports transactions |
| Offline use | Available after the app and data have been loaded | Available after the app and data have been loaded |
| Best fit | Small settings, drafts, simple cached data | Larger offline datasets and structured records |

### Why localStorage was selected now

**Pros**
- No extra package or database setup is required.
- Easy to read and write from a React application.
- Data remains in the same browser after a refresh or restart.
- Can be read while offline, provided the application itself is available locally or cached.

**Cons**
- Values must be converted to and from JSON strings.
- Synchronous reads and writes can block the main thread.
- Limited capacity compared with IndexedDB.
- No built-in indexes or multi-record transactions.
- Data is isolated to that browser and device; it does not automatically synchronize.

### Offline behaviour

The browser can save a reservation draft in localStorage when the network is unavailable, then display it again after refresh. When connectivity returns, the frontend can send the draft to the API and remove the local copy after a successful response.

This mock API itself requires the local Node server to be running. localStorage does not make the server available offline. A real offline-first web app would also need its application assets cached (for example, with a service worker) and a clear synchronization strategy.

### Future scaling

If the application needs many offline records, filtering/searching, indexes, or reliable multi-record updates, IndexedDB would be a better browser-side choice. For real restaurant bookings, a backend database and server-side validation are essential. Browser storage must not be treated as the final source of truth because different customers' browsers cannot coordinate table availability or prevent double bookings.

### Summary

Use **localStorage for small offline reservation drafts in the first prototype**, keep the mock API for online API practice, and move to **IndexedDB** if offline data becomes larger or more complex. A production version should use a server-side database for confirmed reservations.

## 6. Example browser storage code

This example demonstrates saving and reading local reservation drafts. It is intended for the future frontend; it is not required to run the Express server.

```js
// Save a draft
function saveReservationDraft(reservation) {
  const drafts = JSON.parse(
    localStorage.getItem("reservationDrafts") || "[]"
  );

  drafts.push(reservation);
  localStorage.setItem("reservationDrafts", JSON.stringify(drafts));
}

// Read drafts
function getReservationDrafts() {
  return JSON.parse(
    localStorage.getItem("reservationDrafts") || "[]"
  );
}
```

## 7. Limitations and next steps

- This is a local development mock, not a secure production API.
- JSON-file writes are not designed for simultaneous production traffic.
- No authentication, payment processing, table-capacity management, or double-booking prevention is included.
- Next step: connect a React frontend, validate form input, and implement an online/offline draft synchronization flow.
