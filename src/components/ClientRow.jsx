// Import React so this component can use JSX
import React from "react";
import { useState } from "react";

// Renders a single table row for one client
function ClientRow({ name, email, company, status, actions, onSave, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(name);
  const [editEmail, setEditEmail] = useState(email);
  const [editCompany, setEditCompany] = useState(company);
  const [editStatus, setEditStatus] = useState(status);

  return (
    <tr>
      <td>{isEditing ? <input value={editName} onChange={(e) => setEditName(e.target.value)} /> : name}</td>
      <td>{isEditing ? <input value={editEmail} onChange={(e) => setEditEmail(e.target.value)} /> : email}</td>
      <td>{isEditing ? <input value={editCompany} onChange={(e) => setEditCompany(e.target.value)} /> : company}</td>
      <td>{isEditing ? <input value={editStatus} onChange={(e) => setEditStatus(e.target.value)} /> : status}</td>

      {/* Render one button for each action in the actions array */}
      <td>
        {actions.map((action) => (
          <button
            key={action}
            onClick={() => {
              if (action === "Delete") {
                onDelete();
              }
            }}
          >
            {action}
          </button>
        ))}
      </td>

      <td>
        <button
          onClick={() => {
            if (isEditing) {
              onSave({
                name: editName,
                email: editEmail,
                company: editCompany,
                status: editStatus,
              });
            }
            setIsEditing(!isEditing);
          }}
        >
          {isEditing ? "Save" : "Edit"}
        </button>
      </td>
    </tr>
  );
}

// Export so other components can use this row
export default ClientRow;
