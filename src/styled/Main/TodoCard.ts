import styled from 'styled-components';
import completedTodo from '@components/Main/res/completed_todo.png';
import activeTodo from '@components/Main/res/active_todo.png';

interface CheckTodoStateProps {
  isComplete: boolean;
}
interface EditTodoProps {
  isEdit: boolean;
}

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

  &:hover {
    & > button {
      opacity: 1;
    }
  }
`
export const Todo = styled.input`
  display: flex;
  align-items: center;
  position: relative;
  width: calc(100% - 100px);
  margin-left: 10px;
  margin-right: 10px;
  border: 0;
  outline: none;
  font-size: 24px;
  font-weight: 100;
  word-break: break-all;
`
export const EditTodo = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  font-size: 24px;
  font-weight: 100;

  ${
    (props: EditTodoProps) =>
      props.isEdit
      ? 'display: inline;'
      : 'display: none;'
  }
`
export const SetTodoStateImageContainer = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
`
export const SetTodoStateImage = styled.img`
  position: absolute;
  margin: auto;
  width: 30px;
  height: 30px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${(props: CheckTodoStateProps) =>
    props.isComplete
    ? `content: url("http://localhost:3000/${completedTodo}");`
    : `content: url("http://localhost:3000/${activeTodo}");`
  }
`
export const CompleteCheckBox = styled.input.attrs({
  type: 'checkbox'
})`
  display: none;
  box-sizing: border-box;
  margin: 4px 0 0;
  padding: 0;
`
export const RemoveButton = styled.button`
  width: 40px;
  height: 40px;
  font-size: 15px;
  font-weight: lighter;
  color: #ff686882;
  border: 0;
  outline: none;
  background: none;
  opacity: 0;
  transition: .3s;

  &:hover {
    font-weight: bold;
    color: #ff6868;
  }
`