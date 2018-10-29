import styled from 'styled-components';

interface TodoListControllerProps {
  todoCount?: number;
}
interface StyleDivProps {
  index: number;
}
interface ClearCompletedButtonProps {
  completedTodoCount: number;
}

export const TodoListControllerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 35px;

  ${
    (props: TodoListControllerProps) =>
      props.todoCount === 0
      ? 'display: none;'
      : 'display: block;'
  }
`
export const TodoListControllerWrapperStyleDiv = TodoListControllerWrapper.extend`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);

  ${
    (props: StyleDivProps) => {
      switch (props.index) {
        case 0:
          return 'z-index: 2; display: flex; flex-direction: row; align-items: center; top: 0; width: 100%; box-sizing: border-box';
        case 1:
          return 'z-index: 1; top: 5px; width: 98%;';
        case 2:
          return 'z-index: 0; top: 10px; width: 96%;';
      }
    }
  }
`
export const RemainTodoCount = styled.div`
  position: absolute;
  left: 10px;
  font-size: 14px;
  color: rgb(170, 170, 170);
  font-weight: 100;
`
export const FilterByStateWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
`
export const FilterByStateButton = styled.button`
  height: 25px;
  margin: 0 5px;
  padding: 0 5px;
  border: 1px solid #fff;
  outline: none;
  background: none;
  font-size: 14px;
  color: rgb(170, 170, 170);
  font-weight: 100;

  &:hover {
    border: 1px solid #ffb6b682;
    border-radius: 2px;
    cursor: pointer;
  }
`
export const ClearCompletedButton = styled.div`
  position: absolute;
  right: 10px;
  text-align: center;
  font-size: 14px;
  color: rgb(170, 170, 170);
  font-weight: 100;

  &:hover {
    cursor: pointer;
  }

  ${
    (props: ClearCompletedButtonProps) =>
      props.completedTodoCount > 0
      ? 'display: block;'
      : 'display: none;'
  }
`