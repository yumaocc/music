import styled from'styled-components';
import style from '../../assets/global-style';

export const PlayListWrapper = styled.div `
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1000;
  background-color: ${style ["background-color-shadow"]};
  .list_wrapper {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    opacity: 1;
    border-radius: 10px 10px 0 0;
    background-color: ${style ["highlight-background-color"]};
    .list_close {
       position: relative;
       left: 350px;
       top: 10px;
       font-size: 20px;
    }
    .list_title {
        margin-left: 10px;
        font-size: 20px;
    }
  }
`;
export const ScrollWrapper = styled.div`
  height: 400px;
  overflow: scroll;
  margin-top: 30px;
  .list {
    width: 90vw;
    height: 40px;
    display: flex;
    margin: 0px 15px;
    justify-content: space-between;
    align-items: center;
    overflow:hidden;
	text-overflow:ellipsis;
	white-space:nowrap;
    font-weight: 100;
    .item {
      overflow: hidden;
    }
    .list_singer {
        margin-left: 5px;
        font-size: 10px;
        color: gray;
        overflow: hidden;
    }
    .list_singer {
      overflow: hidden;
    }
  }
  
`;