import React, { useState } from 'react'
import './Costs.css'
import CostItem from '../cost-item/CostItem'
import Card from '../card/Card'
import CostFilter from '../cost-filter/CostFilter'
import costsList from '../costs-list/costs-list'

function Costs(props) {

  const [selectedYear, setSelectedYear] = useState('2022');

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filtredCosts = costsList.filter((cost) => {
    return cost.date.getFullYear.toString() === selectedYear;
  });

  return (
    <div>
      <Card className='costs'>
        <CostFilter
          year={selectedYear}
          onChangeYear={yearChangeHandler}
        />

        {props.costs.map((cost) => (
          <CostItem
            key={cost.id}
            date={cost.date}
            description={cost.description}
            amount={cost.amount}
          />
        ))}
      </Card>
    </div>
  )
};

export default Costs;
