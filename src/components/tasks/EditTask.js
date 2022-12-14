import React, { useContext, useRef, useState } from "react";
import { updateTask } from "../../actions/task";
import TaskContext from "../../hooks/TaskContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil} from "@fortawesome/free-solid-svg-icons";
import { ToastError, ToastSuccess } from "../common/Toaster";
import TaskModal from "./TaskModal";

const EditTask = ({id, task, resetSearchTask}) => {
  const [show, setShow] = useState(false);
	const {tasks, setTasks} = useContext(TaskContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSave = (data) => {
    updateTask(data,id, (task, msg) => {
      if (task) {
				const newTasks = [...tasks]
        const taskIndex = newTasks.findIndex(t => t.id === task.id);
				newTasks[taskIndex] = task;
        setTasks(newTasks);
        resetSearchTask();
        ToastSuccess(msg);
      } else{
        ToastError(msg);
      }
			handleClose();
    });
  };

  return (
    <>
      <FontAwesomeIcon className="ms-auto" icon={faPencil} onClick={handleShow}/>
			<TaskModal show={show} handleClose={handleClose} title='Edit Task' buttonText='Edit' name={task.name} onSubmit={(data) => handleSave(data)}/>
    </>
  );
};

export default EditTask;
