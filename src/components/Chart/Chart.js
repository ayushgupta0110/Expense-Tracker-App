import React from "react";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        <ChartBar
          id={dataPoint.label}
          value={dataPoint.value}
          maxValue={dataPoint.maxValue}
          label={dataPoint.label}
        />;
      })}
    </div>
  );
};

export default Chart;
