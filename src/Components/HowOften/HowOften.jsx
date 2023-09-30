export const Howoften = ({ onUserInput }) => {
  return (
    <>
      <h2>How much do you like coffee?</h2>
      <span>0</span>

      <input
        type="range"
        min="0"
        max="20"
        onChange={(e) => onUserInput("howOften", e.target.value)}
      />
      <span>20</span>
    </>
  );
};
