import { useState } from "react";
import './Input.css'

function Input(props){
    const [note,setNote]=useState([""]);

    //each change in the enter todo item input area is recorded and the final input is stores in the note useState
    function handleChange(event){
        const value=event.target.value;
        setNote(value);
    }

    function handleSubmit(){
        //the final value of the note is sent back to the app.js using props
        props.onAdd(note);
        setNote("");
    }
    return(
        <div className="input-container">
            <input type="text"  onChange={handleChange} value={note}name="item" placeholder="Enter task"/> 
            <button type="submit"  onClick={handleSubmit}>Add</button>
        </div>
    )
}
export default Input;