import TaskShow from './TaskShow';

function TaskList({tasks,onDelete,onUpdate}) {
    return <div className='task-list'>
        {tasks.map((task,i)=>{
            return(
                <TaskShow key={i} task={task} onDelete={onDelete} onUpdate={onUpdate}/>
            )
        })
        }
    </div>;
}

export default TaskList;