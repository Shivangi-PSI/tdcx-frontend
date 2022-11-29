import Card from "react-bootstrap/Card";

const LatestTask = ({ tasks }) => {
  return (
    <Card className="task-card" >
      <Card.Body>
        <Card.Title>Latest Created Tasks</Card.Title>
        <ul>
          {tasks.map((task) => (
            <li
              style={{
                textDecoration: task.isCompleted ? "line-through" : "none",
								color: "grey"
              }}
							key={task.id}
            >
              {task.name}
            </li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
};

export default LatestTask;
