import {BarChart as ReBarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer} from 'recharts';

function ReportsChart({chartData}) {
  return (
    <div className="reports-chart">
      <h3>Revenue & Client Growth (2026)</h3>

      <ResponsiveContainer width="100%" height={260}>
        <ReBarChart data={chartData} margin={{top: 10, right: 15, left: 5, bottom: 5}}>
          <defs>
            <linearGradient id="clientsGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2563eb" stopOpacity={0.85} />
              <stop offset="100%" stopColor="#2563eb" stopOpacity={0.5} />
            </linearGradient>
            <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#16a34a" stopOpacity={0.85} />
              <stop offset="100%" stopColor="#16a34a" stopOpacity={0.5} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--chart-grid)" />
          <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
          <YAxis yAxisId="clientsAxis" orientation="left" domain={[0, 'dataMax + 10']} width={30} axisLine={false} />
          <YAxis yAxisId="revenueAxis" orientation="right" domain={[0, 'dataMax + 2000']} width={55} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value.toLocaleString()}`} />

          <Tooltip
            formatter={(value, name) => [name === 'Revenue' ? `$${value.toLocaleString()}` : value, name]}
            contentStyle={{
              backgroundColor: 'var(--card-bg, #ffffff)',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              borderRadius: '8px',
              padding: '10px 14px',
              boxShadow: '0 6px 16px rgba(0, 0, 0, 0.12)',
            }}
            labelStyle={{color: 'var(--dashboard-text, #111827)', fontWeight: 'bold', marginBottom: '4px'}}
            itemStyle={{color: 'var(--dashboard-text, #374151)', padding: '2px 0'}}
            cursor={{fill: 'rgba(0, 0, 0, 0.20)'}}
          />

          <Legend layout="horizontal" position="top" height={36} iconType="circle" />

          <Bar dataKey="newClients" fill="url(#clientsGradient)" yAxisId="clientsAxis" name="New Clients" radius={[4, 4, 0, 0]} />
          <Bar dataKey="revenue" fill="url(#revenueGradient)" yAxisId="revenueAxis" name="Revenue" radius={[4, 4, 0, 0]} />
        </ReBarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ReportsChart;
