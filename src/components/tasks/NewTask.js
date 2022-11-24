import React, { useContext, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import { createTask } from "../../actions/task";
import TaskContext from "../../hooks/TaskContext";
import TaskModal from "./TaskModal";

const NewTask = () => {
  const [show, setShow] = useState(false);
	const {tasks, setTasks} = useContext(TaskContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSave = (data) => {
    createTask(data, (task, msg) => {
      if (task) {
        setTasks( {...tasks, ...task});
      } 
			handleClose();
    });
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        + New Task
      </Button>
			<TaskModal show={show} handleClose={handleClose} title='+ New Task' buttonText='Add' onSubmit={(data) => handleSave(data)}/>
    </>
  );
};

export default NewTask;
