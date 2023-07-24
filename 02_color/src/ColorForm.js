import colorNames from "colornames";

const ColorForm = ({
  colorValue,
  setColorValue,
  setHexValue,
  isDarkText,
  setIsDarkText
}) => {
  return (
    <form className="colorName">
      <label htmlFor="color"></label>
      <input
        type="text"
        id="color"
        role="colorInput"
        placeholder="Add color name"
        autoFocus
        value={colorValue}
        onChange={(e) => {
          setColorValue(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />
      <button type="button" onClick={() => setIsDarkText(!isDarkText)}>
        Toggle Text Color
      </button>
    </form>
  );
};

export default ColorForm;
