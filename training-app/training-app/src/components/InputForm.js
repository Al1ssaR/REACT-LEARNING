import React, {useState} from "react"
const InputForm = (props) =>{

    const [inputName, setInputName] = useState('')
    const [inputYear, setInputYear] = useState('')
    const nameChangeHandler = (event) =>{
        setInputName(event.target.value)
    }
    const yearChangeHandler = (event) =>{
        setInputYear(event.target.value)
    }
    const submitHandler = (event) =>{
        event.preventDefault()
        setInputName('')
        setInputYear('')
        props.onAddData(itemData)
    }
    
    const itemData = {
        name: inputName,
        year: inputYear
    }


    return(
        <form onSubmit={submitHandler}>
            <label>Имя пользователя</label>
            <input type="text" value={inputName} onChange={nameChangeHandler}/>
            <label>Год</label>
            <input type="number" value={inputYear} onChange={yearChangeHandler}/>
            <button type="submit">Отправить</button>
        </form>
    )

}
export default InputForm