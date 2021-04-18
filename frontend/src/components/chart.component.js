import React from "react";
import GaugeChart from "react-gauge-chart";

const Chart = (props) => {
  const data = props.data;
  const label = data.label;
  const confidence = parseFloat(data.confidence.toFixed(2));
  console.log(confidence)
  return (
    <div className="gaugechart">
      <h3 className="classification">Classification: {label}</h3>
      <GaugeChart
        id="gauge-chart3"
        nrOfLevels={3}
        colors={["#FF5F6D", "#FFC371", "rgb(26 202 26)"]}
        arcWidth={0.3}
        percent={confidence}
        textColor="black"
      />

      {label === 'fresh apple' ?
      <p className="description">Lasts 2-4 weeks if kept in a refrigerator</p>
      : label === 'rotten apple' ? <p className="description">This apple is rotten! </p>
      : <p className="description">Please point your camera at a fruit </p>} 
    </div>
  );
};
export default Chart;
