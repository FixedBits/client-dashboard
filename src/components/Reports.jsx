import StatsRow from "./Reports/StatsRow";
import ReportsChart from "./Reports/ReportsChart";
import ReportsStatCard from "./Reports/ReportsStatCard";
import ReportsTable from "./Reports/ReportsTable";
import { reportsData } from "../data/reportsData";
import { dashboardData } from "../data/dashboardData";

function Reports() {
  return (
    <div className="reports-page">
      <h1>Reports Page</h1>

      <StatsRow metrics={reportsData.stats} />
      <ReportsChart chartData={reportsData.chart} />
      <ReportsStatCard totalRevenue={reportsData.stats.totalRevenue.value} totalClients={dashboardData.kpis.totalClients.value} />
      <ReportsTable rows={dashboardData.revenueTable} />
    </div>
  );
}

export default Reports;
