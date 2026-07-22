import ClientForm from "./components/ClientForm";
import ClientTable from "./components/ClientTable";

import "./styles.css";

function App() {
  return (
    <div className="app">
      <h1>Client Dashboard</h1>
      <ClientTable />
    </div>
  );
}
export default App;
