import DeskItem from "./DeskItem"

const DataDesk = (props) =>{
    return(
        <ul >{
            props.data.map((item) => {

                return(
                    <DeskItem 
                    key={item.id}
                    year={item.year}
                    name={item.name}/>
                )
            })
        }
        </ul>
    )
}
export default DataDesk