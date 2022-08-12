import styled, { keyframes } from "styled-components";

const animation = keyframes`
    0% {
        width: 0%;
    }100% {
        width: 100%;
    }
`
export const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 844px;
    z-index: 99;
    background-color: #f5f5f5;
    background-color: pink;
    .taps {
        width: 100%;
        height: 20px;
        display: flex;
        justify-content: space-around;
        transform: translateY(70px);
        div {
            color: black;
            margin-bottom: 5px;
            .active {
                border-bottom: 2px solid #f5222d;
                animation: ${animation} 1s;
                animation-fill-mode: forwards;
            }
        }
        
    }
`
export const Animation = styled.div`
.card-enter ,
.card-appear{
    transform: translateX(100vw);
}
.card-enter-active,.card-appear-active {
    transform: translateX(0);
    transition: all 500ms;
}
.card-enter-done ,.card-appear-done{
    transform: translateX(0);
}
.card-exit {
    transform: translateX(0);
    
}
.card-exit-active {
    transform: translateY(100vh);
    transition: all 300ms;
}
.card-exit-done {
    transform: translateX(100vw);
}
`
export const Content = styled.div`
    width: 100%;
    height: ${({status})=> status === 0 ?  '724px' : ' 664px'};
    transform: translateY(100px);
`