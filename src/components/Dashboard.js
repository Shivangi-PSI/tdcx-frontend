import { useContext, useEffect, useRef, useState } from "react";
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
import CompletedTask from "./tasks/cards/CompletedTask";
import TaskChart from "./tasks/cards/TaskChart";
import LatestTask from "./tasks/cards/LatestTask";

const Dashboard = () => {
  const { tasks, setTasks } = useContext(TaskContext);
  const searchRef = useRef();
  const [completedTaskCount, setCompletedTaskCount] = useState(0);

  useEffect(() => {
    getAllTasks((tasks, msg) => {
      if (tasks.length) {
        setTasks(tasks);
      }
    });
  }, []);

  useEffect(() => {
    if (tasks.length) {
      const a = tasks.filter((e) => {
        if (e.isCompleted) return e;
      });
      setCompletedTaskCount(a.length);
    }
  }, [tasks]);

  const searchHandler = (event) => {
    if (event.key === "Enter") {
      searchTask(event.target.value, (tasks, msg) => {
        setTasks(tasks);
      });
    }
  };

  const handleClearSearch = () => {
    getAllTasks((tasks, msg) => {
      setTasks(tasks);
    });
    searchRef.current.value = "";
  };

  if (!tasks.length && !(searchRef.current && searchRef.current.value !== "")) {
    return (
      <>
        <Header />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <p>You have no Task</p>
          <NewTask />
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      {tasks && (
        <Container fluid style={{ padding: "0.5rem 2rem" }}>
          <Row>
            <Col xs={4} md={4}>
              <CompletedTask
                completed={completedTaskCount}
                total={tasks.length}
              />
            </Col>
            <Col xs={4} md={4}>
              <LatestTask tasks={tasks.slice(0,3)} />
            </Col>
            <Col xs={4} md={4}>
              <TaskChart
                completed={completedTaskCount}
                total={tasks.length}
                data={[
                  {
                    type: "Completed",
                    value: parseInt(completedTaskCount),
                    color: "#E38627",
                  },
                  {
                    type: "Incompleted",
                    value: tasks.length,
                    color: "#C13C37",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={4} md={3}>
              <h3 style={{ fontSize: "20px" }}>Tasks</h3>
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
      )}
      <TaskList tasks={tasks} />
    </>
  );
};
export default Dashboard;
