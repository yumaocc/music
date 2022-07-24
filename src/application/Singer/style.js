import styled from 'styled-components';
import style from '../../assets/global-style';

export const Container = styled.div`
    width: 100vw;
    height: 93vh;
    background-color: gray;
    position: absolute;
    top: 0;
    left: 0;
    top:0;
    right: 0;
    z-index: 9;
`
export const Bg = styled.div`
    background: url(${props => props.background}) no-repeat center center;
    background-size: 100%;
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    .btn {
        width: 150px;
        height: 50px;
        background-color: #d44439;
        border-radius: 50px;
        margin-bottom: 80px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        & span {
            font-size: 15px;
            color: white;
        }
    }
`
export const Content = styled.div`
    height: 843px;
    overflow: hidden;
`
export const ListStyle = styled.div`
    width: 100vw;
    position:relative;
    bottom: 60px;
    left: 0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: white;
`

export const ListHeader = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #8c8c8c;
    padding-left: 10px;
    margin-left: 20px;
    margin-bottom: 10px;
    font-family:"Microsoft YaHei";
    & .icon {
        font-size: 25px;
        margin-right: 20px;
    }
    & h1 {
        font-size: 20px;
        font-weight: 200;
    }
    & div {
        margin-left: 5px;
        color: #8c8c8c;
    }
`