// Import React so JSX works
import React from "react";

import { useState } from "react";

// Import the row component that renders one <tr> for the table
import ClientRow from "./ClientRow";

// Import the initial client data array
import { initialClients } from "../data/clients";

function ClientTable() {
  // Local state: holds the current list of clients
  const [clients, setClients] = useState(initialClients);

  // Update a single client by id after saving edits
  function handleSave(id, updatedClient) {
    setClients((prev) => prev.map((client) => (client.id === id ? { ...client, ...updatedClient, updatedAt: new Date().toISOString() } : client)));
  }

  // Remove a client from the list by id
  function handleDelete(id) {
    setClients((prev) => prev.filter((client) => client.id !== id));
  }

  return (
    <div>
      {/* Section title */}
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
                onSave={(updatedClient) => handleSave(client.id, updatedClient)}
                // Pass delete handler down to row
                onDelete={() => handleDelete(client.id)}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ClientTable;
