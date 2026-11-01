export const dashboardData = {
  kpis: {
    totalClients: { label: "Total Clients", value: 256 },
    activeClients: { label: "Active Clients", value: 135 },
    newClients: { label: "Clients Added", period: 2026, value: 137 },
    revenue: { label: "Revenue", value: 78200 },
  },

  conversionRate: {
    label: "Conversion Rate",
    converted: 32,
    notConverted: 68,
  },

  activities: [
    { message: "Added new client: Sara Johnson", time: "2h ago" },
    { message: "Updated client: Jane Doe", time: "3h ago" },
    { message: "Deleted client: Bob Wilson", time: "5h ago" },
    { message: "Added new client: Sara Johnson", time: "7h ago" },
    { message: "Added new client: Jane Doe", time: "1d ago" },
  ],

  revenueTable: [
    { month: "Jan", revenue: 4200, clientsAdded: 8, growth: "8%", conversionRate: "18%" },
    { month: "Feb", revenue: 3100, clientsAdded: 7, growth: "12%", conversionRate: "14%" },
    { month: "Mar", revenue: 5800, clientsAdded: 10, growth: "15%", conversionRate: "22%" },
    { month: "Apr", revenue: 6500, clientsAdded: 9, growth: "10%", conversionRate: "20%" },
    { month: "May", revenue: 4800, clientsAdded: 10, growth: "9%", conversionRate: "16%" },
    { month: "Jun", revenue: 7000, clientsAdded: 12, growth: "14%", conversionRate: "24%" },
    { month: "Jul", revenue: 7500, clientsAdded: 13, growth: "17%", conversionRate: "25%" },
    { month: "Aug", revenue: 7200, clientsAdded: 11, growth: "13%", conversionRate: "23%" },
    { month: "Sep", revenue: 6800, clientsAdded: 12, growth: "11%", conversionRate: "21%" },
    { month: "Oct", revenue: 7900, clientsAdded: 14, growth: "16%", conversionRate: "26%" },
    { month: "Nov", revenue: 8200, clientsAdded: 15, growth: "18%", conversionRate: "27%" },
    { month: "Dec", revenue: 9000, clientsAdded: 16, growth: "20%", conversionRate: "29%" },
  ],
};
