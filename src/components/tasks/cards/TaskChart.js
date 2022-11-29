import Card from "react-bootstrap/Card";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

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

  return (
    <Card className="task-card">
      <Card.Body>
        <div >
          <Pie data={data} options={options}  height={'115px'} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default TaskChart;
