// Import React so this component can use JSX
import React, { useState } from "react";

// Simple form component used for adding or editing a client
function ClientForm({ onAddClient }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newClient = {
      id: crypto.randomUUID(),
      name,
      email,
      company,
      status,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      actions: ["Delete", "View", "Edit"], 
    };

    onAddClient(newClient);

    // Clear the form fields

    setName("");
    setEmail("");
    setCompany("");
    setStatus("");
  }

  return (
    <form onSubmit={handleSubmit} className="add-client-form">
      <h2>Add New Client</h2>
      <label>
        Name
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />{" "}
      </label>
      <label>
        Email
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Company
        <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} />
      </label>
      <label>
        Status
        <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} />
      </label>

      <button type="submit">Add Client</button>
    </form>
  );
}

export default ClientForm;
