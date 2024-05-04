import { UilTrashAlt } from '@iconscout/react-unicons'
import { useState } from 'react';
import './Task.css';

function Task(props){
    //use state is used to keep a log and change the state of the check input to mark the task completed
    const [isClicked,setClicked]=useState(false);
    const [customStyle,setStyle]=useState({
        textDecoration:'default',
    });

    function changeClicked(){
        if(isClicked===false){
            setClicked(true);
            setStyle({textDecoration:'line-through'});
        }else{
            setClicked(false);
            setStyle({textDecoration: 'none'});
        }
    }

    function handleDelete(){
        props.onDelete(props.id);
    }
    return (
        <div className="task">
            <input type="checkbox" onClick={changeClicked} value={isClicked} className="check"/>
            <p style={customStyle}>{props.taskItem}</p>
            <UilTrashAlt className='delete' onClick={handleDelete}/>
        </div>
    );
}
export default  Task;