// src/components/ClientDashboard.jsx
import React, { useState } from "react";
import ClientForm from "./ClientForm";
import ClientTable from "./ClientTable";
import { initialClients } from "../data/clients";

function ClientDashboard() {
  // Local state: holds the current list of clients
  // Change state to [ ] to start with a clean list.
  const [clients, setClients] = useState(initialClients);
  const [showForm, setShowForm] = useState(false);

  // New client handler
  function handleAddClient(newClient) {
    // Adds new client to the TOP of the page

    setClients((prev) => [newClient, ...prev]);
    setShowForm(false); // Hide form after submit
  }

  // Update a single client by id after saving edits
  function handleSave(id, updatedClient) {
    setClients((prev) => prev.map((client) => (client.id === id ? { ...client, ...updatedClient, updatedAt: new Date().toISOString() } : client)));
  }

  // Remove a client from the list by id
  function handleDelete(id) {
    setClients((prev) => prev.filter((client) => client.id !== id));
  }
  return (
    <div className="dashboard">
      {!showForm && (
        <button className="add-btn" type="button" onClick={() => setShowForm(true)}>
          + Add New Client
        </button>
      )}
      {/* {Form appears only when showForm is true} */}
      {showForm && <ClientForm onAddClient={handleAddClient} onCancel={() => setShowForm(false)} />}
      {/* {Table always visible} */}
      <ClientTable clients={clients} onSave={handleSave} onDelete={handleDelete} />
    </div>
  );
}

export default ClientDashboard;
