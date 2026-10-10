import { List } from "react-window";
import { vehicles } from "../public/Vehicles";
import VehicleRow from "./components/VehicleRow";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Vehicle Dashboard</h1>

      <div className="vehicle-header">
        <span>ID</span>
        <span>Plate</span>
        <span>Status</span>
        <span>Position</span>
      </div>

      <List
        rowComponent={VehicleRow}
        rowCount={vehicles.length}
        rowHeight={50}
        rowProps={{ vehicles }}
        style={{
          height: 400,
          width: "100%",
        }}
      />
    </div>
  );
}

export default App;