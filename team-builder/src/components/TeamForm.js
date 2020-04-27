import React,{useState} from "react";
import styled from 'styled-components';

const Teamdiv = styled.div`
border: 1px solid red;
width: 25%;
margin: 0 auto;
margin-top: 2rem;
margin-bottom: 1rem
padding: 1rem;
`;

const Teambtn = styled.button`
background-color: blue;
color: whitesmoke;
margin-left: 4rem;
margin-bottom: 1rem;
border-radius: 1rem;
padding: 0.5rem;

:hover{
    background-color: crimson;
}
`;

const Teamlbl = styled.label`
font-size: 1.6rem;
`;

const Teaminput = styled.input`
font-size: 1.6rem;
`;

function TeamForm(props){
  const [team, setTeam] = useState({member: '', email: '', role: ''});

  const handleChanges = e => {
    setTeam({...team, [e.target.name]: e.target.value});
  };

  const submitForm = e => {
    e.preventDefault();
    props.addMember(team);
    setTeam({member: '', email: '', role: ''});
  };
  return (
    <Teamdiv>
      <form onSubmit={submitForm}>
        <br></br>
        <Teamlbl htmlFor="name">Name: </Teamlbl>
        <Teaminput 
          type="text" 
          name="name" 
          id="name" 
          placeholder="Name" 
          onChange={handleChanges}
          value={team.member}/>
        <br></br>
        <br></br>
        <Teamlbl htmlFor="email">Email: </Teamlbl>
        <Teaminput 
          type="text" 
          name="email" 
          id="email" 
          placeholder="Email"
          onChange={handleChanges}
          value={team.email} />
        <br></br>
        <br></br>
        <Teamlbl htmlFor="role">Role: </Teamlbl>
        <Teaminput 
          type="text" 
          name="role" 
          id="role" 
          placeholder="Role"
          onChange={handleChanges}
          value={team.role} />
        <br></br><br></br>
        <Teambtn type='submit'>Add Team Member</Teambtn>
      </form>
    </Teamdiv>
  );
}

export default TeamForm;
