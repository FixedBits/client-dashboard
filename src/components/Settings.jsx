function Settings({ onReset, darkMode, setDarkMode }) {
  return (
    <>
      <h1>Settings Page</h1>
      <button onClick={onReset}>Reset Client List</button>
      <button onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</button>
    </>
  );
}

export default Settings;
