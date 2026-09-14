export const dashboardData = {
  kpis: {
    totalClients: { label: "Total Clients", value: 256 },
    activeClients: { label: "Active Clients", value: 135 },
    newClients: { label: "New Clients", value: 45 },
    revenue: { label: "Revenue", value: 12500 },
  },

  monthlyPerformance: {
    label: "Monthly Performance",
    values: [4200, 3100, 5800, 6500],
  },

  conversionRate: {
    label: "Conversion Rate",
    converted: 32,
    notConverted: 68,
  },
  activities: [
    { message: "Added new client: Sara Johnson", time: "2h ago" },
    { message: "Updated client: Jane Doe", time: "5h ago" },
    { message: "Deleted client: Bob Wilson", time: "1d ago" },
  ],

  revenueTable: [
    { month: "Jan", revenue: 4200, clientsAdded: 8, growth: "8%" },
    { month: "Feb", revenue: 3100, clientsAdded: 7, growth: "12%" },
    { month: "Mar", revenue: 5800, clientsAdded: 10, growth: "15%" },
    { month: "Apr", revenue: 6500, clientsAdded: 9, growth: "10%" },
    { month: "May", revenue: 4800, clientsAdded: 10, growth: "10%" },
    { month: "Jun", revenue: 7000, clientsAdded: 1, growth: "10%" },
    { month: "Jul", revenue: 7500, clientsAdded: 1, growth: "10%" },
    { month: "Aug", revenue: 7200, clientsAdded: 1, growth: "10%" },
    { month: "Sep", revenue: 6800, clientsAdded: 9, growth: "10%" },
    { month: "Oct", revenue: 7900, clientsAdded: 1, growth: "10%" },
    { month: "Nov", revenue: 8200, clientsAdded: 1, growth: "10%" },
    { month: "Dec", revenue: 9000, clientsAdded: 1, growth: "10%" },
  ],
};
