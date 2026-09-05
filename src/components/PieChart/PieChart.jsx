import { PieChart as RePieChart, Pie, Tooltip, Legend, Sector } from "recharts";

function PieChart({ data }) {
  // Chart-friendly objects from the converted/notConverted values
  const chartData = [
    { name: "Converted", value: data.converted },
    { name: "Not Converted", value: data.notConverted },
  ];

  const COLORS = ["#4CAF50", "#F44336"];

  return (
    <div className="pie-chart">
      <h3>{data.label}</h3>
      <RePieChart width={300} height={250}>
        <Pie
          data={chartData}
          dataKey="value"
          nameKey="name"
          outerRadius={90}
          label
          // Using Recharts Sector component to handle the mathematical arc paths automatically
          shape={(props) => {
            const { index } = props;
            return <Sector {...props} fill={COLORS[index]} />;
          }}
        />

        <Tooltip />
        <Legend />
      </RePieChart>
    </div>
  );
}

export default PieChart;
