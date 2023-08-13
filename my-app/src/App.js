import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import React, {useState} from "react";

const INITIAL_COSTS = [
  {
   id: 'c2',
   date : new Date(2021,2,12),
   title : "Холодильник",
   price : 999.99

  },
  {
    id: 'c1',
    date : new Date(2022,2,12),
    title : "Комп",
    price : 1999.99,
  },
  {
    id: 'c3',
    date : new Date(2022,3,5),
    title : "Мобила",
    price : 599.99,
  }
]

const App = () => {

  const [costs,setCosts] = useState(INITIAL_COSTS)

  const addCostHandler = (cost) =>{
    setCosts(prevCosts =>{
      return [cost, ...prevCosts ]
    })
  }

  return (
    <div>
      <NewCost onAddCost={addCostHandler}/>
      <Costs costs={costs} />
    </div>
  );
}

export default App;
