import { BarChart as ReBarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts";

// Dual-axis bar chart comparing new client growth against revenue over time.
// Expects `chartData` as an array shaped like { month, newClients, revenue }.
function ReportsChart({ chartData }) {
  return (
    <div>
      <h3>Revenue & Client Growth</h3>

      <ReBarChart width={600} height={300} data={chartData}>
        <CartesianGrid />

        {/* Separate Y axes since newClients and revenue are on very
            different scales (clients left, revenue right). */}
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
