import './CostItem.css';
import CostDate from './CostDate';
import Card from '../UI/Card';

const CostItem = (props) =>{
   

    return(
     <Card className='cost-item'>
        <CostDate date={props.date}></CostDate>
        <div className='cost-item__description'>
            <h2>{props.title}</h2>
            <span className='cost-item__price'>${props.price}</span>
        </div>
     </Card>
    );
}

export default CostItem;