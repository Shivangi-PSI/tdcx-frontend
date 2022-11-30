import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import CustomCard from "../../common/CustomCard";

ChartJS.register(ArcElement, Tooltip, Legend);

const TaskChart = ({ completed, total }) => {
  const data = {
    labels: ["Completed Task", "Incompleted Task"],
    datasets: [
      {
        label: "# Count",
        data: [completed, total - completed],
        backgroundColor: ["rgba(82, 133, 236, 1)", "rgba(232, 236, 236, 1)"],
        borderColor: ["rgba(82, 133, 236, 1)", "rgba(232, 236, 236, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
  };
  const content = (
    <div>
      <Pie data={data} options={options} height={"115px"} />
    </div>
  );
  return <CustomCard body={content} />;
};

export default TaskChart;
