import { PiUsersThreeFill } from "react-icons/pi";

function KPICard({ data }) {
  return (
    <div className="kpi-card">
      <PiUsersThreeFill />
      <h3>{data.label}</h3>
      <p className="kpi-value"> {data.value}</p>
    </div>
  );
}
export default KPICard;
