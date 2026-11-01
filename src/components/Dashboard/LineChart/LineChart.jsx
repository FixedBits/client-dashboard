import { AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import "../../../styles/dashboardCharts.css";

function RevenueAreaChart({ data }) {
  const chartData = data.map((monthlyData) => ({
    month: monthlyData.month,
    revenue: monthlyData.revenue,
  }));

  return (
    <div className="line-chart-card">
      <h3>Monthly Performance (2026)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={chartData}>
          <defs>
            <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#1385f6" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#1385f6" stopOpacity={0.0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--chart-grid)" />
          <XAxis dataKey="month" />
          <YAxis width={75} tickFormatter={(value) => `$${value.toLocaleString()}`} />

          <Tooltip
            formatter={(value) => `$${value.toLocaleString()}`}
            contentStyle={{
              backgroundColor: "var(--card-bg, #ffffff)",
              border: "1px solid rgba(0, 0, 0, 0.08)",
              borderRadius: "6px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
            }}
            labelStyle={{ color: "var(--dashboard-text, #111827)" }}
            itemStyle={{ color: "#1385f6" }}
          />

          <Area type="monotone" dataKey="revenue" name="Revenue" stroke="#1385f6" strokeWidth={2} fill="url(#revenueGradient)" activeDot={{ r: 6 }} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RevenueAreaChart;
