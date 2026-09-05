import KPICard from "./Dashboard/KPICard/KPICard";
import LineChart from "./Dashboard/LineChart/LineChart";
import PieChart from "./Dashboard/PieChart/PieChart";
import ActivityFeed from "./Dashboard/ActivityFeed/ActivityFeed";
import RevenueTable from "./Dashboard/RevenueTable/RevenueTable";
import { dashboardData } from "../data/dashboardData";

// Dashboard Home Component
function DashboardHome() {
  return (
    <div className="dashboard-home">
      {/* KPI ROW */}
      <div className="kpi-row">
        <KPICard data={dashboardData.kpis.totalClients} />
        <KPICard data={dashboardData.kpis.activeClients} />
        <KPICard data={dashboardData.kpis.newClients} />
        <KPICard data={dashboardData.kpis.revenue} />
      </div>

      {/* CHARTS ROW */}
      <div className="charts-row">
        <LineChart data={dashboardData.monthlyPerformance} />
        <PieChart data={dashboardData.conversionRate} />
      </div>

      {/* BOTTOM ROW */}
      <div className="bottom-row">
        <ActivityFeed items={dashboardData.activities} />
        <RevenueTable rows={dashboardData.revenueTable} />
      </div>
    </div>
  );
}

export default DashboardHome;
