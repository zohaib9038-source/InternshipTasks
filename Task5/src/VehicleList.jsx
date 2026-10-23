function StatusBadge({ status }) {
  const active = status === "active";

  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${
        active
          ? "bg-emerald-100 text-emerald-700"
          : "bg-slate-100 text-slate-600"
      }`}
    >
      {active ? "Active" : "Inactive"}
    </span>
  );
}

export default function VehicleList({ vehicles }) {
  if (vehicles.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-slate-300 px-6 py-12 text-center">
        <p className="font-medium text-slate-700">No vehicles found</p>
        <p className="mt-1 text-sm text-slate-500">Try selecting a different status.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200">
      <table className="w-full min-w-[600px] border-collapse text-left text-sm">
        <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
          <tr>
            <th className="px-5 py-3 font-semibold">Vehicle plate</th>
            <th className="px-5 py-3 font-semibold">Status</th>
            <th className="px-5 py-3 font-semibold">Last update</th>
            <th className="px-5 py-3 font-semibold">Location</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 bg-white">
          {vehicles.map((vehicle) => (
            <tr key={vehicle.plate} className="hover:bg-slate-50">
              <td className="px-5 py-4 font-semibold text-slate-800">{vehicle.plate}</td>
              <td className="px-5 py-4"><StatusBadge status={vehicle.status} /></td>
              <td className="px-5 py-4 text-slate-600">
                {new Date(vehicle.lastUpdate).toLocaleString()}
              </td>
              <td className="px-5 py-4 text-slate-600">{vehicle.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
