// Import React so JSX works
import React from "react";

import { useState } from "react";

// Import the row component that renders a <tr>
import ClientRow from "./ClientRow";

// Import the client data array
import { initialClients } from "../data/clients";

function ClientTable() {
  const [clients, setClients] = useState(initialClients);

  function handleSave(id, updatedClient) {
    setClients((prev) => prev.map((client) => (client.id === id ? { ...client, ...updatedClient } : client)));
  }

  function handleDelete(id) {
    setClients((prev) => prev.filter((client) => client.id !== id));
  }

  return (
    <div>
      <h2>Clients</h2>
      <div className="table-wrapper">
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
            {clients.map((client) => (
              <ClientRow key={client.id} name={client.name} email={client.email} company={client.company} status={client.status} actions={client.actions} onSave={(updatedClient) => handleSave(client.id, updatedClient)} onDelete={() => handleDelete(client.id)} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ClientTable;
