import styled from "styled-components";

export const Content_A = styled.div`
    width: 100%;
    background-color: white;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 20px;
    .Information {
        width: 100%;
        height: 160px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        border-bottom: 1px solid #d9d9d9;
        h3 {
            color: gray;
        }
        h1 {
            font-size: 20px;
        }
    }
    .Information_more {
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        h3 {
            color: gray;
        }
    }
`
export const Content_B = styled.div`
    padding: 10px;
    background-color: white;
    border-radius: 10px;
    margin-top: 20px;
    h1 {
            font-size: 20px;
        }
    span {
        font-size: 13px;
        color: gray;
    }
`
export const Item = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 20px;
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
    h2 {
        font-size: 20px;
        font-weight: 300;
        margin-bottom: 5px;
        overflow: hidden;
        height: 28px;
    width: 97%;

    }
    h3 {
        font-size: 15px;
        color: gray;
        overflow: hidden;
        height: 28px;
    width: 97%;
    }
`
export const Content_C = styled.div`
    padding: 10px;
    background-color: white;
    border-radius: 10px;
    margin-top: 20px;
    h1 {
            font-size: 20px;
        }
    span {
        font-size: 13px;
        color: gray;
    }
    .img {
        display: flex;
        align-items: center;
        margin-top: 10px;
        img {
            width: 40px;
            height: 40px;
            border-radius: 10px;
            margin-right: 5px;
        }
    .comments_song {
        width: 100%;
        display: flex;
        justify-content: space-between;
        .icon {
            position: none !important;

        }
        .song_name {
            font-size: 10px;
            color: gray;
            font-weight: 300;
        }
    }
}
.comments {
        margin-top: 10px;
        font-size: 15px;
    }
.comments_author {
    margin-top: 10px;
    width: 100%;
    overflow: hidden;
    background-color: #d9d9d9;
    border-radius: 5px;
    padding: 10px;
    div {
        display: inline;
        color: #1890ff;
    }
    p {
        display: inline;
        
    }
}
.comments_time {
    margin-top: 10px;
    color: gray;
    font-size: 10px;
}

`
export const Content_D = styled.div`
    padding: 20px;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: white;
    border-radius: 10px;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    bottom: 30px;
    h1 {
            font-size: 25px;
        }
    h2 {
        color: gray;
        font-size: 15px;
    }

`