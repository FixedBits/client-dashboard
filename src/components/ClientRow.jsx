// Import React core
import React from "react";
import { useState } from "react";

// Component: Renders ONE row inside the client table
function ClientRow({ name, email, company, status, actions, createdAt, updatedAt, onSave, onDelete }) {
  // State: controls whether this row is in "edit mode"
  // false → normal text view
  // true → input fields appear
  const [isEditing, setIsEditing] = useState(false);

  // Local editable copies of the client's data
  // These values populate the input fields when editing
  const [editName, setEditName] = useState(name);
  const [editEmail, setEditEmail] = useState(email);
  const [editCompany, setEditCompany] = useState(company);
  const [editStatus, setEditStatus] = useState(status);

  // State: controls visibility of the delete confirmation modal
  const [showConfirm, setShowConfirm] = useState(false);

  // State: controls visibility of the "View Details" modal
  const [showView, setShowView] = useState(false);

  return (
    <>
      {/* Main table row */}
      <tr className="client-row">
        {/* Name cell */}
        <td data-label="Name" className="nowrap">
          {isEditing ? (
            <input
              value={editName}
              onChange={(e) => setEditName(e.target.value)} // Update local name
            />
          ) : (
            name
          )}
        </td>

        {/* Email cell */}
        <td data-label="Email">
          {isEditing ? (
            <input
              value={editEmail}
              onChange={(e) => setEditEmail(e.target.value)} // Update local email
            />
          ) : (
            email
          )}
        </td>

        {/* Company cell */}
        <td data-label="Company" className="nowrap">
          {isEditing ? (
            <input
              value={editCompany}
              onChange={(e) => setEditCompany(e.target.value)} // Update local company
            />
          ) : (
            company
          )}
        </td>

        {/* Status cell */}
        <td data-label="Status">
          {isEditing ? (
            <select
              value={editStatus}
              onChange={(e) => setEditStatus(e.target.value)} // Update local status
            >
              <option value="Active">Active</option>
              <option value="Pending ">Pending</option>
              <option value="Inactive">Inactive</option>
            </select>
          ) : (
            // Badge shown in view mode
            <span className={`status-badge status-${status.trim().toLowerCase()}`}>{status}</span>
          )}
        </td>

        {/* Action buttons */}
        <td data-label="Actions" className="actions-cell">
          {actions.map((action) => (
            <button
              key={action}
              className={action.toLowerCase()} // CSS class: view/edit/delete
              onClick={() => {
                // DELETE button → show confirmation modal
                if (action === "Delete") setShowConfirm(true);

                // VIEW button → show details modal
                if (action === "View") setShowView(true);

                // EDIT button → toggle edit mode
                if (action === "Edit") {
                  // If already editing, clicking "Save" triggers onSave
                  if (isEditing) {
                    onSave({
                      name: editName,
                      email: editEmail,
                      company: editCompany,
                      status: editStatus,
                    });
                  }

                  // Flip edit mode: true → false, false → true
                  setIsEditing(!isEditing);
                }
              }}
            >
              {/* Change button label from "Edit" → "Save" when editing */}
              {action === "Edit" && isEditing ? "Save" : action}
            </button>
          ))}
        </td>
      </tr>

      {/* Delete confirmation modal */}
      {showConfirm && (
        <div className="modal-overlay">
          <div className="modal">
            <p>Are you sure you want to delete this client?</p>

            <button
              className="btn delete"
              onClick={() => {
                onDelete(); // Trigger delete handler
                setShowConfirm(false); // Close modal
              }}
            >
              Yes, Delete
            </button>

            <button className="btn" onClick={() => setShowConfirm(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* View details modal */}
      {showView && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Client Details</h3>

            {/* Basic info */}
            <p>
              <strong>Name: </strong>
              {name}
            </p>
            <p>
              <strong>Email: </strong>
              {email}
            </p>
            <p>
              <strong>Company: </strong>
              {company}
            </p>

            {/* Status badge */}
            <p>
              <strong>Status:</strong> <span className={`status-badge status-${status.trim().toLowerCase()}`}>{status}</span>
            </p>

            {/* Created timestamp */}
            <p>
              <strong>Created At: </strong>
              {new Date(createdAt).toLocaleString([], {
                year: "numeric",
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
              })}
            </p>

            {/* Updated timestamp */}
            <p>
              <strong>Updated At:</strong>
              {new Date(updatedAt).toLocaleString([], {
                year: "numeric",
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
              })}
            </p>

            <button className="btn" onClick={() => setShowView(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

// Export component so ClientTable can use it
export default ClientRow;
