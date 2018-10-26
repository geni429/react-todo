import React from 'react';
import { CardWrapper, Todo, SetTodoStateImageContainer, SetTodoStateImage, RemoveButton } from '@styled/Main/TodoCard';

interface Props {
  info: Task;
  setTodoState(event): void;
  removeTodo(event): void;
}

const TodoCard: React.SFC<Props> = props =>
  <CardWrapper>
    <SetTodoStateImageContainer>
      <SetTodoStateImage
        id={props.info.id}
        alt={`${props.info.isComplete}`}
        onClick={props.setTodoState}
        isComplete={props.info.isComplete} />
    </SetTodoStateImageContainer>
    <Todo>{props.info.todo}</Todo>
    <RemoveButton
      id={props.info.id}
      onClick={props.removeTodo}>X</RemoveButton>
  </CardWrapper>

export default TodoCard;