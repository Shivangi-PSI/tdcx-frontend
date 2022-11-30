import React, { useRef, useState } from "react";
import {Form, Modal} from "react-bootstrap";
import CustomButton from "../common/CustomButton";

const TaskModal = ({
  title,
  name,
  buttonText,
  show,
  handleClose,
  onSubmit,
}) => {
  const nameRef = useRef();
  const [error, setError] = useState();

  const handleSave = () => {
    const data = { name: nameRef.current.value };
    if (nameRef.current.value === "") {
      setError({ name: "can't be blank" });
    } else {
      onSubmit(data);
    }
  };

  const handleError = () => {
    if (error && error.name && nameRef.current.value != "") {
      setError(null);
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Task Name"
                autoFocus
                ref={nameRef}
                defaultValue={name}
                isInvalid={error && error.name}
                onKeyDown={handleError}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <CustomButton
            variant="secondary"
            onClick={handleClose}
            name="Close"
          />
          <CustomButton
            variant="primary"
            onClick={handleSave}
            name={buttonText}
          />
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TaskModal;
