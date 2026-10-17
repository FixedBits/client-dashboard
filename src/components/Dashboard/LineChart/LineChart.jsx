import { LineChart as ReLineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

import "../../../styles/dashboardCharts.css";

function LineChart({ data }) {
  const chartData = data.map((monthlyData) => ({
    month: monthlyData.month,
    revenue: monthlyData.revenue,
  }));
  return (
    <div className="line-chart-card">
      <h3>Monthly Performance</h3>
      <ReLineChart width={600} height={300} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
      </ReLineChart>
    </div>
  );
}
export default LineChart;
