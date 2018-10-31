import React from 'react';
import { CardWrapper, Todo, SetTodoStateImageContainer, SetTodoStateImage, RemoveButton, TodoWrapper, EditTodoInput } from '@styled/Main/TodoCard';

interface Props {
  info: Task;
  todoRef: any;
  setTodoState(event, id): void;
  removeTodo(event, id): void;
  isEdit: boolean;
  changeToEditTodo(prevInfo): void;
  inputToEditTodo(event): void;
  editTodo(event): void;
  editTodoWhenBlur(): void;
  editValue: string;
}

const TodoCard: React.SFC<Props> = props => {
  return (
    <CardWrapper>
      <SetTodoStateImageContainer>
        <SetTodoStateImage
          alt={`${props.info.isComplete}`}
          onClick={(event) => props.setTodoState(event, props.info.id)}
          isEdit={props.isEdit}
          isComplete={props.info.isComplete} />
      </SetTodoStateImageContainer>
      <TodoWrapper>
        <Todo
          isEdit={props.isEdit}
          onDoubleClick={() => props.changeToEditTodo(props.info)}>{props.info.todo}</Todo>
        <EditTodoInput
          isEdit={props.isEdit}
          value={props.isEdit ? props.editValue : props.info.todo}
          onChange={props.inputToEditTodo}
          onKeyDown={props.editTodo}
          onBlur={props.editTodoWhenBlur} />
      </TodoWrapper>
      <RemoveButton
        onClick={(event) => props.removeTodo(event, props.info.id)}
        isEdit={props.isEdit}>
        X
      </RemoveButton>
    </CardWrapper>
  );
}

export default TodoCard;