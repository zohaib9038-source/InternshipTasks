
export function createVehicleStore(initialVehicles) {
  let byId = {};
  const ids = initialVehicles.map((v) => v.id); // never changes -> list never re-renders
  initialVehicles.forEach((v) => (byId[v.id] = v));
  const listeners = new Set();

  return {
    ids,
    getVehicle: (id) => byId[id],
    updatePosition(id, lat, lng) {
      if (!byId[id]) return;
      byId = { ...byId, [id]: { ...byId[id], lat, lng } };
      listeners.forEach((l) => l());
    },
    subscribe(listener) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
  };
}

export function makeVehicles(count = 50) {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `Vehicle ${i + 1}`,
    lat: 33.6844 + Math.random() * 0.1,
    lng: 73.0479 + Math.random() * 0.1,
  }));
}
