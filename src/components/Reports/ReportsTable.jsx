import "../../styles/ReportsTable.css";
import { monthNames } from "../../data/monthNames";

function ReportsTable({ rows }) {
  return (
    <>
      <div className="reports-table-card">
        <h3>Report Table</h3>
        <table>
          <thead>
            <tr>
              <th>Month</th>
              <th>Revenue</th>
              <th>Clients Added</th>
              <th>Growth %</th>
              <th>Conversion Rate</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td>{monthNames[row.month]}</td>
                <td>{row.revenue}</td>
                <td>{row.clientsAdded}</td>
                <td>{row.growth}</td>
                <td>{row.conversionRate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ReportsTable;
