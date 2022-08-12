import styled from 'styled-components';

export const Content = styled.div`
  position: absolute;
  top: 100px;
  bottom: 60px;
  width: 100%;
  height: ${props => props.currentSongStatus === 0 ? '730px' : '684px'};
  padding: 0px 5px;
`
export const List = styled.div`
  width: 100%;
  overflow: hidden;
`