import './Costs.css';
import CostItem from "../cost-item/CostItem";
import costsList from "../costs-list/costs-list";
import CostsFilter from '../costs-filter/CostsFilter';
import { useState } from 'react';

function Costs(props) {

  const [selectedYear, setSelectedYear] = useState('2022');
  const yearChangeHandler = (year) => {
    setSelectedYear(year)
  };

  return (
    <div className="costs">
      <CostsFilter
        onChangeYear={yearChangeHandler}
        year={selectedYear}
      />
      {costsList.map((cost) =>
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