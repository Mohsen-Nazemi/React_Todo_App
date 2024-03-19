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


  function updateTaskDone(taskIndex, newDone){
    setTasks(prev => {
      const newTasks = [...prev];
      newTasks[taskIndex].done = newDone;
      return newTasks;
    })
  }


  return (
   <main>
    <TaskForm onAdd={addTask} />
    {tasks.map((task, index)=>(
      <Task {...task} 
      onToggle={done => updateTaskDone(index, done) } />
    ))}
 
   </main>
  );
}

export default App;
