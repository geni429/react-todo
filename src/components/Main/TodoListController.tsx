import React, { SFC } from 'react';
import { TodoListControllerWrapper, TodoListControllerWrapperStyleDiv, RemainTodoCount, FilterByStateWrapper, FilterByStateButton, ClearCompletedButton } from '@styled/Main/TodoListController';

interface Props {
  todoCount: number;
  activeTodoCount: number;
  clearCompletedTodos(): void;
}

const TodoListController: SFC<Props> = props =>
  <TodoListControllerWrapper todoCount={props.todoCount}>
    <TodoListControllerWrapperStyleDiv index={0}>
      <RemainTodoCount>{props.activeTodoCount} items left</RemainTodoCount>
      <FilterByStateWrapper>
        <FilterByStateButton>All</FilterByStateButton>
        <FilterByStateButton>Active</FilterByStateButton>
        <FilterByStateButton>Completed</FilterByStateButton>
      </FilterByStateWrapper>
      <ClearCompletedButton
        completedTodoCount={props.todoCount - props.activeTodoCount}
        onClick={props.clearCompletedTodos}>
        Clear completed
      </ClearCompletedButton>
    </TodoListControllerWrapperStyleDiv>
    <TodoListControllerWrapperStyleDiv index={1} />
    <TodoListControllerWrapperStyleDiv index={2} />
  </TodoListControllerWrapper>

export default TodoListController;