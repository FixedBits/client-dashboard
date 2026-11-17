import ClientDashboard from "./components/Clients/ClientDashboard";
import { HashRouter } from "react-router-dom";
import "./styles.css";
import "./styles/Table.css";

function App() {
  return (
    <HashRouter>
      <div className="app">
        <ClientDashboard />
      </div>
    </HashRouter>
  );
}
export default App;
