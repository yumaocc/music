import styled from "styled-components";

export const Card_A = styled.div`
    width: 100%;
    width: 100%;
    height: 250px;
    border-radius: 10px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .title {
        width: 90%;
        display: flex;
        justify-content: space-between;
        h1{
            font-size: 25px;
            font-weight: bold;
        }
        a {
            width: 100px;
            height: 30px;
            text-align: center;
            line-height: 30px;
            border-radius: 10px;
            border: 1px solid #f0f0f0;
            color: black;
        }
    }
    .content {
        width: 90%;
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        border-bottom: 1px solid #f0f0f0;

    }
    .more {
        margin-top: 20px;
        color: gray;
    }
`

export const Item = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    .img {
        width: 60px;
        height: 60px;
        margin-right: 20px;
        img {
            width: 100%;
            height: 100%;
            border-radius: 10px;
        }
    }
   .text {
    width: calc(100% - 60px);
    overflow:hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
    h2 {
        font-size: 20px;
        font-weight: 300;
        margin-bottom: 5px;
        

        height: 28px;
        width: 100%;

    }
    h3 {
        font-size: 15px;
        color: gray;
        overflow: hidden;
        height: 28px;
        width: 97%;
    }
   }
`
export const Card_B = styled.div`
    width: 100%;
    box-sizing: border-box;
    border-radius: 10px;
    margin-top: 20px;
    background-color: white;
    padding: 20px;
    .title {
        font-size: 25px;
        margin-bottom: 20px;
    }
`
export const Card_C = styled.div`
   width: 100%;
   height: 100px;
    box-sizing: border-box;
    border-radius: 10px;
    margin-top: 20px;
    background-color: white;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
        font-size: 20px;
        font-weight: bold;
    }
    div {
        color: gray;
    }


`