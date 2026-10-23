import { describe, it, expect } from "vitest";
import { getFilterState, filterAndSortVehicles } from "./vehicleUtils";

describe("getFilterState", () => {
  it("reads filter values from the URL", () => {
    const params = new URLSearchParams("status=active&sort=plate");
    expect(getFilterState(params)).toEqual({ status: "active", sort: "plate" });
  });

  it("uses defaults when query values are missing or invalid", () => {
    expect(getFilterState(new URLSearchParams())).toEqual({
      status: "all",
      sort: "plate",
    });

    expect(getFilterState(new URLSearchParams("status=wrong&sort=wrong"))).toEqual({
      status: "all",
      sort: "plate",
    });
  });
});

describe("filterAndSortVehicles", () => {
  const vehicles = [
    { plate: "ICT-1002", status: "active", lastUpdate: "2026-10-20T10:00:00Z" },
    { plate: "ICT-1001", status: "inactive", lastUpdate: "2026-10-22T10:00:00Z" },
    { plate: "ICT-1003", status: "active", lastUpdate: "2026-10-21T10:00:00Z" },
  ];

  it("filters by status and sorts by plate", () => {
    const result = filterAndSortVehicles(vehicles, "active", "plate");
    expect(result.map((vehicle) => vehicle.plate)).toEqual(["ICT-1002", "ICT-1003"]);
  });

  it("sorts all vehicles by plate", () => {
    const result = filterAndSortVehicles(vehicles, "all", "plate");
    expect(result.map((vehicle) => vehicle.plate)).toEqual([
      "ICT-1001",
      "ICT-1002",
      "ICT-1003",
    ]);
  });

  it("sorts latest update first", () => {
    const result = filterAndSortVehicles(vehicles, "all", "updated");
    expect(result.map((vehicle) => vehicle.plate)).toEqual([
      "ICT-1001",
      "ICT-1003",
      "ICT-1002",
    ]);
  });

  it("does not change the original array order", () => {
    filterAndSortVehicles(vehicles, "all", "plate");
    expect(vehicles[0].plate).toBe("ICT-1002");
  });
});
