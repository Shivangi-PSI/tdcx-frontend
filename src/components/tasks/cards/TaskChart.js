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
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
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
