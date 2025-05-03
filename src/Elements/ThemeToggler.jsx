import * as React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const ThemeToggler = () => {
  const [isDarkMode, setDarkMode] = React.useState(true);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };

  React.useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
    document.body.classList.toggle("light", !isDarkMode);
  }, [isDarkMode]);

  return (
    <DarkModeSwitch
      checked={isDarkMode}
      onChange={toggleDarkMode}
      size={20}
      sunColor="white"
      moonColor="white"
    />
  );
};

export default ThemeToggler;
