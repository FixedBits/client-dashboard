import { BarChart as ReBarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts";

// ReportsChart renders a dual-axis bar chart comparing new client growth
// against revenue over time. Expects `chartData` as an array of objects
// shaped like { month, newClients, revenue }.
function ReportsChart({ chartData }) {
  return (
    <div>
      <h3>Revenue & Client Growth</h3>

      <ReBarChart width={600} height={300} data={chartData}>
        <CartesianGrid />

        {/* newClients and revenue are on very different scales, so we use two
            separate Y axes (left for clients, right for revenue) instead of one
            shared axis. Each Bar must be explicitly tied to its axis via
            yAxisId, matching the id set on the corresponding YAxis below —
            otherwise recharts has no way to know which scale to plot it against. */}
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
