import { LineChart as ReLineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { PiUsersThreeFill } from "react-icons/pi";

function LineChart({ data }) {
  // Convert your simple values array → chart‑friendly objects
  const chartData = data.values.map((value, index) => ({
    index,
    value,
  }));
  return (
    <div className="line-chart-card">
      <PiUsersThreeFill />
      <h3>{data.label}</h3>
      <p className="line-chart-values"> {data.values}</p>
    </div>
  );
}
export default LineChart;
