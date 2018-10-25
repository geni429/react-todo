import styled from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50px;
  padding: 8px;
  margin-bottom: 1px;
  background: #fff;
  box-sizing: border-box;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
`
export const CheckAllButtonWrapper = styled.div`
  position: relative;
  width: 35px;
  height: 30px;
`
export const CheckAllButtonImg = styled.img`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;

  &:hover {
    cursor: pointer;
  }
`
export const Input = styled.input`
  width: calc(100% - 45px);
  padding: 0;
  padding-left: 10px;
  border: 0;
  font-size: 24px;
  font-weight: 100;
  outline: none;

  &::placeholder {
    color: rgb(235, 235, 235);
    font-style: italic;
  }
`