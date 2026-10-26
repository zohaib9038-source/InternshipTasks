import { useState } from "react";
import { vehicles } from "./data/vehicles";
import DetailPanel from "./components/DetailPanel";

export default function App() {
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedVehicleId, setSelectedVehicleId] = useState(null);

  const selectedVehicle = vehicles.find(
    (vehicle) => vehicle.id === selectedVehicleId
  );

  const visibleVehicles = vehicles.filter((vehicle) => {
    return statusFilter === "All" || vehicle.status === statusFilter;
  });

  function closePanel() {
    setSelectedVehicleId(null);
  }

  return (
    <main className="page">
      <header className="topbar">
        <div>
          <p className="eyebrow">FLEET MANAGEMENT</p>
          <h1>Vehicles</h1>
          <p className="subtitle">Select a vehicle to view its latest details.</p>
        </div>
        <label className="filter-label">
          Filter by status
          <select
            aria-label="Filter by status"
            value={statusFilter}
            onChange={(event) => setStatusFilter(event.target.value)}
          >
            <option>All</option>
            <option>Active</option>
            <option>Idle</option>
            <option>Offline</option>
          </select>
        </label>
      </header>

      <section className="vehicle-list" aria-label="Vehicle list">
        <div className="list-header">
          <span>Vehicle</span>
          <span>Status</span>
          <span>Last update</span>
          <span></span>
        </div>
        {visibleVehicles.map((vehicle) => (
          <button
            type="button"
            className="vehicle-row"
            key={vehicle.id}
            onClick={() => setSelectedVehicleId(vehicle.id)}
            aria-label={`Open details for ${vehicle.plate}`}
            data-testid={`vehicle-row-${vehicle.id}`}
          >
            <strong>{vehicle.plate}</strong>
            <span className={`status ${vehicle.status.toLowerCase()}`}>
              {vehicle.status}
            </span>
            <span>{vehicle.lastUpdate}</span>
            <span className="row-arrow" aria-hidden="true">›</span>
          </button>
        ))}
        {visibleVehicles.length === 0 && (
          <p className="empty-state">No vehicles match this filter.</p>
        )}
      </section>

      {selectedVehicle && (
        <DetailPanel vehicle={selectedVehicle} onClose={closePanel} />
      )}
    </main>
  );
}