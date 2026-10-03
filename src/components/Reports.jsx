// Reports page sub-components
import StatsRow from "./Reports/ReportsStatsRow";
import ReportsChart from "./Reports/ReportsChart";
import ReportsStatCard from "./Reports/ReportsStatCard";
import ReportsTable from "./Reports/ReportsTable";

// Local data sources (no backend yet — everything reads from these files)
import { reportsData } from "../data/reportsData";
import { dashboardData } from "../data/dashboardData";
import "../styles/Reports.css";

function Reports() {
  return (
    <div className="reports-page">
      <h1>Reports</h1>

      {/* Top KPI row — stats are label/value pairs from reportsData */}
      <StatsRow metrics={reportsData.stats} />
      <div className="middle-row">
        {/* Dual-axis bar chart: revenue vs. new clients, 12 months */}
        <ReportsChart chartData={reportsData.chart} />

        {/* Trend Analysis card — derives revenue per client from these two values */}
        <ReportsStatCard totalRevenue={reportsData.stats.totalRevenue.value} totalClients={dashboardData.kpis.totalClients.value} />
      </div>

      {/* Monthly breakdown table — shares revenueTable with the Dashboard's LineChart */}
      <ReportsTable rows={dashboardData.revenueTable} />
    </div>
  );
}

export default Reports;
