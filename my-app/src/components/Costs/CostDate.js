import "./CostDate.css"

const CostDate = (props) =>{
    return(
        <div className='cost-date'>
            <span className="cost-date__month">
                {props.date.toLocaleString('ru-RU', {month: 'long'})}
                </span>
            <span className="cost-date__year">
                {props.date.getFullYear()}
                </span>
            <span className="cost-date__day">
                {props.date.toLocaleString('ru-RU', {day: '2-digit'})}
            </span>
        </div>
    )
}

export default CostDate;