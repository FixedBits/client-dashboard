// Settings.jsx
// Settings panel for the CRM Dashboard — lets the user reset the client list
// and toggle between light/dark mode.
import '../styles/Settings.css';

function Settings({onReset, darkMode, setDarkMode}) {
  return (
    <>
      <h1 className='settings-page-title'>Settings Page</h1>

      <div className='settings-btns-container'>
        {/* Clears all clients from the list via the parent-provided handler */}
        <button className="settings-reset-btn" onClick={onReset}>
          Reset Client List
        </button>
        {/* Flips the darkMode boolean; parent component controls the actual theme */}
        <button className="settings-dark-mode-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Toggle Light Mode":"Toggle Dark Mode"}
        </button>
      </div>
    </>
  );
}

export default Settings;
