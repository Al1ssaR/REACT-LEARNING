import CostItem from "./CostItem"
import "./Costs.css"
import Card from "../UI/Card";

const Costs = (props) => {
    
    return(
        <Card className="costs">
        <CostItem date={props.costs[0].date} title={props.costs[0].title} price={props.costs[0].price}></CostItem>
        <CostItem date={props.costs[1].date} title={props.costs[1].title} price={props.costs[1].price}></CostItem>
        <CostItem date={props.costs[2].date} title={props.costs[2].title} price={props.costs[2].price}></CostItem>
        </Card>
    )
}
export default Costs;