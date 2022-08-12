import styled from "styled-components";




export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99999;
    
`
export const Main = styled.div`
    width: 75vw;
    height: 100vh;
    background-color: #f0f0f0;
    padding: 20px;
`
export const Aside = styled.div`
    width: 25vw;
    height: 100vh;
    background-color: black;
    opacity: 0.4;

`
export const Footer = styled.div`
    width: 100%;
    height: 45px;
    border: 1px solid #ff4d4f;
    border-radius: 10px;
    text-align: center;
    line-height: 45px;
    margin-top: 20px;
    color: #ff4d4f;
`
export const Content = styled.div`
    width: 100%;
    height: 744px;
    overflow: hidden;
    border-bottom: 50px;
    position: relative;
`
