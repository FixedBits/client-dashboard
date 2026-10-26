import KPICard from "./Dashboard/KPICard/KPICard";
import LineChart from "./Dashboard/LineChart/LineChart";
import PieChart from "./Dashboard/PieChart/PieChart";
import ActivityFeed from "./Dashboard/ActivityFeed/ActivityFeed";
import RevenueTable from "./Dashboard/RevenueTable/RevenueTable";
import { dashboardData } from "../data/dashboardData";

// Dashboard Icons
import { PiUsersThreeFill } from "react-icons/pi";
import { IoMdCheckmark } from "react-icons/io";
import { IoAdd } from "react-icons/io5";
import { TbCurrencyDollar } from "react-icons/tb";
// Dashboard Home Component
function DashboardHome({ activities }) {
  return (
    <div className="dashboard-home">
      <h1 className="dashboard-title">Dashboard</h1>
      {/* KPI ROW */}
      <div className="stats-row">
        <KPICard className="total-clients-card" data={dashboardData.kpis.totalClients} icon={<PiUsersThreeFill />} />
        <KPICard className="active-clients-card" data={dashboardData.kpis.activeClients} icon={<IoMdCheckmark />} />
        <KPICard className="new-clients-card" data={dashboardData.kpis.newClients} icon={<IoAdd />} />
        <KPICard className="revenue-card" data={dashboardData.kpis.revenue} icon={<TbCurrencyDollar />} prefix="$" />
      </div>

      {/* CHARTS ROW */}
      <div className="charts-row">
        <LineChart data={dashboardData.revenueTable} />
        <PieChart data={dashboardData.conversionRate} />
      </div>

      {/* BOTTOM ROW */}
      <div className="bottom-row">
        <ActivityFeed items={activities} />
        <RevenueTable rows={dashboardData.revenueTable} />
      </div>
    </div>
  );
}

export default DashboardHome;
