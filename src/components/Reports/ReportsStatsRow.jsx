import KPICard from "../Dashboard/KPICard/KPICard";
import "../../styles/Card.css";

// Reports Icons
import { TbCurrencyDollar } from "react-icons/tb";
import { PiUsersThreeFill } from "react-icons/pi";
import { PiChartPieFill } from "react-icons/pi";
import { PiTrendUpFill } from "react-icons/pi";

// StatsRow renders a row of KPICard components summarizing key report metrics.
// Expects a `metrics` object containing totalRevenue, newClients,
// conversionRate, and averageGrowth data
function StatsRow({ metrics }) {
  return (
    <div className="stats-row">
      {/* Total revenue, formatted with a dollar sign prefix */}
      <KPICard className="total-revenue-card" data={metrics.totalRevenue} icon={<TbCurrencyDollar />} prefix="$" />
      {/* Count of new clients acquired */}
      <KPICard className="new-clients-card" data={metrics.newClients} icon={<PiUsersThreeFill />} />
      {/* Conversion rate, formatted as a percentage */}
      <KPICard className="conversion-rate-card" data={metrics.conversionRate} icon={<PiChartPieFill />} suffix="%" />
      {/* Average growth rate, formatted as a percentage */}
      <KPICard className="average-growth-card" data={metrics.averageGrowth} icon={<PiTrendUpFill />} suffix="%" />
    </div>
  );
}

export default StatsRow;
