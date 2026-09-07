import { PiQuestion } from "react-icons/pi";

function KPICard({ data, label, value, icon, prefix, suffix }) {
  // Support both a `data` object prop OR individual props
  const cardLabel = data ? data.label : label;
  const cardValue = data ? `${prefix || " "}${data.value}${suffix || " "}` : value;
  return (
    <div className="kpi-card">
      {icon ? <div className="kpi-icon">{icon}</div> : <PiQuestion />}
      <div className="kpi-content">
        <h3>{cardLabel}</h3>
        <p className="kpi-value">{cardValue}</p>
      </div>
    </div>
  );
}

export default KPICard;
