import React, { useState } from "react";
import "../../styles/ClientForm.css";

// Form for adding new clients
function ClientForm({ onAddClient, onCancel }) {
  // Form input state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = {};

    // Validate inputs
    if (!name.trim()) newErrors.name = "Name is required.";
    if (!email.trim()) newErrors.email = "Email is required.";
    if (email.includes(" ")) newErrors.email = "Email must not have spaces.";
    if (!email.includes("@")) newErrors.email = "Email must contain '@'.";
    if (!email.toLowerCase().endsWith(".com")) newErrors.email = "Email must end with '.com'.";
    if (!company.trim()) newErrors.company = "Company is required.";
    if (!status) newErrors.status = "Status is required.";

    // Stop if errors found
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Create new client object
    const newClient = {
      id: crypto.randomUUID(),
      name,
      email: email.toLowerCase(),
      company,
      status,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      actions: ["View", "Edit", "Delete"],
    };

    onAddClient(newClient);
    setName("");
    setEmail("");
    setCompany("");
    setStatus("");
    setErrors({});
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="add-client-form">
        <h2>Add New Client</h2>
        <div className="add-client-labels">
          {/* Name input */}
          <label>
            Name
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)} // Update name state
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </label>

          {/* Email input */}
          <label>
            Email
            <input
              type="text"
              value={email.toLowerCase()}
              onChange={(e) => setEmail(e.target.value)} // Update email state
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </label>

          {/* Company input */}
          <label>
            Company
            <input
              className="nowrap"
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)} // Update company state
            />
            {errors.company && <p className="error">{errors.company}</p>}
          </label>

          {/* Status dropdown */}
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
        </div>

        {/* Buttons: submit + cancel */}
        <div className="form-btns">
          <button type="submit" className="add-client-btn">
            Add Client
          </button>
          <button type="button" className="cancel-btn" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </>
  );
}

export default ClientForm;
