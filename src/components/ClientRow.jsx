// Import React so this component can use JSX
import React from "react";

// Renders a single table row for one client
function ClientRow({ name, email, company, status, actions }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{company}</td>
      <td>{status}</td>

      {/* Render one button for each action in the actions array */}
      <td>
        {actions.map((action) => (
          <button key={action}>{action}</button>
        ))}
      </td>
    </tr>
  );
}

// Export so other components can use this row
export default ClientRow;
