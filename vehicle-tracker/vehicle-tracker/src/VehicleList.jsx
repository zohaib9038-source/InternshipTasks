import { useState } from 'react';
import { useVehicleStore } from './VehicleContext';
import VehicleRow from './VehicleRow';

export default function VehicleList() {
  const store = useVehicleStore();
  const [filter, setFilter] = useState('');

  // Filter on the static name (ids/names never change), so this component
  // does not subscribe to coordinates and never re-renders on socket messages.
  const visibleIds = store.ids.filter((id) =>
    store.getVehicle(id).name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <input
        placeholder="Filter vehicles..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{ width: '100%', padding: 8, marginBottom: 8 }}
      />
      <ul
        data-testid="list"
        style={{ height: 400, overflowY: 'auto', margin: 0, padding: 0, listStyle: 'none', border: '1px solid #ccc' }}
      >
        {visibleIds.map((id) => (
          <VehicleRow key={id} id={id} />
        ))}
      </ul>
    </div>
  );
}
