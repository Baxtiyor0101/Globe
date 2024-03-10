import React from "react";
import Globe from "./components/Globe";
import Part from "./components/Part";
import { data } from "./utils/items";
import up from "./assets/up.png";
import graph from "./assets/graph.svg";
// console.log(data);

function App() {
  return (
    <div className="container">
      <div className="contain">
        <Part
          data={{
            id: 1,
            img: up,
            title: "Uptime",
            info: "Uptime over the past 24 hours",
            position: { graph },
            percent: "97.83%",
          }}
        />
        <div className="topcontent">
          <div className="list">
            <h3 className="titles">Waxpeer online & status</h3>
            <div>
              <div className="infos">
                <h2>12698</h2>
                <p>extension</p>
              </div>
              <div className="hrr"></div>
              <div className="infos">
                <h2>5898</h2>
                <p>desktop</p>
              </div>
              <div className="hrr"></div>

              <div className="infos">
                <h2>25697</h2>
                <p>mobile</p>
              </div>
            </div>
          </div>
          <Globe />
        </div>
        <Part
          data={{
            id: 1,
            img: up,
            title: "Current date",
            info: "Current date and time",
            percent: "08.06.2022",
            position: {},
            date: "19:55:20",
          }}
        />
      </div>
      <div className="wraper">
        {data.map((val) => (
          <Part key={val.id} data={val} />
        ))}
      </div>

    </div>
  );
}

export default App;
