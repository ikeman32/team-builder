import React from 'react';
import styled from 'styled-components';

const CardH1 = styled.h1`
color: red;
`;

const CardDiv = styled.div`
border: 1px solid blue;
`;

function TeamCard(){

    return(
        <CardDiv>
            <CardH1>Team Member</CardH1>
            <p>Email: blahblah@blah.com</p>
            <p>Role: Team Lead</p>
        </CardDiv>
    );
}

export default TeamCard;