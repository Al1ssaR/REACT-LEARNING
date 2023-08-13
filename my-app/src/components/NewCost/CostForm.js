import React, {useState} from "react"
import "./CostForm.css"

const CostForm = (props) =>{

    const [inputTitle, setInputTitle] = useState('')
    const [inputPrice, setInputPrice] = useState('')
    const [inputDate, setInputDate] = useState('')
    const titleChangeHandler = (event) =>{
        setInputTitle(event.target.value)
    }
    const priceChangeHandler = (event) =>{
        setInputPrice(event.target.value)
    }
    const dateChangeHandler = (event) =>{
        setInputDate(event.target.value)
    }
    const submitHandler = (event) =>{
        event.preventDefault()
        setInputTitle('')
        setInputPrice('')
        setInputDate('')
        props.onSaveCostData(costData)
    }
    const costData = {
        title:inputTitle,
        price:inputPrice,
        date:new Date(inputDate)
    }

    return <form onSubmit={submitHandler}>
        <div className="new-cost__controls">
            <div className="new-cost__control">
                <label>
                   Название 
                </label>
                {/* Двустороннее связывание value={input} onChange={ChangeHandler} */}
                <input type="text" value={inputTitle} onChange={titleChangeHandler}/>
            </div>
            <div className="new-cost__control">
                <label>
                   Сумма 
                </label>
                <input type="number" min = '0.01' step='0.01' value={inputPrice} onChange={priceChangeHandler}/>
            </div>
            <div className="new-cost__control">
                <label>
                   Дата
                </label>
                <input type="date" min = '2019-01-01' step='2023-12-31' value={inputDate} onChange={dateChangeHandler}/>
            </div>
            <div className="new-cost__actions">
                <button type="submit" >Добавить Расход</button>
                <button type="button" onClick={props.onCancel}>Отмена</button>
            </div>
        </div>
    </form>
}
export default CostForm