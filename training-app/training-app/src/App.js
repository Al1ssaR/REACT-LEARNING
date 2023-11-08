import InputForm from "./components/InputForm";
import DataDesk from "./components/DataDesk/DataDesk";
import React,{useState} from "react";

const INITIAL_DATA = [
  {
    name:"Алеша",
    year:"12"
  },
  {
    name:"Алексей",
    year:"1232"
  }
]

const App = () => {
  const [data,setData] = useState(INITIAL_DATA)
  const addDataHandler = (item) =>{
    setData(prevData =>{
      return [item, ...prevData ]
    })
  }

  return (
    <div>
      <InputForm onAddData={addDataHandler}/>
      <DataDesk data={data}/>
    </div>
  )
};

export default App;
