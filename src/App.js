import { useEffect, useState } from 'react';
import './App.css';
import Task from './Task.js';
import TaskForm from './TaskForm.js'

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
    if(tasks.length === 0) return;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks])

  useEffect(()=>{  
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    setTasks(tasks);
  }, [tasks])

  function addTask(name){
    setTasks(prev => {
      return [...prev, {name:name, done:false}]
    })
  }
  return (
   <main>
    <TaskForm onAdd={addTask} />
    {tasks.map(task=>(
      <Task {...task} />
    ))}
 
   </main>
  );
}

export default App;
