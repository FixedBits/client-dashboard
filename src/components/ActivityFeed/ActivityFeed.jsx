import { PiUsersThreeFill } from "react-icons/pi";

function ActivityFeed({ items }) {
  return (
    <div className="activity-feed">
      <PiUsersThreeFill />
      <h3>Recent Activity</h3>
      {items.map((activity, index) => (
        <div key={index} className="activity-item">
          <p>{activity.message}</p>
          <span>{activity.time}</span>
        </div>
      ))}
    </div>
  );
}
export default ActivityFeed;
