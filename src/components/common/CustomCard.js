import Card from "react-bootstrap/Card";

const CustomCard = ({ title = null, textStyle = {}, body, text = null }) => {
  return (
    <Card className="task-card">
      <Card.Body>
        {title && <Card.Title>{title}</Card.Title>}
        {text && <Card.Text style={textStyle}>{text}</Card.Text>}
        {body}
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
