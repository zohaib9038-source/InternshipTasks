import { Server } from 'mock-socket';

// Fake WebSocket server: every `intervalMs` it pushes a new lat/lng for a random vehicle.
export function startMockServer(url, vehicleIds, intervalMs = 5000) {
  const server = new Server(url);
  const timer = setInterval(() => {
    const id = vehicleIds[Math.floor(Math.random() * vehicleIds.length)];
    const msg = {
      id,
      lat: 33.6844 + Math.random() * 0.1,
      lng: 73.0479 + Math.random() * 0.1,
    };
    server.emit('message', JSON.stringify(msg)); // sends to all connected clients
  }, intervalMs);

  return {
    server,
    stop() {
      clearInterval(timer);
      server.stop();
    },
  };
}
