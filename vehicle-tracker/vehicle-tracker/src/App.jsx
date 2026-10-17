import { useEffect, useMemo } from 'react';
import { VehicleProvider } from './VehicleContext';
import VehicleList from './VehicleList';
import { createVehicleStore, makeVehicles } from './store';
import { startMockServer } from './mockServer';
import { connectVehicleSocket } from './socketClient';

const URL = 'ws://localhost:8080';

export default function App() {
  const store = useMemo(() => createVehicleStore(makeVehicles(50)), []);

  useEffect(() => {
    const mock = startMockServer(URL, store.ids, 5000);
    const ws = connectVehicleSocket(URL, store);
    return () => {
      ws.close();
      mock.stop();
    };
  }, [store]);

  return (
    <VehicleProvider store={store}>
      <div style={{ maxWidth: 480, margin: '20px auto', fontFamily: 'sans-serif' }}>
        <h2>Live Vehicles</h2>
        <VehicleList />
      </div>
    </VehicleProvider>
  );
}
