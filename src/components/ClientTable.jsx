// Import React so JSX works
import React from "react";

// Import the row component that renders a <tr>
import ClientRow from "./ClientRow";

// Import the client data array
import { initialClients } from "../data/clients";

function ClientTable() {
  return (
    <div>
      <h2>Clients</h2>

      <table>
        <thead>
          <tr>
            {/* Column header */}
            <th>Name</th>

            {/* Column header */}
            <th>Email</th>

            {/* Column header */}
            <th>Company</th>

            {/* Column header */}
            <th>Status</th>

            {/* Column header */}
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {/* Loop through all clients and pass their data into one ClientRow component */}
          {initialClients.map((client) => (
            <ClientRow key={client.id} name={client.name} email={client.email} company={client.company} status={client.status} actions={client.actions} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClientTable;
