import { useContext, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import TaskContext from "../../../hooks/TaskContext";
import { PieChart } from "react-minimal-pie-chart";
import CanvasJSReact from "./canvasjs.react";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const TaskChart = ({ completed, total }) => {
  const options = {
    data: [
      {
        type: "pie",
        startAngle: 75,
        toolTipContent: "<b>{label}</b>: {y}%",
        // showInLegend: "true",
        legendText: "{label}",
        indexLabelFontSize: 8,
        indexLabel: "{label} - {y}%",
        dataPoints: [
          { y: Math.round((completed / total) * 100), label: "Completed" },
          {
            y: Math.round(((total - completed) / total) * 100),
            label: "Incompleted",
          },
        ],
      },
    ],
    responsive: true,
  };

  return (
    <Card className="task-card">
      <Card.Body>
        {/* <Card.Title>LatestTask</Card.Title> */}
        {/* <Card.Text> */}
        <div style={{ height: "100px", width: "200px" }}>
          {/* <CanvasJSChart
            options={options}
          /> */}
        </div>
        {/* </Card.Text> */}
      </Card.Body>
    </Card>
  );
};

export default TaskChart;
