export const Email = ({ value, onUserInput }) => {
  return (
    <>
      <h2>Now, we want to ask your email address 🐠 </h2>
      <p>So we can send you a result to you later 🦄</p>
      <input type="email" onChange={(e) => onUserInput("email", e.target.value)} />
    </>
  );
};
