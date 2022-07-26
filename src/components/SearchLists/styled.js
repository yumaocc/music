import styled from "styled-components"
import style from '../../assets/global-style'

export const SongItem = styled.ul`
  height: 80vh;
  width: 100%;
  overflow: scroll;
  transform: translateY(50px);
  padding-bottom: 50px;
  li{
    display: flex;
    height: 60px;
    align-items: center;  
    .index{
      flex-basis: 60px;
      width: 60px;
      height: 60px;
      line-height: 60px;
      text-align: center;
    }
    .info{
      box-sizing: border-box;
      flex: 1;
      display: flex;
      height: 100%;
      padding: 5px 0;
      flex-direction: column;
      justify-content: space-around;
      border-bottom: 1px solid ${style["border-color"]};
      ${style.noWrap()}
      span{
        ${style.noWrap()}
      }
      span:first-child{
        color: ${style["font-color-desc"]};
      }
      span:last-child{
        font-size: ${style["font-size-s"]};
        color: #bba8a8;
      }
    }
  }
`