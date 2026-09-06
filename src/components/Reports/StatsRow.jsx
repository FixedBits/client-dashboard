import KPICard from "../Dashboard/KPICard/KPICard";

// Reports Icons
import { PiCurrencyDollarFill } from "react-icons/pi";
import { PiUsersThreeFill } from "react-icons/pi";
import { PiChartPieFill } from "react-icons/pi";
import { PiTrendUpFill } from "react-icons/pi";

function StatsRow({ data }) {
  return (
    <div className="stats-row">
      <KPICard label="Total Revenue" value={`$${data.totalRevenue}`} icon={<PiCurrencyDollarFill />} />
      <KPICard label="New Clients" value={data.newClients} icon={<PiUsersThreeFill />} />
      <KPICard label="Conversion Rate" value={`${data.conversionRate}%`} icon={<PiChartPieFill />} />
      <KPICard label="Average Growth" value={`${data.averageGrowth}%`} icon={<PiTrendUpFill />} />
    </div>
  );
}

export default StatsRow;
