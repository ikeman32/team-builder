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

function TeamCard(){

    return(
        <CardDiv>
            <CardH1>Team Member</CardH1>
            <CardP>Email: blahblah@blah.com</CardP>
            <CardP>Role: Team Lead</CardP>
        </CardDiv>
    );
}

export default TeamCard;