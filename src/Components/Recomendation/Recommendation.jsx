export const Recommendation = ({ onUserInput }) => {
  return (
    <>
      <h2>How do you like to ake your coffee? 🌞</h2>
      <p>Each beans has the best way to make a delicious cup of joe</p>
      <input
        type="radio"
        name="recommendation"
        value="Filter"
        onChange={(e) => onUserInput("recommendation", e.target.value)}
      />
      <label htmlFor="filter">Filter</label>
      <input
        type="radio"
        name="recommendation"
        value="Expresso"
        onChange={(e) => onUserInput("recommendation", e.target.value)}
      />
      <label htmlFor="expresso">Expresso</label>
      <input
        type="radio"
        name="recommendation"
        value="French Press"
        onChange={(e) => onUserInput("recommendation", e.target.value)}
      />
      <label htmlFor="french-press">French Press</label>
      <input
        type="radio"
        name="recommendation"
        value="AeroPress"
        onChange={(e) => onUserInput("recommendation", e.target.value)}
      />
      <label htmlFor="aeropress">AeroPress</label>
      <input
        type="radio"
        name="recommendation"
        value="V60"
        onChange={(e) => onUserInput("recommendation", e.target.value)}
      />
      <label htmlFor="v60">V60</label>
      <input
        type="radio"
        name="recommendation"
        value="Pour Pver"
        onChange={(e) => onUserInput("recommendation", e.target.value)}
      />
      <label htmlFor="pour-over">Pour Over</label>
      <input
        type="radio"
        name="recommendation"
        value="Drip"
        onChange={(e) => onUserInput("recommendation", e.target.value)}
      />
      <label htmlFor="pour-over">Drip</label>
    </>
  );
};
