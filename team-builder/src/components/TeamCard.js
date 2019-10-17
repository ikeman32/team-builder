import React from 'react';
import styled from 'styled-components';


const CardH1 = styled.h1`
color: red;
margin-left: 1rem;
`;

const CardDiv = styled.div`
border: 1px solid blue;
width: 20%;
margin-left: 2rem;
margin-top: 2rem;
padding: 1rem;
`;

const CardP = styled.p`
margin-left: 1rem;
`;

function TeamCard(props){

    return(
        <div>
        {props.team.map(team=>(
        <CardDiv key={team.id}>
            <CardH1>{team.member}</CardH1>
            <CardP>{team.email}</CardP>
            <CardP>{team.role}</CardP>
        </CardDiv>
        ))}
        </div>
    );
}

export default TeamCard;