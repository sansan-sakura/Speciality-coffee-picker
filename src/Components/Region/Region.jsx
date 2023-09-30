export const Region = ({ onUserInput }) => {
  return (
    <>
      <h2>Which country would you like your coffee beans to be grown?</h2>
      <p>Please pick up a country below</p>
      <select name="country" id="country" onChange={(e) => onUserInput("region", e.target.value)}>
        <option value="">Honduras</option>
        <option value="">Brazil</option>
        <option value="">Ethiopia</option>
        <option value="">Guatemala</option>
        <option value="">Kenya</option>
        <option value="">Mexico</option>
        <option value="">Rwanda</option>
        <option value="">Tanzania</option>
        <option value="">Indonesia</option>
        <option value="">Peru</option>
        <option value="">Colombia</option>
        <option value="">Nicaragua</option>
        <option value="">Panama</option>
        <option value="">Hawaii</option>
        <option value="">Costa Rica</option>
      </select>
    </>
  );
};
