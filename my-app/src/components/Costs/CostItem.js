import './CostItem.css';
import CostDate from './CostDate';
import Card from '../UI/Card';
import React, {useState} from 'react';

const CostItem = (props) =>{
    const [title, setTitle] = useState(props.title)
    
    const changeTitleHandler = () =>{
        setTitle("КАМПУДАХТЕР")
    }

    

    return(
     <Card className='cost-item'>
        <CostDate date={props.date}></CostDate>
        <div className='cost-item__description'>
            <h2>{title}</h2>
            <span className='cost-item__price'>${props.price}</span>
        </div>
        <button onClick={changeTitleHandler}>Изменить Описание</button>
     </Card>
    );
}

export default CostItem;