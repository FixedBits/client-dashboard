import { useState } from "react";
import "../../styles/ClientRow.css";
import "../../styles/Modal.css";
import { getEmailError } from "../../utils/validateEmail";

// Single table row with edit/delete/view functionality
function ClientRow({ name, email, company, status, actions, createdAt, updatedAt, onSave, onDelete }) {
  // Edit mode toggle
  const [isEditing, setIsEditing] = useState(false);
  // Local editable copies
  const [editName, setEditName] = useState(name);
  const [editEmail, setEditEmail] = useState(email);
  const [editCompany, setEditCompany] = useState(company);
  const [editStatus, setEditStatus] = useState(status);
  // Modal visibility
  const [showConfirm, setShowConfirm] = useState(false);
  const [showView, setShowView] = useState(false);
  const [errors, setErrors] = useState({});
  return (
    <>
      {/* Main table row */}
      <tr className="client-row">
        <td data-label="Name" className="nowrap">
          {isEditing ? <input value={editName} onChange={(e) => setEditName(e.target.value)} /> : name}
          {errors.name && <p className="error">{errors.name}</p>}
        </td>

        <td data-label="Email">
          {isEditing ? <input value={editEmail} onChange={(e) => setEditEmail(e.target.value)} /> : email}
          {errors.email && <p className="error">{errors.email}</p>}
        </td>

        <td data-label="Company" className="nowrap">
          {isEditing ? <input value={editCompany} onChange={(e) => setEditCompany(e.target.value)} /> : company}
          {errors.company && <p className="error">{errors.company}</p>}
        </td>

        <td data-label="Status">
          {isEditing ? (
            <select value={editStatus} onChange={(e) => setEditStatus(e.target.value)}>
              <option value="Active">Active</option>
              <option value="Pending">Pending</option>
              <option value="Inactive">Inactive</option>
            </select>
          ) : (
            <span className={`status-badge status-${status.trim().toLowerCase()}`}>{status}</span>
          )}
        </td>

        <td data-label="Actions" className="actions-cell">
          <div className="actions-cell-inner">
            {actions.map((action) => (
              <button
                key={action}
                className={action.toLowerCase()}
                onClick={() => {
                  if (action === "Delete") setShowConfirm(true);
                  if (action === "View") setShowView(true);
                  if (action === "Edit") {
                    if (isEditing) {
                      const newErrors = {};

                      const emailError = getEmailError(editEmail);
                      if (emailError) newErrors.email = emailError;
                      if (!editName.trim()) newErrors.name = "Name is required";
                      if (!editCompany.trim()) newErrors.company = "Company is required";

                      if (Object.keys(newErrors).length > 0) {
                        setErrors(newErrors);
                        return;
                      }

                      setErrors({});
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
          </div>
        </td>
      </tr>

      {/* Delete confirmation modal */}
      {showConfirm && (
        <div className="modal-overlay">
          <div className="modal">
            <p>Are you sure you want to delete this client?</p>
            <div className="delete-confirm-container">
              <button className="btn" onClick={() => setShowConfirm(false)}>
                Cancel
              </button>
              <button
                className="btn delete"
                onClick={() => {
                  onDelete();
                  setShowConfirm(false);
                }}
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* View details modal */}
      {showView && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Client Details</h3>
            <p>
              <strong>Name</strong>
              {name}
            </p>
            <p>
              <strong>Email</strong>
              {email}
            </p>
            <p>
              <strong>Company</strong>
              {company}
            </p>
            <p>
              <strong>Status</strong>
              <span className={`status-badge status-${status.trim().toLowerCase()}`}>{status}</span>
            </p>
            <p>
              <strong>Created At</strong>
              {new Date(createdAt).toLocaleString([], {
                year: "numeric",
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
              })}
            </p>
            <p>
              <strong>Updated At</strong>
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
