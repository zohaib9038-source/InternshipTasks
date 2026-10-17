import { memo, Profiler } from 'react';
import { useVehicle } from './VehicleContext';
import { onRender } from './profilerLog';

function VehicleRow({ id }) {
  const v = useVehicle(id);
  return (
    <Profiler id={`row-${id}`} onRender={onRender}>
      <li data-testid={`row-${id}`} style={{ padding: 8, borderBottom: '1px solid #ddd' }}>
        <strong>{v.name}</strong>{' '}
        <span data-testid={`coords-${id}`}>
          {v.lat.toFixed(5)}, {v.lng.toFixed(5)}
        </span>
      </li>
    </Profiler>
  );
}

export default memo(VehicleRow);
