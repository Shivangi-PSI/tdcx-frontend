import Card from "react-bootstrap/Card";

const CompletedTask = ({ completed, total }) => {
  return (
    <Card className="task-card">
      <Card.Body>
        <Card.Title>Task Completed</Card.Title>
        <Card.Text style={{ fontSize: "20px" }}>
          <span className="completed_text">{completed}</span>/{total}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CompletedTask;
