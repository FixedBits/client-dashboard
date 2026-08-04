// src/components/ClientDashboard.jsx
import React, { useState } from "react";
import ClientForm from "./ClientForm";
import ClientTable from "./ClientTable";
import { initialClients } from "../data/clients";

function ClientDashboard() {
  // State: holds the full list of clients shown in the table
  // Starts with initialClients (or [] if you want an empty list)
  const [clients, setClients] = useState(initialClients);

  // State: controls whether the "Add Client" form is visible
  const [showForm, setShowForm] = useState(false);

  // Handler: runs when a NEW client is submitted from ClientForm
  function handleAddClient(newClient) {
    // Add the new client to the TOP of the list
    setClients((prev) => [newClient, ...prev]);

    // Hide the form after adding the client
    setShowForm(false);
  }

  // Handler: runs when an EXISTING client is saved after editing
  function handleSave(id, updatedClient) {
    // Replace only the client whose id matches
    // Every other client stays the same
    setClients((prev) =>
      prev.map((client) =>
        client.id === id
          ? {
              ...client, // keep original fields
              ...updatedClient, // apply updated fields
              updatedAt: new Date().toISOString(), // timestamp
            }
          : client,
      ),
    );
  }

  // Handler: runs when a client is deleted
  function handleDelete(id) {
    // Remove the client whose id matches
    setClients((prev) => prev.filter((client) => client.id !== id));
  }

  return (
    <div className="dashboard">
      {/* Show the "Add New Client" button ONLY when the form is hidden */}
      {!showForm && (
        <button className="add-btn" type="button" onClick={() => setShowForm(true)}>
          + Add New Client
        </button>
      )}

      {/* Show the form ONLY when showForm is true */}
      {showForm && <ClientForm onAddClient={handleAddClient} onCancel={() => setShowForm(false)} />}

      {/* Always show the table. Pass down the handlers. */}
      <ClientTable clients={clients} onSave={handleSave} onDelete={handleDelete} />
    </div>
  );
}

export default ClientDashboard;
