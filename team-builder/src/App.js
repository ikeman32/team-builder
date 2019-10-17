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

  const addMember = member =>{
    const newMember = {
      id: Date.now(),
      member: member.member,
      email: member.email,
      role: member.role
    };
    setTeam([...team, newMember]);
  };

  return (
    <div className="App">
      <TeamForm addMember={addMember} />

      <TeamCard 
        team={team}/>
    </div>
  );
}

export default App;
