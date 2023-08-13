import CostItem from "./CostItem"
import "./CostList.css"
const CostList = (props) =>{
    console.log(props.costs)
    if (props.costs.length === 0) return <h2 className="cost-list__fallback">В этом году расходов нет</h2>

        return (
            <ul className="cost-list">{
                props.costs.map((cost) => {
                    return(
                        <CostItem 
                        key={cost.id}
                        date={cost.date}
                        title={cost.title} 
                        price={cost.price}/>
                    )
                })
            }
            </ul>
        )
    
}

export default CostList