import React from "react";
import ClientRow from "./ClientRow";
import { initialClients } from "../data/clients";

function ClientTable() {
  return (
    <div>
      <h2>Clients</h2>
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
          {initialClients.map((client) => (
            <ClientRow key={client.id} name={client.name} email={client.email} company={client.company} status={client.status} actions={client.actions} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClientTable;
