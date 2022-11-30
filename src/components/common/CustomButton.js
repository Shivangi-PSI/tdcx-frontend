import Button from "react-bootstrap/Button";

const CustomButton = ({
  variant,
  onClick,
  name,
  disabled = false,
  type = "button",
}) => {
  return (
    <Button variant={variant} onClick={onClick} type={type} disabled={disabled}>
      {name}
    </Button>
  );
};

export default CustomButton;
