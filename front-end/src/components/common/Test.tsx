import React from 'react';
import styled from '@emotion/styled';

const TestTemplate = styled.div`
    width: 20rem;
    height: 20rem;
    border: 1px solid black;
`;

const Test = () => {
    return (
        <TestTemplate></TestTemplate>
    );
}

export default Test;
