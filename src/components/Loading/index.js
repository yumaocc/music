import React from 'react';
import styled, { keyframes } from 'styled-components';



const loading = keyframes`
    0% {
        opacity: 0;
    }100% {
        opacity: 1;
    }
`
const Animation = styled.div`
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: calc(50% - 50px);
     div {
     font-size :70px ;
     animation:${loading} 3s infinite ease-in-out;
    }
`
const App = () => {
    return (
        <Animation>
            <div>.</div>
            <div>.</div>
            <div>.</div>
        </Animation>
    )
};

export default App;