import { BarChart as ReBarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts";

function ReportsChart({ chartData }) {
  return (
    <div>
      <h3>Revenue & Client Growth</h3>

      <ReBarChart width={600} height={300} data={chartData}>
        <CartesianGrid />
        <Bar dataKey="newClients" fill="#2563eb" yAxisId="clientsAxis" />
        <Bar dataKey="revenue" fill="#16a34a" yAxisId="revenueAxis" />
        <XAxis dataKey="month" />
        <YAxis yAxisId="clientsAxis" orientation="left" />
        <YAxis yAxisId="revenueAxis" orientation="right" />
        <Tooltip />
        <Legend />
      </ReBarChart>
    </div>
  );
}

export default ReportsChart;
