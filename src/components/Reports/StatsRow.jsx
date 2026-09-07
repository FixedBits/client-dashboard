import KPICard from "../Dashboard/KPICard/KPICard";

// Reports Icons
import { PiCurrencyDollarFill } from "react-icons/pi";
import { PiUsersThreeFill } from "react-icons/pi";
import { PiChartPieFill } from "react-icons/pi";
import { PiTrendUpFill } from "react-icons/pi";

function StatsRow({ metrics }) {
  return (
    <div className="stats-row">
      <KPICard data={metrics.totalRevenue} icon={<PiCurrencyDollarFill />} prefix="$" />
      <KPICard data={metrics.newClients} icon={<PiUsersThreeFill />} />
      <KPICard data={metrics.conversionRate} icon={<PiChartPieFill />} suffix="%" />
      <KPICard data={metrics.averageGrowth} icon={<PiTrendUpFill />} suffix="%" />
    </div>
  );
}

export default StatsRow;
