import "../../../styles/RevenueTable.css";
function RevenueTable({ rows }) {
  return (
    <div className="revenue-table">
      <h3 className="revenue-table-title">Revenue Table</h3>
      <table>
        <thead>
          <tr>
            <th>Month</th>
            <th>Revenue</th>
            <th>Clients Added</th>
            <th>Growth</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{row.month}</td>
              <td>{row.revenue.toLocaleString()}</td>
              <td>{row.clientsAdded}</td>
              <td>{row.growth}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default RevenueTable;
