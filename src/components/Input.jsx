import { useState } from "react";

function Input(props){
    const [note,setNote]=useState([""]);

    function handleChange(event){
        const value=event.target.value;
        setNote(value);
    }

    function handleSubmit(){
        props.onAdd(note);
        setNote("");
    }
    return(
        <div className="input-container">
            <input type="text" onChange={handleChange} value={note}name="item" placeholder="Enter"/> 
            <button type="submit" onClick={handleSubmit}>Add</button>
        </div>
    )
}
export default Input;