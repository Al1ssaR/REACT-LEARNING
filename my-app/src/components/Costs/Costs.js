import "./Costs.css"
import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import { useState } from "react";
import CostList from "./CostsList";
import CostsDiagram from "./CostsDiagram";

const Costs = (props) => {
    
    const [selectedYear,setSelectedYear] = useState('2021')

    const yearChangeHandler = (year)=>{
        setSelectedYear(year)
    }

    const filteredCosts = props.costs.filter(cost => cost.date.getFullYear() == selectedYear)
    console.log(filteredCosts)
    return(
        <div>
            <Card className="costs">
            <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
            <CostsDiagram costs={filteredCosts}/>
            <CostList costs={filteredCosts}/>
            </Card>
        </div>
    )
}
export default Costs;