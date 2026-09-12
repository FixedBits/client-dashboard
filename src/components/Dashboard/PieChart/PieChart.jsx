import { PieChart as RePieChart, Pie, Tooltip, Legend, Sector, DefaultLegendContent } from "recharts";

function PieChart({ data }) {
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
          shape={(slice) => {
            const { index } = slice;
            return <Sector {...slice} fill={COLORS[index]} />;
          }}
        />
        <Tooltip />
        <Legend
          iconType="square"
          content={(props) => {
            const payload = chartData.map((entry, index) => ({
              value: entry.name,
              color: COLORS[index],
            }));
            return <DefaultLegendContent {...props} payload={payload} />;
          }}
        />
      </RePieChart>
    </div>
  );
}

export default PieChart;
