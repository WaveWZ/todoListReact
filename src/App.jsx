import './App.css';
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';
import { useState } from 'react'; 

function App() {
  const [tasks, setTasks] = useState([]);

  const createTask = (title,taskDesc) => {
    const createdTasks=[
      ...tasks,{
        id:Math.round(Math.random()*999999),
        title:title,
        taskDesc:taskDesc
      }
    ];
    setTasks(createdTasks);
  };

  const deleteTaskById = (id) =>{
    const afterDeletingTasks = tasks.filter((task)=>{
      return task.id !==id;
    })
    setTasks(updatedTasks);
  };
  const editTaskById = (id,updatedTitle,updatedTaskDesc) => {
    const updatedTasks = tasks.map((task) => {
      if(task.id === id){
        return{id,title:updatedTitle,taskDesc:updatedTaskDesc}
      }
      return task;
    });
    setTasks(afterDeletingTasks);
  }
  return (
      <div className="App">
        <TaskCreate onCreate={createTask}/> {/* Buradan inputlara girilen verileri alıyoruz, title ve taskDesc olarak. Bu props onları içeriyor. */}
        <h1>Missions</h1>
        <TaskList tasks={tasks} onDelete={deleteTaskById} onUpdate={editTaskById}/> {/*Burada inputlara girilen verileri alıp ekrana basacağız.*/}
      </div>
  )
}

export default App;
