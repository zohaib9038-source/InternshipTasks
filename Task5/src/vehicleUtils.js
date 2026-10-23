export function getFilterState(searchParams) {
  const status = searchParams.get("status");
  const sort = searchParams.get("sort");

  return {
    status: ["all", "active", "inactive"].includes(status) ? status : "all",
    sort: ["plate", "updated"].includes(sort) ? sort : "plate",
  };
}

export function filterAndSortVehicles(vehicles, status, sort) {
  // Filter the vehicles first.
  let result = vehicles.filter((vehicle) => {
    return status === "all" || vehicle.status === status;
  });

  // Sort a copy so the original array stays unchanged.
  result = [...result];

  if (sort === "plate") {
    result.sort((a, b) => a.plate.localeCompare(b.plate));
  } else if (sort === "updated") {
    // Newest date comes first.
    result.sort(
      (a, b) => new Date(b.lastUpdate).getTime() - new Date(a.lastUpdate).getTime()
    );
  }

  return result;
}
