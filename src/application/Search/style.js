import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color:#f5f5f5;
    
`
export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    .icon {
        width: 25px;
        height: 25px;
    }
    .back {
        font-size: 15px;
        margin: 10px 10px;
        font-weight: 300;
    }
    .input {
        width: 60%;
        height: 40px;
        border-radius: 10px;
        border: none;
        padding: 0 20px;
    }
    .input:focus {
	    outline:none
    }
    .btn {
        font-size: 15px;
        margin: 10px 10px;
        font-weight: 300;
    }
`
export const Hots = styled.div`
    width: 90%;
    margin: 0 20px;
    height: 500px;
    overflow: scroll;
    border-radius: 10px;
    padding: 10px;
    .hots_title {
        padding: 10px 0;
        font-weight: 600;
        border-bottom: 1px solid #d9d9d9;
       
    }
`
export const History = styled.div`
    width: 90%;
    height: 100px;
    margin: 50px 20px;
    border-radius: 10px;
    padding: 10px;
    .historyBtn {
        display: flex;
        justify-content: space-between;
    }
    &.title {
        font-weight: 600;
    }
    .historyContent {
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        margin-top: 10px;
    }

`
export const SearchList = styled.div`
    width: 100%;
    margin: 0 20px;
    background-color: red;
`
export const HotsList = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    padding: 20px 10px;
    .num {
        font-weight: 700;
        font-size: 15px;
        margin-right: 30px;
        color: #595959;
    }
    .title {
        font-weight: 700;
        font-size: 15px;
    }
`
export const HistoryList = styled.div`
    height: 30px;
    border-radius: 10px;
    display: flex;
    margin-left: 10px;
    background-color: white;
    line-height: 30px;
    overflow:hidden;
	text-overflow:ellipsis;
	white-space:nowrap;
    margin-left:10px;
    font-size: 5px;
    padding: 0 10px;

`