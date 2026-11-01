import { PiQuestion } from "react-icons/pi";

function KPICard({ data, label, value, icon, prefix, suffix, className }) {
  // Support both a `data` object prop OR individual props
  const cardLabel = data ? data.label : label;
  const cardValue = data ? `${prefix || ""}${data.value.toLocaleString()}${suffix || ""}` : value;
  const cardPeriod = data ? data.period : null;

  return (
    <div className={`card-container ${className || ""}`}>
      <div className="card-content">
        <div className="icon-title">{icon ? icon : <PiQuestion />}</div>
        <div className="card-text-group">
          <h3 className="card-title">{cardLabel}</h3>
          {cardPeriod && <span className="card-period">{cardPeriod}</span>}
          <p className="card-value">{cardValue}</p>
        </div>
      </div>
    </div>
  );
}

export default KPICard;
