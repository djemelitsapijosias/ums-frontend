import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
  fetch("http://localhost:5000/api/db-test")
    .then(res => res.json())
    .then(data => setMessage("DB Time: " + JSON.stringify(data.time)))
    .catch(err => setMessage("Error: " + err));
}, []);

  return (
    <div>
      <h1>Frontend is running 🎉</h1>
      <p>Backend says: {message}</p>
    </div>
  );
}

export default App;
