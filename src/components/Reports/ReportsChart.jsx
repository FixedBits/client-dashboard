import { BarChart as ReBarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts";

// Dual-axis bar chart comparing new client growth against revenue over time.
// Expects `chartData` as an array shaped like { month, newClients, revenue }.
function ReportsChart({ chartData }) {
  return (
    <div>
      <h3>Revenue & Client Growth</h3>

      <ReBarChart width={600} height={300} data={chartData}>
        <CartesianGrid />

        {/* newClients and revenue are on very different scales, so each Bar
    is tied to its own YAxis via yAxisId (left for clients, right for
    revenue) rather than sharing one axis. */}
        <Bar dataKey="newClients" fill="#2563eb" yAxisId="clientsAxis" name="New Clients" />
        <Bar dataKey="revenue" fill="#16a34a" yAxisId="revenueAxis" name="Revenue" />
        <XAxis dataKey="month" />
        <YAxis yAxisId="clientsAxis" orientation="left" domain={[0, "dataMax + 4"]} />
        <YAxis yAxisId="revenueAxis" orientation="right" domain={[0, "dataMax + 1000"]} />
        <Tooltip />
        <Legend />
      </ReBarChart>
    </div>
  );
}

export default ReportsChart;
