import React from "react";
import "../../styles/ClientTable.css";
import ClientRow from "./ClientRow";

// Table displays all clients with edit/delete handlers
function ClientTable({ clients, onSave, onDelete }) {
  return (
    <div>
      <h2>Client List</h2>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Company</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* key is required for React list rendering */}
            {clients.map((client) => (
              <ClientRow key={client.id} name={client.name} email={client.email} company={client.company} status={client.status} createdAt={client.createdAt} updatedAt={client.updatedAt} actions={client.actions} onSave={(updatedClient) => onSave(client.id, updatedClient)} onDelete={() => onDelete(client.id)} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ClientTable;
