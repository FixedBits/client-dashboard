import KPICard from "../Dashboard/KPICard/KPICard";

// Reports Icons
import { PiCurrencyDollarFill } from "react-icons/pi";
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
      <KPICard data={metrics.totalRevenue} icon={<PiCurrencyDollarFill />} prefix="$" />

      {/* Count of new clients acquired */}
      <KPICard data={metrics.newClients} icon={<PiUsersThreeFill />} />

      {/* Conversion rate, formatted as a percentage */}
      <KPICard data={metrics.conversionRate} icon={<PiChartPieFill />} suffix="%" />

      {/* Average growth rate, formatted as a percentage */}
      <KPICard data={metrics.averageGrowth} icon={<PiTrendUpFill />} suffix="%" />
    </div>
  );
}

export default StatsRow;
