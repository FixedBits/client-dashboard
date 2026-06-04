import React from "react";

function ClientRow({ name, email, company, status, actions }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{company}</td>
      <td>{status}</td>
      <td>{actions}</td>
    </tr>
  );
}

export default ClientRow;
