import React from 'react';
import { CardWrapper, Todo, CheckTodoStateImageContainer, CheckTodoStateImage, DeleteButton } from '@styled/Main/TodoCard';

interface Props {
  info: Task;
  setTodoState(event): void;
}

const TodoCard: React.SFC<Props> = props =>
  <CardWrapper>
    <CheckTodoStateImageContainer>
      <CheckTodoStateImage
        id={`${props.info.id}`}
        alt={`${props.info.isComplete}`}
        onClick={props.setTodoState}
        isComplete={props.info.isComplete} />
    </CheckTodoStateImageContainer>
    <Todo>{props.info.todo}</Todo>
    <DeleteButton id={props.info.id} />
  </CardWrapper>

export default TodoCard;