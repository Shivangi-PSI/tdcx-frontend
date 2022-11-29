import { useContext, useEffect, useRef, useState } from "react";
import { Form, Button, InputGroup, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { getAllTasks, searchTask } from "../actions/task";
import TaskContext from "../hooks/TaskContext";
import TaskList from "./tasks/TaskList";
import NewTask from "./tasks/NewTask";
import Header from "./common/Header";
import CompletedTask from "./tasks/cards/CompletedTask";
import TaskChart from "./tasks/cards/TaskChart";
import LatestTask from "./tasks/cards/LatestTask";
import "./Dashboard.scss";

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
          className="no_task"
        >
          <div
            style={{
              padding: "20px",
              border: "solid 1px #dddddd",
              borderRadius: "10px",
              background: "white",
            }}
          >
            <p>You have no Task</p>
            <NewTask />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      {tasks && (
        <Container fluid>
          <div className="cards_container">
            <CompletedTask
              completed={completedTaskCount}
              total={tasks.length}
            />
            <LatestTask tasks={tasks.slice(0, 3)} />
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
          </div>
          <div className="toolbar_container">
            <h3 className="task-heading" style={{ fontSize: "20px" }}>
              Tasks
            </h3>
            <div className="detail">
              <InputGroup>
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
              <div className="btn_box">
                <NewTask />
                <Button variant="link" onClick={handleClearSearch}>
                  Clear Search
                </Button>
              </div>
            </div>
          </div>
          <TaskList tasks={tasks} />
        </Container>
      )}
    </>
  );
};
export default Dashboard;
