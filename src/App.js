import React,{ useState } from 'react';
import Header from './components/Header';
import Input from './components/Input';
import Task from './components/Task';
function App() {
  const [notes,setNotes]=useState([]);
  
  function addNotes(note){
    setNotes(prevNotes => {
      return [...prevNotes,note]
    })
  }

  function deleteNote(id){
    setNotes(prevNotes =>{
      return prevNotes.filter((item,index )=>{
        return index!=id;
      })
    })
  }

  return (
  <div>
    <Header />
    <Input onAdd={addNotes}/>
    <div className="listItems">
     { notes.map((item,index) => {
        return (<Task 
        key={index}
        id={index}
        taskItem={item}
        onDelete={deleteNote}
        />)
      })}
    </div>
    </div>
  );
}

export default App;