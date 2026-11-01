import React, { useState, useEffect } from "react";
import ClientForm from "./ClientForm";
import ClientTable from "./ClientTable";
import SidePanel from "../SidePanel";
import { initialClients } from "../../data/clients";
import { dashboardData } from "../../data/dashboardData";
import { Routes, Route } from "react-router-dom";
import DashboardHome from "../DashboardHome";
import Reports from "../Reports";
import Settings from "../Settings";

import "../../styles/ClientDashboard.css";

function ClientDashboard() {
  // Client list state
  const [clients, setClients] = useState(localStorage.getItem("clients") ? JSON.parse(localStorage.getItem("clients")) : initialClients);

  useEffect(() => {
    localStorage.setItem("clients", JSON.stringify(clients));
  }, [clients]);

  // Recent activity feed state (seeded from dashboardData)
  const [activities, setActivities] = useState(localStorage.getItem("activities") ? JSON.parse(localStorage.getItem("activities")) : dashboardData.activities);

  useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(activities));
  }, [activities]);

  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") ? JSON.parse(localStorage.getItem("darkMode")) : false);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  // Add a new entry to the top of the activity feed, capped at 5
  function addActivity(message) {
    setActivities((prev) => [{ message, time: "Just now" }, ...prev].slice(0, 5));
  }

  function handleReset() {
    setClients(initialClients);
  }
  // Form visibility state
  const [showForm, setShowForm] = useState(false);

  // Add new client to top of list
  function handleAddClient(newClient) {
    setClients((prev) => [newClient, ...prev]);
    setShowForm(false);
    addActivity(`Added new client: ${newClient.name}`);
  }

  // Update existing client by ID
  function handleSave(id, updatedClient) {
    // Find the original client so we can skip logging a no-op save
    const original = clients.find((client) => client.id === id);
    const changed = updatedClient.name !== original.name || updatedClient.email !== original.email || updatedClient.company !== original.company || updatedClient.status !== original.status;

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
    if (changed) addActivity(`Updated client: ${updatedClient.name}`);
  }

  // Delete client by ID
  function handleDelete(id) {
    // Grab the name before filtering the client out, for the activity message
    const deletedClient = clients.find((client) => client.id === id);
    setClients((prev) => prev.filter((client) => client.id !== id));
    addActivity(`Deleted client: ${deletedClient.name}`);
  }

  return (
    <div className={darkMode ? "dashboard dark-mode" : "dashboard"}>
      <SidePanel />
      <div className="dashboard-content">
        <Routes>
          {/* Dashboard Home */}
          <Route path="/" element={<DashboardHome activities={activities} />} />

          {/* Clients Page */}
          <Route
            path="/clients"
            element={
              <>
                {/* Add button (hidden when form is open) */}
                {!showForm && (
                  <button className="add-btn" type="button" onClick={() => setShowForm(true)}>
                    + Add New Client
                  </button>
                )}
                {/* Form (shown only when toggled) */}
                {showForm && <ClientForm onAddClient={handleAddClient} onCancel={() => setShowForm(false)} />} {/* Table with handlers */}
                <ClientTable clients={clients} onSave={handleSave} onDelete={handleDelete} />
              </>
            }
          />

          {/* Reports */}
          <Route path="/reports" element={<Reports />} />

          {/* Settings */}
          <Route path="/settings" element={<Settings onReset={handleReset} darkMode={darkMode} setDarkMode={setDarkMode} />} />
        </Routes>
      </div>
    </div>
  );
}

export default ClientDashboard;
