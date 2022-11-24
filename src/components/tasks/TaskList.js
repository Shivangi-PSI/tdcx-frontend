import { Stack, Form, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import EditTask from "./EditTask";
import { deleteTask, updateTask } from "../../actions/task";
import TaskContext from "../../hooks/TaskContext";
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
      } else {
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
    <Stack style={{ alignItems: "normal" }} direction="horizontal">
      <div>
        <Form.Check type="checkbox" ref={completeRef} defaultChecked={task.isCompleted} onClick={handleCheckbox}/>
        <span style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}>{task.name}</span>
      </div>
      <EditTask id={taskId} task={task} />
      <div className="vr" />
      <FontAwesomeIcon icon={faTrash} onClick={taskDeleteHandler} />
    </Stack>
  );
};

const TaskList = ({ tasks }) => {
  return (
    <Container style={{ padding: "2rem" }}>
      <Form>
        {tasks &&
          Object.entries(tasks).map(([taskId, task]) => (
            <Task key={taskId} task={task} taskId={taskId} />
          ))}
      </Form>
    </Container>
  );
};
export default TaskList;
