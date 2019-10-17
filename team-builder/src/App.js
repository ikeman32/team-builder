import React,{useState} from "react";
import ReactDOM from "react-dom";
import "./App.css";

import TeamForm from "./components/TeamForm";
import TeamCard from "./components/TeamCard";

function App() {
  const [team, setTeam] = useState([{
    id: 1,
    member: 'Joe',
    email: 'blahblaha@blah.com',
    role: 'Team Lead'
  }]);


  return (
    <div className="App">
      <TeamForm />

      <TeamCard 
        team={team}/>
    </div>
  );
}

export default App;
