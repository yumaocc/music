import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
`
export const Item = styled.div`
    width: 100%;
    height: 35%;
    border-bottom: 1px solid #d9d9d9;
    margin-top: 20px;
    .avatar {
        display: flex;
        margin-bottom: 20px;
        .img{
            width: 50px;
            height: 50px;
            img {
                width: 100%;
                height: 100%;
                border-radius: 50%;
            }
        }
    .title {
        margin-left: 10px;
        span:first-child {
            font-weight: 800;
            font-size: 15px;
        }
        span:last-child {
            margin-left: 5px;
            font-size: 10px;
            color: gray;
            line-height: 28px;
        }
        .time {
            font-size: 5px;
            color: gray;
            margin-top: 5px;
        }
    }
    }
    .content {
        margin-left: 56px;
        font-size: 18px;
        margin-bottom: 10px;
    }
    .song {
        margin-left: 56px;
        height: 60px;
        width: calc(100% - 56px);
        background-color: #d9d9d9;
        border-radius: 10px;
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        .img {
            width: 40px;
            height: 40px;
            margin-left: 5px;
            img {
                width: 100%;
                height: 100%;
                border-radius: 5px;
            }
        }
        .title {
            width: 100%;
            margin-left: 5px;
            .songAuthor {
                font-size: 10px;
                color: gray;
                margin-top: 5px;
            }
            .songName {
                .playList {
                    border-radius:5px;
                    border: 1px solid red;
                    margin-right: 5px;
                    color: red;
                    font-size: 2px;
                    display: inline-block;
                    padding: 1px;
                    
                }
            }
        }
    }
    .btn {
        width: 50%;
        margin-left: 56px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
        font-size: 15px;
        color: gray;
        div {
            display: flex;
            align-items: center;
            span {
                margin-left: 5px;
            }
        }
    }
`