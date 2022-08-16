import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    font-family:  serif;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #f0f0f0;
    .back {
        position: relative;
        left: 20px;
        top: 20px;
    }
    
`
export const Bg = styled.div`
    width: 100vw;
    height: 30vh;
    background-color: red;
    z-index: -2;
    position: relative;
    top: -24px;
    img {
        width: 100%;
        height: 100%;
    }
`
export const Avatar = styled.div`
    width: 100px;
    height: 100px;
    margin: 0 auto;
    transform: translateY(20px);
    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
`
export const Content = styled.div`
    transform: translateY(-120px);
    z-index: 0;
`
export const Card_A = styled.div`
    width: 100%;
    height: 250px;
    border-radius: 10px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    .content {
        height: 200px;
        width: 90%;
        display: flex;
        align-items: center;
        flex-direction: column;
        .name {
            font-size: 20px;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            font-weight: bold;
            margin-top: 10px;
        }
        .fans {
            position: relative;
            width: 50%;
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
            color: gray;
        }
        .data_a {
            width: 90%;
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
            .more {
                width: 20px;
                height: 20px;
                text-align: center;
                line-height: 20px;
                border: 1px solid #f0f0f0;
                border-radius: 10px;
                font-size: 10px;
            }
        }
        .edit_material {
            margin-top: 20px;
            width: 50%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            span:first-child{
                font-size: 20px;
                margin-left: 10px;
            } 
            .btn {
                width: 30px;
                height: 30px;
                text-align: center;
                line-height: 30px;
                border: 1px solid #f0f0f0;
                border-radius: 50%;
                font-size: 10px;
            }
        }
    }
`
export const Tabs = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    margin-bottom: 20px;
   a {
    color: black;
   }
   .active {
    border-bottom: 1px solid red;
   }

`
export const Card_B = styled.div`
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
            border-radius: 10px;
            border: 1px solid #f0f0f0;
            color: black;
        }
    }
    .content {
        width: 90%;
        height: 100px;
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding-left: 30px;
        border-bottom: 1px solid #f0f0f0;

    }
    .more {
        margin-top: 20px;
        color: gray;
    }
`
