// Settings.jsx
// Settings panel for the CRM Dashboard — lets the user reset the client list
// and toggle between light/dark mode.
import "../styles/Settings.css";

function Settings({ onReset, darkMode, setDarkMode }) {
  return (
    <>
      <h1 className="settings-page-title">Settings</h1>

      <div className="settings-card">
        <div className="settings-btns-container">
          <div className="dark-mode-container">
            <div className="dark-mode-text">
              <h3>Appearance</h3>
              <p>Switch between light and dark appearance</p>
            </div>
            <button className={`toggle-switch ${darkMode ? "toggle-switch-on" : ""}`} onClick={() => setDarkMode(!darkMode)}>
              <span className="toggle-thumb"></span>
            </button>
          </div>
          <div className="container-divider-line"></div>
          <div className="reset-btn-container">
            <div className="reset-btn-text">
              <h3>Reset client list</h3>
              <p>Restore the original sample client data</p>
            </div>
            <button className="settings-reset-btn" onClick={onReset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
