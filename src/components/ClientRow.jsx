// Import React
import React from "react";
import { useState } from "react";

// Renders a single table row for one client
function ClientRow({ name, email, company, status, actions, onSave, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(name);
  const [editEmail, setEditEmail] = useState(email);
  const [editCompany, setEditCompany] = useState(company);
  const [editStatus, setEditStatus] = useState(status);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <>
      <tr>
        <td>{isEditing ? <input value={editName} onChange={(e) => setEditName(e.target.value)} /> : name}</td>
        <td>{isEditing ? <input value={editEmail} onChange={(e) => setEditEmail(e.target.value)} /> : email}</td>
        <td>{isEditing ? <input value={editCompany} onChange={(e) => setEditCompany(e.target.value)} /> : company}</td>
        <td>{isEditing ? <input value={editStatus} onChange={(e) => setEditStatus(e.target.value)} /> : status}</td>

        <td>
          {actions.map((action) => (
            <button
              key={action}
              onClick={() => {
                if (action === "Delete") setShowConfirm(true);
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
    </>
  );
}

// Export so other components can use this row
export default ClientRow;
