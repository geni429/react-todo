import styled from 'styled-components';
import completedTodo from '@components/Main/res/completed_todo.png';
import activeTodo from '@components/Main/res/active_todo.png';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 2px 5px;
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
export const TodoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`
export const Todo = styled<{ isEdit: boolean; }, 'div'>('div')`
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 10px;
  font-size: 24px;
  font-weight: 100;
  word-break: break-all;

  ${
    props =>
      props.isEdit
      ? 'display: none;'
      : 'display: flex;'
  }
`
export const EditTodoInput = styled<{ isEdit: boolean; }, 'input'>('input')`
  width: 100%;
  height: 50px;
  padding: 0 10px;
  border: 1px solid #ddd;
  outline: none;
  font-size: 24px;
  font-weight: 100;
  box-sizing: border-box;

  ${
    props =>
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
export const SetTodoStateImage = styled<{ isEdit: boolean; isComplete: boolean; }, 'img'>('img')`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30px;
  height: 30px;
  margin: auto;

  ${
    props => {
      if (!props.isEdit) {
        if (props.isComplete)
          return `content: url("http://localhost:3000/${completedTodo}");`;
        else
          return `content: url("http://localhost:3000/${activeTodo}");`;
      } else {
        return 'display: none';
      }
    }
  }
`
export const RemoveButton = styled<{ isEdit: boolean; }, 'button'>('button')`
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

  ${
    props =>
      props.isEdit
      ? 'display: none'
      : 'display: inline-block'
  }
`