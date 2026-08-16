import "../styles/SidePanel.css";
import { FaUsers } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { TbReportSearch } from "react-icons/tb";
import { MdOutlineSpaceDashboard } from "react-icons/md";
function SidePanel() {
  return (
    <div className="side-panel">
      <h2 className="panel-title">CRM Dashboard</h2>
      <ul className="panel-links">
        <li>
          <a href="#">
            {" "}
            <MdOutlineSpaceDashboard />
            Dashboard
          </a>
        </li>
        <li>
          <a href="#">
            <FaUsers />
            Clients
          </a>
        </li>
        <li>
          <a href="#">
            <TbReportSearch />
            Reports
          </a>
        </li>
        <li>
          <a href="#">
            <IoSettingsOutline /> Settings
          </a>
        </li>
      </ul>
    </div>
  );
}
export default SidePanel;
