import { useContext, useEffect, useRef } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import TaskContext from "../hooks/TaskContext";
import TaskList from "./tasks/TaskList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { getAllTasks, searchTask } from "../actions/task";
import NewTask from "./tasks/NewTask";
import Header from "./common/Header";
import { Col, Container, Row } from "react-bootstrap";

const Dashboard = () => {
  const { tasks, setTasks } = useContext(TaskContext);
  const searchRef = useRef();

  useEffect(() => {
    getAllTasks((tasks, msg) => {
      if (tasks) {
        setTasks(tasks);
      }
    });
  }, []);

  const searchHandler = (event) => {
    if (event.key === "Enter") {
      searchTask(event.target.value, (tasks, msg) => {
        setTasks(tasks);
      });
    }
  };

  const handleClearSearch = () => {
    getAllTasks((tasks, msg) => {
      if (tasks) {
        setTasks(tasks);
        searchRef.current.value = "";
      }
    });
  };

  if (!tasks) {
    return (
      <>
        <Header />
				<div style={{ display:'flex', alignItems: 'center', flexDirection: 'column' }}>
        <p >You have no Task</p>
        <NewTask />
      </div>
			</>
    );
  }

  return (
    <>
      <Header />
      <Container fluid style={{padding: '0.5rem 2rem'}}>
        <Row>
          <Col xs={4} md={3}>
            <h3 style={{fontSize: '20px'}}>Tasks</h3>
          </Col>
          <Col xs={8} md={5}>
            <InputGroup className="mb-3">
              <InputGroup.Text>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </InputGroup.Text>
              <Form.Control
                placeholder="Search here..."
                aria-label="Search"
                ref={searchRef}
                onKeyDown={searchHandler}
              />
            </InputGroup>
          </Col>
          <Col
            md={4}
            style={{ width: "250px", padding: 0, marginLeft: "auto" }}
          >
            <NewTask />
            <Button variant="link" onClick={handleClearSearch}>
              Clear Search
            </Button>
          </Col>
        </Row>
      </Container>
      <TaskList tasks={tasks} />
    </>
  );
};
export default Dashboard;
