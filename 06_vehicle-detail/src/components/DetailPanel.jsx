import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function DetailPanel({ vehicle, onClose }) {
  const panelRef = useRef(null);
  const closeButtonRef = useRef(null);

  // Put keyboard focus inside the panel when it opens.
  useEffect(() => {
    closeButtonRef.current?.focus();
  }, []);

  // Escape closes the panel. Tab and Shift+Tab stay inside it.
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll(
        'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!vehicle) return null;

  return (
    <div className="panel-backdrop" data-testid="panel-backdrop">
      <aside
        ref={panelRef}
        className="detail-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="detail-title"
        tabIndex={-1}
        data-testid="detail-panel"
      >
        <div className="panel-heading">
          <div>
            <p className="eyebrow">VEHICLE DETAILS</p>
            <h2 id="detail-title">{vehicle.plate}</h2>
          </div>
          <button
            ref={closeButtonRef}
            className="close-button"
            type="button"
            aria-label="Close vehicle details"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <div className="details-grid">
          <div className="detail-item">
            <span>Status</span>
            <strong className={`status ${vehicle.status.toLowerCase()}`}>
              {vehicle.status}
            </strong>
          </div>
          <div className="detail-item">
            <span>Last update</span>
            <strong>{vehicle.lastUpdate}</strong>
          </div>
          <div className="detail-item">
            <span>Latitude</span>
            <strong>{vehicle.lat.toFixed(4)}</strong>
          </div>
          <div className="detail-item">
            <span>Longitude</span>
            <strong>{vehicle.lng.toFixed(4)}</strong>
          </div>
        </div>

        <h3 className="map-heading">Last known location</h3>
        <div className="map-wrap" aria-label={`Map for ${vehicle.plate}`}>
          <MapContainer
            key={vehicle.id}
            center={[vehicle.lat, vehicle.lng]}
            zoom={13}
            scrollWheelZoom={false}
            className="vehicle-map"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[vehicle.lat, vehicle.lng]}>
              <Popup>{vehicle.plate}</Popup>
            </Marker>
          </MapContainer>
        </div>
        <p className="coordinates-note">
          Map centered at {vehicle.lat.toFixed(4)}, {vehicle.lng.toFixed(4)}.
        </p>
      </aside>
    </div>
  );
}