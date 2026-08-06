import React, { useState } from "react";

// Component: Form used to create a new client
function ClientForm({ onAddClient, onCancel }) {
  // State: stores the current text typed into each input field
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState("");

  // State: stores validation error messages for each field
  const [errors, setErrors] = useState({});

  // Handler: runs when the form is submitted
  function handleSubmit(e) {
    e.preventDefault(); // Stop the browser from refreshing the page

    const newErrors = {}; // Temporary object to collect validation errors

    // Validate each field. If invalid, store an error message.
    if (!name.trim()) newErrors.name = "Name is required.";
    if (!email.trim()) newErrors.email = "Email is required.";
    if (email.includes(" ")) newErrors.email = "Email must not have spaces.";
    if (!email.includes("@")) newErrors.email = "Email must contain '@'.";
    if (!email.toLowerCase().endsWith(".com")) {
      newErrors.email = "Email must end with '.com'.";
    }
    if (!company.trim()) newErrors.company = "Company is required.";

    // Validate dropdown: must not be empty
    if (!status) newErrors.status = "Status is required.";

    // If ANY errors exist, show them and stop the submit process
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors); // Display errors in the UI
      return; // Stop here — do NOT add client
    }

    // Build the new client object (this is what gets added to the list)
    const newClient = {
      id: crypto.randomUUID(), // Generate unique ID
      name,
      email: email.toLowerCase(),
      company,
      status,
      createdAt: new Date().toISOString(), // Timestamp for creation
      updatedAt: new Date().toISOString(), // Timestamp for last update
      actions: ["View", "Edit", "Delete"], // Actions available for this client
    };

    // Send the new client object to the parent component
    onAddClient(newClient);

    // Clear all input fields after successful submit
    setName("");
    setEmail("");
    setCompany("");
    setStatus("");

    // Clear all error messages
    setErrors({});
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="add-client-form">
        <h2>Add New Client</h2>

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

        {/* Buttons: submit + cancel */}
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
