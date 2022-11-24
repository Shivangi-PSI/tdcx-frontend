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
				setTasks(tasks)
			})
    }
  };

	const handleClearSearch = () => {
		getAllTasks((tasks, msg) => {
      if (tasks) {
        setTasks(tasks);
				searchRef.current.value = ''
      }
    });
	}

  return (
    <>
		<Header/>
      <div>
        <span>Tasks</span>
        <InputGroup className="mb-3">
          <InputGroup.Text>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </InputGroup.Text>
          <Form.Control placeholder="Search here..." aria-label="Search" ref={searchRef} onKeyDown={searchHandler}/>
        </InputGroup>
        <NewTask />
				<Button variant="link" onClick={handleClearSearch}>
        Clear Search
      </Button>
      </div>
      <TaskList tasks={tasks} />
    </>
  );
};
export default Dashboard;
