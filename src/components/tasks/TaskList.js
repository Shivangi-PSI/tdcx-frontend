import { Stack, Form, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import EditTask from "./EditTask";
import { deleteTask, updateTask } from "../../actions/task";
import TaskContext from "../../hooks/TaskContext";
import { ToastError, ToastSuccess } from "../common/Toaster";
import { useContext, useRef } from "react";

const Task = ({ task, taskId }) => {
  const { tasks, setTasks } = useContext(TaskContext);
  const completeRef = useRef(task.isCompleted);

  const taskDeleteHandler = () => {
    deleteTask(taskId, (res, msg) => {
      if (res) {
        const newTasks = { ...tasks };
        delete newTasks[taskId];
        setTasks(newTasks);
        ToastSuccess("Task is deleted successfully");
      } else{
        ToastError("Something went wrong!");
      }
    });
  };

  const handleCheckbox = () => {
    const data = {isCompleted: completeRef.current.checked}
    updateTask(data,taskId, (task, msg) => {
      if (task) {
				const newTasks = {...tasks}
				const taskId = Object.keys(task)[0]
				const taskObj = Object.values(task)[0]
				newTasks[taskId] = taskObj;
        setTasks(newTasks);
      } 
    });
  }
  return (
    <Stack style={{ alignItems: "normal", padding: "10px 0", borderBottom: "solid 1px #dddddd" }} direction="horizontal">
      
        <Form.Check type="checkbox" ref={completeRef} defaultChecked={task.isCompleted} onClick={handleCheckbox}/>
        <span style={{ textDecoration: task.isCompleted ? 'line-through' : 'none', marginLeft: '10px' }}>{task.name}</span>
      
      <EditTask id={taskId} task={task} />
      <div className="vr" style={{margin: '0 10px'}} />
      <FontAwesomeIcon icon={faTrash} onClick={taskDeleteHandler} />
    </Stack>
  );
};


const TaskList = ({ tasks }) => {
  return (
    <Container style={{padding: '2rem', background: 'whitesmoke', border: 'solid 1px whitesmoke', borderRadius: '10px'}}>
      <Form>
        {tasks &&
          Object.entries(tasks).map(([taskId, task]) => (
            <Task key={taskId} task={task} taskId={taskId} />
          ))}
      </Form>
      {!(tasks && Object.keys(tasks).length > 0) && <p>No task available</p>}
    </Container>
  );
};
export default TaskList;
