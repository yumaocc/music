import styled from "styled-components";


export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #d9d9d9;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Content = styled.div`
    width: 100vw;
    height: 60vh;
    background-color: white;
    .back {
        position: absolute;
        top: 20px;
        left: 20px;
        .icon {
            width: 30px;
            height:30px;
        }
    }
    
`