import React from "react";
import { Clock } from "digital-clock-react";
import { myTimestamp } from "./consts";

function App() {
  return (
    <div className="app-container">
      <Clock
        isMode24H
        size="small"
        useInterval={false}
        timestamp={myTimestamp}
      />
    </div>
  );
}

export default App;