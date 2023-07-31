import React, {useState} from "react"
import "./CostForm.css"

const CostForm = () =>{

    const [inputName, setInputName] = useState('')
    const [inputPrice, setInputPrice] = useState('')
    const [inputDate, setInputDate] = useState('')
    const nameChangeHandler = (event) =>{
        setInputName(event.target.value)
    }
    const priceChangeHandler = (event) =>{
        setInputPrice(event.target.value)
    }
    const dateChangeHandler = (event) =>{
        setInputDate(event.target.value)
    }
    const submitHandler = (event) =>{
        event.preventDefault()
        setInputName('')
        setInputPrice('')
        setInputDate('')
        console.log(CostData)

    }
    const CostData = {
        name:inputName,
        price:inputPrice,
        date:new Date(inputPrice)
    }

    return <form onSubmit={submitHandler}>
        <div className="new-cost__controls">
            <div className="new-cost__control">
                <label>
                   Название 
                </label>
                {/* Двустороннее связывание value={input} onChange={ChangeHandler} */}
                <input type="text" value={inputName} onChange={nameChangeHandler}/>
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
                <button type="submit">Добавить Расход</button>
            </div>
        </div>
    </form>
}
export default CostForm