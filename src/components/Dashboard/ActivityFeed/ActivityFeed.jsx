import "../../../styles/DashboardActivityFeed.css";

function ActivityFeed({ items }) {
  return (
    <div className="activity-feed-card">
      <h3>Recent Activity</h3>
      {items.map((activity, index) => {
        const msgLower = activity.message.toLowerCase();

        let typeClass = "neutral";
        if (msgLower.includes("added")) typeClass = "added";
        if (msgLower.includes("updated")) typeClass = "updated";
        if (msgLower.includes("deleted")) typeClass = "deleted";

        return (
          <div key={index} className="activity-item">
            <span className={`status-dot ${typeClass}`}></span>
            <div className="activity-content">
              <p className="activity-msg">{activity.message}</p>
              <span className="activity-time">{activity.time}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default ActivityFeed;
