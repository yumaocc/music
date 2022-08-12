import styled from "styled-components";

export const  Container =styled.div`
    width: 100vw;
    height: ${props => props.playerStatus === 0 ? '840px' : '780px'};
    overflow: hidden;
    font-family:  serif;
    position: relative;
    .ddd {
        position: absolute;
        top: 20px;
        left: 20px;
        z-index: 1;
    }
`

export const Bg = styled.div`
    width: 100%;
    height: 30vh;
    img {
        width: 100%;
        height: 100%;
    }

`
export const Card = styled.div`
    width: 94%;
    height: 30vh;
    background-color: white;
    position: relative;
    top: -20px;
    left: 12px;
    border-radius: 10px;
    margin-bottom: 0;
    .content {
        width: 100%;
        height: calc(100% -100px) !important;
        display: flex;
        flex-direction: column;
        align-items: center;
        transform: translateY(70px);
         .name {
        font-size: 25px;
        font-weight: 500;
        margin-bottom: 10px;
        }
        .detail_1 {
            width: 55%;
            display: flex;
            justify-content: space-around;
            margin-bottom: 10px;
            color: #bfbfbf;
            font-weight: 300;
            font-size: 14px;
        }
        .detail_2 {
            width: 80%;
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            margin-bottom: 10px;
            font-weight: 300;
           .icon {
            position: static;
           }
            div {
                padding: 5px;
                border-radius: 10px;
                border: 1px solid #d9d9d9;
            }
        }
        button {
            background-color: white;
            border-radius: 30px;
            padding: 10px 15px;
            font-size: 15px;
            font-weight: 300;
            border: 1px solid #d9d9d9;
        }
    }
   
`

export const Avatar = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position: absolute;
    top: -50px;
    left: 50%;
    transform: translateX(-50%);
    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
`
export const Tabs = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-bottom: 30px;
    .link{
        color: black;
        transition: all;
    }
    .active {
        border-bottom: 3px solid red;
    }
`
export const Content = styled.div`
    width: 90%;
    margin: 0 auto;
`
export const Test = styled.div`
    
`