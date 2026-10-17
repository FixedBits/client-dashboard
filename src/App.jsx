import ClientDashboard from "./components/Clients/ClientDashboard";
import { BrowserRouter } from "react-router-dom";
import "./styles.css";
import "./styles/Table.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <ClientDashboard />
      </div>
    </BrowserRouter>
  );
}
export default App;
