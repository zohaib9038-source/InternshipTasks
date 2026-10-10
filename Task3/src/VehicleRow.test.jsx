
import { describe, it, expect, afterEach } from "vitest";
import {
  render,
  screen,
  cleanup,
} from "@testing-library/react";

import VehicleRow from "./components/VehicleRow";
import { vehicles } from "../public/Vehicles";

afterEach(() => {
  cleanup();
});

describe("VehicleRow", () => {
  it("renders the first vehicle", () => {
    render(
      <VehicleRow
        index={0}
        style={{}}
        vehicles={vehicles}
      />
    );

    expect(screen.getByText("ICT-1000"))
      .toBeInTheDocument();
  });

  it("renders the last vehicle", () => {
    render(
      <VehicleRow
        index={vehicles.length - 1}
        style={{}}
        vehicles={vehicles}
      />
    );

    expect(screen.getByText("ICT-1399"))
      .toBeInTheDocument();
  });

  it("renders the first vehicle's status", () => {
    render(
      <VehicleRow
        index={0}
        style={{}}
        vehicles={vehicles}
      />
    );

    expect(screen.getByText("Active"))
      .toBeInTheDocument();
  });
});
