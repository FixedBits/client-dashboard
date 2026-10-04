import KPICard from "./Dashboard/KPICard/KPICard";
import LineChart from "./Dashboard/LineChart/LineChart";
import PieChart from "./Dashboard/PieChart/PieChart";
import ActivityFeed from "./Dashboard/ActivityFeed/ActivityFeed";
import RevenueTable from "./Dashboard/RevenueTable/RevenueTable";
import { dashboardData } from "../data/dashboardData";

// Dashboard Icons
import { PiUsersThreeFill } from "react-icons/pi";
import { PiCheckCircleFill } from "react-icons/pi";
import { PiPlusCircleFill } from "react-icons/pi";
import { PiCurrencyDollarFill } from "react-icons/pi";

// Dashboard Home Component
function DashboardHome() {
  return (
    <div className="dashboard-home">
      <h1 className="dashboard-title">Dashboard</h1>
      {/* KPI ROW */}
      <div className="stats-row">
        <KPICard data={dashboardData.kpis.totalClients} icon={<PiUsersThreeFill />} />
        <KPICard data={dashboardData.kpis.activeClients} icon={<PiCheckCircleFill />} />
        <KPICard data={dashboardData.kpis.newClients} icon={<PiPlusCircleFill />} />
        <KPICard data={dashboardData.kpis.revenue} icon={<PiCurrencyDollarFill />} prefix="$" />
      </div>

      {/* CHARTS ROW */}
      <div className="charts-row">
        <LineChart data={dashboardData.revenueTable} />
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
