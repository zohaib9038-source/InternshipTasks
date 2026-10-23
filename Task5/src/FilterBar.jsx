export default function FilterBar({ status, sort, onStatusChange, onSortChange }) {
  const selectClass =
    "mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-800 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <label className="block text-sm font-medium text-slate-700">
        Filter by status
        <select
          className={selectClass}
          value={status}
          onChange={(event) => onStatusChange(event.target.value)}
        >
          <option value="all">All statuses</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </label>

      <label className="block text-sm font-medium text-slate-700">
        Sort by
        <select
          className={selectClass}
          value={sort}
          onChange={(event) => onSortChange(event.target.value)}
        >
          <option value="plate">Plate (A–Z)</option>
          <option value="updated">Last update (newest first)</option>
        </select>
      </label>
    </div>
  );
}
