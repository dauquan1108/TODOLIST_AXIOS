import ThemeContext from "../conText/Theme-Context";

function ThemeTogglerButton() {
  return (
    <ThemeContext.Consumer>
      {({ toggleTheme }) => (
        <div className="ButtonChange">
          <label className="switch">
            <input type="checkbox" onClick={toggleTheme} />
            <span className="slider round" />
          </label>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

export default ThemeTogglerButton;
