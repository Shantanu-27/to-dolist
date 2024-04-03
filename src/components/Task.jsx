import { UilTrashAlt } from '@iconscout/react-unicons'
import { useState } from 'react';
function Task(props){
    const [isClicked,setClicked]=useState(false);
    const [customStyle,setStyle]=useState({
        textDecoration:'default',
    });

    function changeClicked(){
        if(isClicked==false){
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
            <UilTrashAlt onClick={handleDelete} className='trash'/>
        </div>
    );
}
export default  Task;