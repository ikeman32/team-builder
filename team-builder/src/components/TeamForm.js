import React from "react";
import styled from 'styled-components';

const Teamdiv = styled.div`
border: 1px solid red;
width: 30%;
margin: 0 auto;
margin-top: 1rem;
`;

const Teambtn = styled.button`
background-color: blue;
color: whitesmoke;
margin-bottom: 1rem;
border-radius: 1rem;
padding: 0.5rem;
`;

function TeamForm(){
  return (
    <Teamdiv>
      <form>
        <br></br>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" id="name" placeholder="Name" />
        <br></br>
        <br></br>
        <label htmlFor="email">Email: </label>
        <input type="text" name="email" id="email" placeholder="Email" />
        <br></br>
        <br></br>
        <label htmlFor="role">Role: </label>
        <input type="text" name="role" id="role" placeholder="Role" />
        <br></br><br></br>
        <Teambtn type='submit'>Add Team Member</Teambtn>
      </form>
    </Teamdiv>
  );
}

export default TeamForm;
