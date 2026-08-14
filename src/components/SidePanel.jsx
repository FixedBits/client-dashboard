import "../styles/SidePanel.css";

function SidePanel() {
  return (
    <div className="side-panel">
      <h2 className="panel-title">Menu</h2>
      <ul className="panel-links">
        <li>Dashboard</li>
        <li>Clients</li>
        <li>Reports</li>
        <li>Settings</li>
      </ul>
    </div>
  );
}
export default SidePanel;
