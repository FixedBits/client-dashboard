// Import React so JSX works
import React from "react";
import { useState } from "react";

// Import the row component that renders one <tr> for the table
import ClientRow from "./ClientRow";

// Import the initial client data array (not used here directly)
import { initialClients } from "../data/clients";

// Import the client form (not used here directly)
import ClientForm from "./ClientForm";

// Component: Displays the full table of clients
// Receives the list of clients + handlers from the parent (ClientDashboard)
function ClientTable({ clients, onSave, onDelete }) {
  return (
    <div>
      <h2>Clients</h2>

      {/* Wrapper for styling and scroll behavior */}
      <div className="table-wrapper">
        <table>
          <thead>
            {/* Column headers for the table */}
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Company</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {/* Loop through all clients and render one ClientRow per client */}
            {clients.map((client) => (
              <ClientRow
                key={client.id} // Required by React to track list items
                // Pass down individual client fields
                name={client.name}
                email={client.email}
                company={client.company}
                status={client.status}
                createdAt={client.createdAt}
                updatedAt={client.updatedAt}
                actions={client.actions}
                // Pass down save handler:
                // When a row saves, it sends updatedClient back up.
                // We attach the correct client.id here.
                onSave={(updatedClient) => onSave(client.id, updatedClient)}
                // Pass down delete handler:
                // When a row deletes, it calls onDelete with this client's id.
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
