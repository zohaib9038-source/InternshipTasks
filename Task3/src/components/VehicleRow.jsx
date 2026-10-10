export default function VehicleRow({
  index,
  style,
  vehicles,
}) {
  const vehicle = vehicles[index];

  return (
    <div className="vehicle-row" style={style}>
      <span>{vehicle.id}</span>
      <span>{vehicle.plate}</span>
      <span>{vehicle.status}</span>
      <span>{vehicle.position}</span>
    </div>
  );
}