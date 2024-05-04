import React,{ useState } from 'react';
import Header from './components/Header';
import Input from './components/Input';
import Task from './components/Task';
import './App.css';


function App() {
  const [notes,setNotes]=useState([]);
  
  //add note function
  function addNotes(note){
    setNotes(prevNotes => {
      return [...prevNotes,note]
    })
  }

  //delete note function
  function deleteNote(id){
    setNotes(prevNotes =>{
      return prevNotes.filter((item,index )=>{
        return index!=id;
      })
    })
  }

  return (
  <div className='app'>
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