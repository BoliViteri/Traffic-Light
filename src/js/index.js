//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import TrafficLight from "./component/TrafficLight.jsx";


function App() {
    return (
      <div className="App">
        <TrafficLight initialValue={0} />
        <TrafficLight initialValue={1} />
      </div>
    );
  }

//render your react application
ReactDOM.render(<App />, document.querySelector("#app"));
