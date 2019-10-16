import React from "react";
import "./App.css";

import TeamForm from "./components/TeamForm";
import TeamCard from "./components/TeamCard";

function App() {
  return (
    <div className="App">
      <TeamForm />

      <TeamCard />
    </div>
  );
}

export default App;
