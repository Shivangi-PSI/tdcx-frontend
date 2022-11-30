import CustomCard from "../../common/CustomCard";

const CompletedTask = ({ completed, total }) => {
  const text = <><span className="completed_text">{completed}</span>/{total}</>
  return (
    <CustomCard title={'Task Completed'} text={text} textStyle={{ fontSize: "20px" }}/>
  );
};

export default CompletedTask;
