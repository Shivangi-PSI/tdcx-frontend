import { useContext, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import TaskContext from "../../../hooks/TaskContext";

const CompletedTask = ({completed, total}) => {
  // const [completedTaskCount, setCompletedTaskCount] = useState();
  // const { tasks } = useContext(TaskContext);

  // useEffect(() => {
  //   if (tasks) {
  //     const a = Object.entries(tasks).filter((e) => {
  //       if (e[1].isCompleted) return { [e[0]]: e[1] };
  //     });
  //     setCompletedTaskCount(a.length)
  //   }
  // }, [tasks]);
  return (
    <Card className="task-card">
      <Card.Body>
        <Card.Title>Task Completed</Card.Title>
        <Card.Text>{completed}/{total}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CompletedTask;
