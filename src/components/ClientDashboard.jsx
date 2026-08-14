import React, { useState } from "react";
import ClientForm from "./ClientForm";
import ClientTable from "./ClientTable";
import SidePanel from "./SidePanel";
import { initialClients } from "../data/clients";
import "../styles/ClientDashboard.css";

function ClientDashboard() {
  // Client list state
  const [clients, setClients] = useState(initialClients);
  // Form visibility state
  const [showForm, setShowForm] = useState(false);

  // Add new client to top of list
  function handleAddClient(newClient) {
    setClients((prev) => [newClient, ...prev]);
    setShowForm(false);
  }

  // Update existing client by ID
  function handleSave(id, updatedClient) {
    setClients((prev) =>
      prev.map((client) =>
        client.id === id
          ? {
              ...client,
              ...updatedClient,
              updatedAt: new Date().toISOString(),
            }
          : client,
      ),
    );
  }

  // Delete client by ID
  function handleDelete(id) {
    setClients((prev) => prev.filter((client) => client.id !== id));
  }

  return (
    <div className="dashboard">
      <SidePanel />
      <div className="dashboard-content">
        {/* Add button (hidden when form is open) */}
        {!showForm && (
          <button className="add-btn" type="button" onClick={() => setShowForm(true)}>
            + Add New Client
          </button>
        )}
        {/* Form (shown only when toggled) */}
        {showForm && <ClientForm onAddClient={handleAddClient} onCancel={() => setShowForm(false)} />}
        {/* Table with handlers */}
        <ClientTable clients={clients} onSave={handleSave} onDelete={handleDelete} />
      </div>
    </div>
  );
}

export default ClientDashboard;
