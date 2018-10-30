import React, { SFC } from 'react';
import { TodoListControllerWrapper, TodoListControllerWrapperStyleDiv, RemainTodoCount, FilterByStateWrapper, FilterByStateButton, ClearCompletedButton } from '@styled/Main/TodoListController';

interface Props {
  todoCount: number;
  activeTodoCount: number;
  clearCompletedTodos(): void;
  filter: number;
  changeFilter(event): void;
}

const TodoListController: SFC<Props> = props =>
  <TodoListControllerWrapper todoCount={props.todoCount}>
    <TodoListControllerWrapperStyleDiv index={0}>
      <RemainTodoCount>{props.activeTodoCount} items left</RemainTodoCount>
      <FilterByStateWrapper>
        <FilterByStateButton onClick={props.changeFilter} value={0} selected={props.filter === 0}>All</FilterByStateButton>
        <FilterByStateButton onClick={props.changeFilter} value={1} selected={props.filter === 1}>Active</FilterByStateButton>
        <FilterByStateButton onClick={props.changeFilter} value={2}selected={props.filter === 2}>Completed</FilterByStateButton>
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