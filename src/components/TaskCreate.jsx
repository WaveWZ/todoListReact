import { useState } from "react";

function TaskCreate({ onCreate,task, taskformUpdate,onUpdate }) {
    const[title, setTitle] = useState(task ? task.title : '');
    const[taskDesc,setTaskDesc] = useState(task ? task.taskDesc : '');


    const handleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleTaskChange = (e) => {
        setTaskDesc(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(taskformUpdate){
            onUpdate(task.id,title,taskDesc);
        }
        else{
            onCreate(title,taskDesc);
        }
        onCreate(title,taskDesc);
        setTitle("");
        setTaskDesc("");
    }
    
    return(
    <div>
     {taskformUpdate ? 
          <div className="task-update">
          <h3>Please add Task!</h3>
          <form className="task-form">
              <label className="task-label">Update Header</label>
              <input value={title} onChange={handleChange} className="task-input" />
              <label className="task-label">Update Task</label>
              <textarea value={taskDesc} onChange={handleTaskChange} className="task-input" rows={5}/>
              <button className="task-button update-button" onClick={handleSubmit}>Create</button>
          </form>
      </div>:
           <div className="task-create ">
           <h3>Please add Task!</h3>
           <form className="task-form">
               <label className="task-label">Header</label>
               <input value={title} onChange={handleChange} className="task-input" />
               <label className="task-label">Task</label>
               <textarea value={taskDesc} onChange={handleTaskChange} className="task-input" rows={5}/>
               <button className="task-button" onClick={handleSubmit}>Create</button>
           </form>
       </div>}   
    </div>
    
    
    
    );
}

export default TaskCreate;