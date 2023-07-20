import './CostItem.css';

function CostItem(){

    const costDate = new Date(2021,2,12);
    const costTitle = "Холодильник";
    const costPrice = 999.99;

    return(
     <div className='cost-item'>
        <span>{costDate.toISOString()}</span>
        <div className='cost-item__description'>
            <h2>{costTitle}</h2>
            <span className='cost-item__price'>${costPrice}</span>
        </div>
     </div>
    );
}

export default CostItem;