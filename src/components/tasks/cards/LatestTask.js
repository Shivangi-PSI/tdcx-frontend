import Card from "react-bootstrap/Card";

const LatestTask = ({ tasks }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Latest Created Tasks</Card.Title>
        <ul>
          {tasks.map((task) => (
            <li
              style={{
                textDecoration: task.isCompleted ? "line-through" : "none",
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
