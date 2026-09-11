import "../styles/SidePanel.css";
import { NavLink } from "react-router-dom";

/* =========================================================
   ICON IMPORTS
   ========================================================= */
import { FaUsers } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { TbReportSearch } from "react-icons/tb";
import { MdOutlineSpaceDashboard } from "react-icons/md";

/* =========================================================
   SIDE PANEL LAYOUT + LINKS
   ========================================================= */
// Left-hand navigation menu. Uses NavLink (not Link) so the active
// route can be styled automatically via the isActive flag below.
function SidePanel() {
  return (
    <div className="side-panel">
      <h2 className="panel-title">CRM Dashboard</h2>

      <ul className="panel-links">
        {/* className receives { isActive } from React Router,
            toggling the "active" class based on the current route. */}
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "sidebar-link active" : "sidebar-link")}>
            <MdOutlineSpaceDashboard />
            Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink to="/clients" className={({ isActive }) => (isActive ? "sidebar-link active" : "sidebar-link")}>
            <FaUsers />
            Clients
          </NavLink>
        </li>

        <li>
          <NavLink to="/reports" className={({ isActive }) => (isActive ? "sidebar-link active" : "sidebar-link")}>
            <TbReportSearch />
            Reports
          </NavLink>
        </li>

        <li>
          <NavLink to="/settings" className={({ isActive }) => (isActive ? "sidebar-link active" : "sidebar-link")}>
            <IoSettingsOutline />
            Settings
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default SidePanel;
