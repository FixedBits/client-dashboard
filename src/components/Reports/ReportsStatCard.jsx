import "../../styles/ReportsStatCard.css";
function calculateRevenuePerClient(totalRevenue, totalClients) {
  if (totalClients == 0) {
    return 0;
  } else {
    return totalRevenue / totalClients;
  }
}

function ReportsStatCard({ totalRevenue, totalClients }) {
  const revenuePerClient = calculateRevenuePerClient(totalRevenue, totalClients);
  return (
    <>
      <div className="trend-analysis-card">
        <h3 className="trend-analysis-title">Trend Analysis</h3>
        <ul>
          <li className="stat-row">
            <strong className="stat-title">Revenue per Client</strong>{" "}
            <span className="stat-group">
              <span className="stat-value"> ${revenuePerClient.toFixed(2)} </span>
            </span>
          </li>
          <li className="stat-row">
            <strong className="stat-title">Retention Rate</strong>{" "}
            <span className="stat-group">
              <span className="stat-value">82% </span>
              <span>up from</span> <span className="stat-compare-value">78%</span>
            </span>
          </li>
          <li className="stat-row">
            <strong className="stat-title">Lead Conversion</strong>{" "}
            <span className="stat-group">
              <span className="stat-value">23% </span>
              <span>up from</span>
              <span className="stat-compare-value"> 20%</span>{" "}
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}
export default ReportsStatCard;
