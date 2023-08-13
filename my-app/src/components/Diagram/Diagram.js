import DiagramBar from "./DiagramBar"
import "./Diagram.css"
const Diagram = (props) =>{
    const valueSets = props.dataSets.map(dataSet => dataSet.value)
    const maxMonthCosts = Math.max(...valueSets)
    console.log(maxMonthCosts)
    return(
        <div className="diagram">
            {props.dataSets.map(dataSet => 
            <DiagramBar 
                key = {dataSet.label}
                maxValue={maxMonthCosts} 
                value={dataSet.value} 
                label={dataSet.label}
            />)}
        </div>
    )
}   
export default Diagram