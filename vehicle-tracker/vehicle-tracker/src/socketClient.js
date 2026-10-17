import { WebSocket } from 'mock-socket';

export function connectVehicleSocket(url, store) {
  const ws = new WebSocket(url);
  ws.onmessage = (event) => {
    const { id, lat, lng } = JSON.parse(event.data);
    store.updatePosition(id, lat, lng);
  };
  return ws;
}
