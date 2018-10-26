import styled from 'styled-components';

interface SetAllTodosButtonProps {
  allTodosLength: number;
  state: boolean;
}

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 8px;
  margin-bottom: 1px;
  background: #fff;
  box-sizing: border-box;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
`
export const SetAllTodosButton = styled.button`
  transform: rotate(90deg);
  width: 30px;
  height: 30px;
  font-size: 20px;
  background: none;
  border: 0;
  outline: none;

  ${
    (props: SetAllTodosButtonProps) => {
      if (props.allTodosLength)
        return !props.state ? 'color: rgb(230, 230, 230);' : 'color: rgb(180, 180, 180);';
    }
  }

  ${
    (props: SetAllTodosButtonProps) =>
      props.allTodosLength === 0
      ? 'opacity: 0; &:hover { cursor: default }'
      : '&:hover { cursor: pointer }'
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
  readonly: true;

  &::placeholder {
    color: rgb(235, 235, 235);
    font-style: italic;
  }
`