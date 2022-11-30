import React, { useContext, useRef, useState } from "react";
import { createTask } from "../../actions/task";
import TaskContext from "../../hooks/TaskContext";
import CustomButton from "../common/CustomButton";
import { ToastError, ToastSuccess } from "../common/Toaster";
import TaskModal from "./TaskModal";

const NewTask = () => {
  const [show, setShow] = useState(false);
	const {tasks, setTasks} = useContext(TaskContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSave = (data) => {
    createTask(data, (task, msg) => {
      if (task) {
        setTasks( [task, ...tasks]);
        ToastSuccess(msg);
      } else{
        ToastError(msg);
      }
			handleClose();
    });
  };
  return (
    <>
      <CustomButton variant="primary" onClick={handleShow} name="+ New Task"/>
			<TaskModal show={show} handleClose={handleClose} title='+ New Task' buttonText='Add' onSubmit={(data) => handleSave(data)}/>
    </>
  );
};

export default NewTask;
