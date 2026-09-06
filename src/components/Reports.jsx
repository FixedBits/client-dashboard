import StatsRow from "./Reports/StatsRow";
import { reportsData } from "../data/reportsData";

function Reports() {
  return (
    <div className="reports-page">
      <h1>Reports Page</h1>

      <StatsRow data={reportsData.stats} />
    </div>
  );
}

export default Reports;
