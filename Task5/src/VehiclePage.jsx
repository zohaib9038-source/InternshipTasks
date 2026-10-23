import { useSearchParams } from "react-router-dom";
import FilterBar from "./FilterBar";
import VehicleList from "./VehicleList";
import { filterAndSortVehicles, getFilterState } from "./vehicleUtils";

export default function VehiclePage({ vehicles }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { status, sort } = getFilterState(searchParams);

  function updateFilters(newStatus, newSort) {
    setSearchParams({ status: newStatus, sort: newSort });
  }

  const displayedVehicles = filterAndSortVehicles(vehicles, status, sort);

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-7">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
            Fleet management
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Vehicle tracker
          </h1>
          <p className="mt-2 text-slate-600">
            Filter vehicles by status and sort them by plate or latest update.
          </p>
        </header>

        <section className="mb-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <FilterBar
            status={status}
            sort={sort}
            onStatusChange={(newStatus) => updateFilters(newStatus, sort)}
            onSortChange={(newSort) => updateFilters(status, newSort)}
          />
          <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 pt-4">
            <p className="text-sm text-slate-500">
              Showing <span className="font-semibold text-slate-800">{displayedVehicles.length}</span> vehicles
            </p>
            <p className="break-all text-xs text-slate-400">
              URL state: ?status={status}&amp;sort={sort}
            </p>
          </div>
        </section>

        <VehicleList vehicles={displayedVehicles} />
        <p className="mt-5 text-xs text-slate-500">
          Filter choices are saved in the URL, so you can refresh or share this view.
        </p>
      </div>
    </main>
  );
}
