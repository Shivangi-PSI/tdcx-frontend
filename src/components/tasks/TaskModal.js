import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const TaskModal = ({title, name, buttonText, show, handleClose, onSubmit}) => {
  const nameRef = useRef();
  const [error, setError] = useState();

  const handleSave = () => {
    const data = { name: nameRef.current.value };
    if(nameRef.current.value === ''){
      setError({name: "can't be blank"})
    }else{
      onSubmit(data);
    }
  };

  const handleError = () => {
    if(error && error.name && nameRef.current.value != ''){
      setError(null)
    }
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
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
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            {buttonText}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TaskModal;
