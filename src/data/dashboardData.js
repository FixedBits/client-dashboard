export const dashboardData = {
  kpis: {
    totalClients: { label: "Total Clients", value: 256 },
    activeClients: { label: "Active Clients", value: 135 },
    newClients: { label: "New Clients", value: 45 },
    revenue: { label: "Revenue", value: 12500 },
  },

  monthlyPerformance: {
    label: "Monthly Performance",
    values: [4200, 6100, 8500, 2900],
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
    { month: "January", revenue: 4200, clientsAdded: 8, growth: "8%" },
    { month: "February", revenue: 6100, clientsAdded: 7, growth: "12%" },
    { month: "March", revenue: 8500, clientsAdded: 10, growth: "15%" },
    { month: "April", revenue: 2900, clientsAdded: 9, growth: "10%" },
  ],
};
