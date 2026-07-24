// Import React
import React from "react";
import { useState } from "react";

// Renders a single table row for one client
function ClientRow({ name, email, company, status, actions, createdAt, updatedAt, onSave, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(name);
  const [editEmail, setEditEmail] = useState(email);
  const [editCompany, setEditCompany] = useState(company);
  const [editStatus, setEditStatus] = useState(status);
  const [showConfirm, setShowConfirm] = useState(false);

  // View Model State
  const [showView, setShowView] = useState(false);

  return (
    <>
      <tr className="client-row">
        <td data-label="Name">{isEditing ? <input value={editName} onChange={(e) => setEditName(e.target.value)} /> : name}</td>
        <td data-label="Email">{isEditing ? <input value={editEmail} onChange={(e) => setEditEmail(e.target.value)} /> : email}</td>
        <td data-label="Company">{isEditing ? <input value={editCompany} onChange={(e) => setEditCompany(e.target.value)} /> : company}</td>
        <td data-label="Status">{isEditing ? <input value={editStatus} onChange={(e) => setEditStatus(e.target.value)} /> : <span className={`status-badge status-${status.trim().toLowerCase()}`}>{status}</span>}</td>

        <td data-label="Actions" className="actions-cell">
          {actions.map((action) => (
            <button
              key={action}
              className={action.toLowerCase()}
              onClick={() => {
                if (action === "Delete") setShowConfirm(true);
                if (action === "View") setShowView(true);
                if (action === "Edit") {
                  if (isEditing) {
                    onSave({
                      name: editName,
                      email: editEmail,
                      company: editCompany,
                      status: editStatus,
                    });
                  }
                  setIsEditing(!isEditing);
                }
              }}
            >
              {action === "Edit" && isEditing ? "Save" : action}
            </button>
          ))}
        </td>
      </tr>

      {/* Delete  modal */}
      {showConfirm && (
        <div className="modal-overlay">
          <div className="modal">
            <p>Are you sure you want to delete this client?</p>

            <button
              className="btn delete"
              onClick={() => {
                onDelete();
                setShowConfirm(false);
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

      {/* View Modal */}
      {showView && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Client Details</h3>
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
            <p>
              <strong>Status:</strong> <span className={`status-badge status-${status.trim().toLowerCase()}`}>{status}</span>
            </p>
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

// Export so other components can use this row
export default ClientRow;
