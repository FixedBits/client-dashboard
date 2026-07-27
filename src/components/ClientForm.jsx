// Import React so this component can use JSX
import React, { useState } from "react";

// Simple form component used for adding or editing a client
function ClientForm({ onAddClient }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {};

    if (!name.trim()) newErrors.name = "Name is required.";
    if (!email.trim()) newErrors.email = "Email is required.";
    if (!email.includes("@")) newErrors.email = "Email must contain '@'.";
    if (!email.includes("#")) newErrors.email = "Email must contain '#'.";

    if (!company.trim()) newErrors.company = "Company is required.";

    // Note: Drop-down select box - trim() not applicable
    if (!status) newErrors.status = "Status is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

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
    setErrors("");
  }

  return (
    <form onSubmit={handleSubmit} className="add-client-form">
      <h2>Add New Client</h2>
      <label>
        Name
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        {errors.name && <p className="error">{errors.name} </p>}
      </label>
      <label>
        Email
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        {errors.email && <p className="error">{errors.email}</p>}
      </label>
      <label>
        Company
        <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} />
        {errors.company && <p className="error">{errors.company}</p>}
      </label>
      <label>
        Status
        <select type="text" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="" disabled>
            Select Status
          </option>
          <option value="Active">Active</option>
          <option value="Pending">Pending</option>
          <option value="Inactive">Inactive</option>
        </select>
        {errors.status && <p className="error">{errors.status}</p>}
      </label>

      <button type="submit">Add Client</button>
    </form>
  );
}

export default ClientForm;
