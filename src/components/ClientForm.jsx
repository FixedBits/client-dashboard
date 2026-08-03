import React, { useState } from "react";

// Simple form component used for adding or editing a client
function ClientForm({ onAddClient, onCancel }) {
  // Local state for each input field
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState("");

  // Holds validation error messages for each field
  const [errors, setErrors] = useState({});

  function handleSubmit(e) {
    e.preventDefault(); // Prevent page reload on form submit

    const newErrors = {}; // Object to collect any validation errors

    // Validate each field and add an error key if invalid
    if (!name.trim()) newErrors.name = "Name is required.";
    if (!email.trim()) newErrors.email = "Email is required.";
    if (!email.includes("@")) newErrors.email = "Email must contain '@'.";
    if (!company.trim()) newErrors.company = "Company is required.";

    // Drop-down: only check if empty
    if (!status) newErrors.status = "Status is required.";

    // If ANY error keys exist, show errors and stop submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors); // Display errors in UI
      return; // Stop function so client is NOT added
    }

    // Build new client object when validation passes
    const newClient = {
      id: crypto.randomUUID(), // Unique ID for the client
      name,
      email,
      company,
      status,
      createdAt: new Date().toISOString(), // Timestamp for creation
      updatedAt: new Date().toISOString(), // Timestamp for last update
      actions: ["Delete", "View", "Edit"], // Actions available for this client
    };

    onAddClient(newClient); // Send new client to parent component

    // Clear form fields after successful submission
    setName("");
    setEmail("");
    setCompany("");
    setStatus("");

    // Reset errors back to an empty object
    setErrors({});
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="add-client-form">
        <h2>Add New Client</h2>

        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)} // Update name state
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </label>

        <label>
          Email
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update email state
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </label>

        <label>
          Company
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)} // Update company state
          />
          {errors.company && <p className="error">{errors.company}</p>}
        </label>

        <label>
          Status
          <select
            key={status} // Forces re-render when status resets
            value={status}
            onChange={(e) => setStatus(e.target.value)} // Update status state
          >
            <option value="" disabled>
              Select Status
            </option>
            <option value="Active">Active</option>
            <option value="Pending">Pending</option>
            <option value="Inactive">Inactive</option>
          </select>
          {errors.status && <p className="error">{errors.status}</p>}
        </label>

        <div className="form-btns">
          <button type="submit">Add Client</button>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </>
  );
}

export default ClientForm;
