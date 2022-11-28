import './Costs.css';
import CostItem from "../cost-item/CostItem";
import CostsFilter from '../costs-filter/CostsFilter';
import { useState } from 'react';
import CostsDiagram from '../diagrams/costs-diagram/CostsDiagram';

function Costs(props) {

  const [selectedYear, setSelectedYear] = useState('2021');

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredCosts = props.costs.filter((cost) => {
    return cost.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div className="costs">
      <CostsFilter
        onChangeYear={yearChangeHandler}
        year={selectedYear}
      />

      <CostsDiagram
        costs={filteredCosts}
      />

      {filteredCosts.length === 0 ?
        <h2> There is no data has been found </h2>
        : filteredCosts.map((cost) =>
          <CostItem
            key={cost.id}
            date={cost.date}
            description={cost.description}
            amount={cost.amount}
          />
        )}
    </div>
  )
};

export default Costs;