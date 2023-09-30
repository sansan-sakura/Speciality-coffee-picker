export const Name = ({ value, onUserInput }) => {
  return (
    <>
      <h2>Let me ask your name first 📸 </h2>
      <p>In order to pick up the best coffee for you, we need your name 🌝</p>
      <input type="text" value={value} onChange={(e) => onUserInput("name", e.target.value)} />
    </>
  );
};
