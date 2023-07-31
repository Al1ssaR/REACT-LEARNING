import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
const App = () => {

  const costs = [
    {
     date : new Date(2021,2,12),
     title : "Холодильник",
     price : 999.99

    },
    {
      date : new Date(2022,2,12),
      title : "Комп",
      price : 1999.99,
    },
    {
      date : new Date(2022,3,5),
      title : "Мобила",
      price : 599.99,
    }
  ]

  return (
    <div>
      <NewCost/>
      <Costs costs={costs} />
    </div>
  );
}

export default App;
