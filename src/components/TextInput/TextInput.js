
import "./TextInput.css"

const TextInput = (props) => {

    const changeValue = (e) =>{
        props.changeValor(e.target.value)
    }
    return <div className="text_input">
        <label>{props.label}</label>
        <input placeholder = 
        {props.placeholder} 
        required = {props.required} 
        value={props.valor} 
        onChange={changeValue}></input>
    </div>
}

export default TextInput