import { PiQuestion } from "react-icons/pi";

function KPICard({ data, label, value, icon, prefix, suffix }) {
  // Support both a `data` object prop OR individual props
  const cardLabel = data ? data.label : label;
  const cardValue = data ? `${prefix || ""}${data.value}${suffix || ""}` : value;
  return (
    <div className="card-container">
      <div className="card-content">
        <div className="icon-title">{icon ? icon : <PiQuestion />}</div>
        <div className="card-text-group">
          <h3 className="card-title">{cardLabel}</h3>
          <p className="card-value">{cardValue}</p>
        </div>
      </div>
    </div>
  );
}

export default KPICard;
