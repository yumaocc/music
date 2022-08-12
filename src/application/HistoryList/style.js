import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
`
export const Item = styled.div`
    display: flex;
    align-items: center;
    padding-right: 10px;
    .index {
        font-size: 18px;
        font-weight: 400;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serifs;
        margin: 0  25px;
        color: gray;
    }
    .author {
        flex: 1;
        white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        h1 {
            
        }
        h3 {
            color: gray;
            margin-top: 5px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;

        }
    }
    .count {
        margin-right: 15px;
        width: 45px;
        display: flex;
        justify-content: space-between;
        span {
            color: gray;
            font-size: 10px;
        }
    }
`