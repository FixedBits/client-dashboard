import { LineChart as ReLineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { PiUsersThreeFill } from "react-icons/pi";

function LineChart({ data }) {
  // Convert your simple values array → chart‑friendly objects
  const chartData = data.values.map((value, index) => ({
    value,
    index,
  }));
  return (
    <div className="line-chart-card">
      <PiUsersThreeFill />
      <h3>{data.label}</h3>
      <p className="line-chart-values"> {data.values.join(", ")} </p>
      <ReLineChart width={500} height={300} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="index" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </ReLineChart>
    </div>
  );
}
export default LineChart;
