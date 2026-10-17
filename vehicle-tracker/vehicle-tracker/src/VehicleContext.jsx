import { createContext, useContext, useSyncExternalStore } from 'react';

// The context value is the STORE (a stable object), not the data.
// So the context value never changes -> consumers are not re-rendered by Context.
const VehicleContext = createContext(null);

export function VehicleProvider({ store, children }) {
  return <VehicleContext.Provider value={store}>{children}</VehicleContext.Provider>;
}

export function useVehicleStore() {
  const store = useContext(VehicleContext);
  if (!store) throw new Error('useVehicleStore must be used inside VehicleProvider');
  return store;
}

// Subscribe to ONE vehicle slice only.
export function useVehicle(id) {
  const store = useVehicleStore();
  return useSyncExternalStore(store.subscribe, () => store.getVehicle(id));
}
