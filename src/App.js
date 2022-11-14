import React, { useState } from "react";
import './index.css';
import Costs from "./components/costs-component/Costs";
import NewCost from "./components/new-cost/NewCost";
import costsList from "./components/costs-list/costs-list";

function App(props) {

  const [costs, setCosts] = useState(costsList);

  const addCostHandler = (cost) => {
    setCosts((previousCosts) => {
      return [cost, ...previousCosts]
    });
  };

  return (
    <div className="app">
      <div className='app-header'>
        <h1> Accounting App </h1>
      </div>
      <div>
        <NewCost onAddCost={addCostHandler} />
      </div>
      <Costs costs={costs} />
    </div>
  );
};

export default App;
