import React, { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit() {
    console.log("email", email);
    console.log("password", password);
  }

  return (
    <div>
      <h1>Register</h1>
      <input onChange={handleEmailChange} type="email" placeholder="email" />
      <input
        onChange={handlePasswordChange}
        type="password"
        placeholder="password"
      />

      <button onClick={handleSubmit}>submit</button>
    </div>
  );
}
