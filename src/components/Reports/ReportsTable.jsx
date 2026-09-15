import "../../styles/ReportsTable.css";

const monthNames = {
  Jan: "January",
  Feb: "February",
  Mar: "March",
  Apr: "April",
  May: "May",
  Jun: "June",
  Jul: "July",
  Aug: "August",
  Sep: "September",
  Oct: "October",
  Nov: "November",
  Dec: "December",
};

function ReportsTable({ rows }) {
  return (
    <>
      <h3>Report Table</h3>
      <div className="reports-table-card">
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
