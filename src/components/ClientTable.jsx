// Import React so JSX works
import React from "react";

import { useState } from "react";

// Import the row component that renders one <tr> for the table
import ClientRow from "./ClientRow";

// Import the initial client data array
import { initialClients } from "../data/clients";

// Import the client form that adds a new client
import ClientForm from "./ClientForm";

function ClientTable({ clients, onSave, onDelete }) {
  return (
    <div>
      <h2>Clients</h2>
      {/* Wrapper for styling and scroll behavior */}
      <div className="table-wrapper">
        <table>
          <thead>
            {/* Column headers */}
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Company</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {/* Render one ClientRow per client */}
            {clients.map((client) => (
              <ClientRow
                key={client.id} // unique key for React
                name={client.name}
                email={client.email}
                company={client.company}
                status={client.status}
                createdAt={client.createdAt}
                updatedAt={client.updatedAt}
                actions={client.actions}
                // Pass save handler down to row
                onSave={(updatedClient) => onSave(client.id, updatedClient)}
                // Pass delete handler down to row
                onDelete={() => onDelete(client.id)}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ClientTable;
