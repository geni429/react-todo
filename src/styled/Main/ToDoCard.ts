import styled from 'styled-components';
import checkComplete from '@components/Main/res/check_complete.png';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 5px;
  border-bottom: 1px solid #ddd;
  border-top: 0;
  background: #fff;
  box-sizing: border-box;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
`
export const ToDo = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 100px);
  margin-left: 10px;
  margin-right: 10px;
  font-size: 24px;
  font-weight: 100;
  word-break: break-all;
`
export const CompleteCheckImageContainer = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
`
export const CompleteCheckImage = styled.img`
  position: absolute;
  margin: auto;
  width: 30px;
  height: 30px;
  top: -100%;
  right: -100%;
  bottom: -100%;
  left: -100%;
  content: url("http://localhost:3000/${checkComplete}");
`
export const CompleteCheckBox = styled.input.attrs({
  type: 'checkbox'
})`
  display: none;
  box-sizing: border-box;
  margin: 4px 0 0;
  padding: 0;
`
export const DeleteButton = styled.button`
  width: 40px;
  height: 40px;

  &:hover {
    cursor: pointer;
  }
`