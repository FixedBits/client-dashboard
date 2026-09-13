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
      <h3>Trend Analysis</h3>
      <ul>
        <li>
          <strong>Revenue per Client</strong> <span className="stat-value stat-value-green"> ${revenuePerClient.toFixed(2)} </span>
        </li>
        <li>
          <strong>Retention Rate</strong>{" "}
          <span className="stat-value">
            82% <span className="stat-compare-text">up from</span> <span className="stat-compare-value">78%</span>
          </span>
        </li>
        <li>
          <strong>Lead Conversion</strong>{" "}
          <span className="stat-value">
            23% <span className="stat-compare-text">up from</span>
            <span className="stat-compare-value"> 20%</span>
          </span>
        </li>
      </ul>
    </>
  );
}
export default ReportsStatCard;
