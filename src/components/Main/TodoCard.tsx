import React from 'react';
import { CardWrapper, Todo, SetTodoStateImageContainer, SetTodoStateImage, RemoveButton, EditTodo } from '@styled/Main/TodoCard';
import { prototype } from 'stream';

interface Props {
  info: Task;
  todoRef: any;
  setTodoState(event): void;
  removeTodo(event): void;
  isEdit: boolean;
  changeToEditTodo(prevInfo): void;
  inputToEditTodo(event): void;
  editTodo(event): void;
  editValue: string;
}

const TodoCard: React.SFC<Props> = props => {
  return (
    <CardWrapper>
      <SetTodoStateImageContainer>
        <SetTodoStateImage
          id={props.info.id}
          alt={`${props.info.isComplete}`}
          onClick={props.setTodoState}
          isComplete={props.info.isComplete} />
      </SetTodoStateImageContainer>
      <Todo
        readOnly={!props.isEdit}
        value={props.isEdit ? props.editValue : props.info.todo}
        onDoubleClick={() => props.changeToEditTodo(props.info)}
        onChange={props.inputToEditTodo}
        onKeyDown={props.editTodo} />
      <RemoveButton
        id={props.info.id}
        onClick={props.removeTodo}>X</RemoveButton>
    </CardWrapper>
  );
}

export default TodoCard;