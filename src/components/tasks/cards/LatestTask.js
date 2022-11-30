import CustomCard from "../../common/CustomCard";

const LatestTask = ({ tasks }) => {
  const content = (
    <ul>
      {tasks.map((task) => (
        <li
          style={{
            textDecoration: task.isCompleted ? "line-through" : "none",
            color: "grey",
          }}
          key={task.id}
        >
          {task.name}
        </li>
      ))}
    </ul>
  );
  return <CustomCard title={"Latest Created Tasks"} body={content} />;
};

export default LatestTask;
