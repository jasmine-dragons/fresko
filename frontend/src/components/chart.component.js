import React from "react";
import GaugeChart from "react-gauge-chart";

const Chart = (props) => {
  const data = props.data;
  const label = data.label;
  const confidence = parseFloat(data.confidence.toFixed(2));
  console.log(confidence)
  return (
    <div>
      <h3>Classification Confidence: {label}</h3>
      <GaugeChart
        className="gaugechart"
        id="gauge-chart3"
        nrOfLevels={3}
        colors={["#FF5F6D", "#FFC371", "rgb(26 202 26)"]}
        arcWidth={0.3}
        percent={confidence}
        textColor="black"
      />

      {label === 'fresh apple' ? 
      <p>lasts 2-4 weeks if kept in a refrigerator</p> 
      : <p>this apple is rotten! </p>} 
    </div>
  );
};
export default Chart;
