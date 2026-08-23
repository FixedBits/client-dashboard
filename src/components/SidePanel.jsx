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
function SidePanel() {
  return (
    <div className="side-panel">
      <h2 className="panel-title">CRM Dashboard</h2>

      <ul className="panel-links">
        <li>
          <NavLink to="/" className="sidebar-link">
            <MdOutlineSpaceDashboard />
            Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink to="/clients" className="sidebar-link">
            <FaUsers />
            Clients
          </NavLink>
        </li>

        <li>
          <NavLink to="/reports" className="sidebar-link">
            <TbReportSearch />
            Reports
          </NavLink>
        </li>

        <li>
          <NavLink to="/settings" className="sidebar-link">
            <IoSettingsOutline />
            Settings
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default SidePanel;
