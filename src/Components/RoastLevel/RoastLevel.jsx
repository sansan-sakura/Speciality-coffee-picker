export const RoastLevel = ({ onUserInput }) => {
  return (
    <>
      <h2>Let's ask your favorite roast level</h2>
      <input
        type="radio"
        value="light"
        onChange={(e) => onUserInput("roast", e.target.value)}
        name="roast"
      />
      <label>light</label>
      <input
        type="radio"
        value="light-medium"
        name="roast"
        onChange={(e) => onUserInput("roast", e.target.value)}
      />
      <label>Light-Medium</label>
      <input
        type="radio"
        value="medium"
        name="roast"
        onChange={(e) => onUserInput("roast", e.target.value)}
      />
      <label>Medium</label>
      <input
        type="radio"
        value="medium-dark"
        name="roast"
        onChange={(e) => onUserInput("roast", e.target.value)}
      />
      <label>Medium-Dark</label>
      <input
        type="radio"
        value="dark"
        name="roast"
        onChange={(e) => onUserInput("roast", e.target.value)}
      />
      <label>Dark</label>
    </>
  );
};
