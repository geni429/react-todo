import React from 'react';
import { InputWrapper, Input, SetAllTodosButton } from '@styled/Main/TodoInput';

interface Props {
  value: string;
  onChange(event: React.FormEvent<HTMLInputElement>): void;
  onEnter(event: React.KeyboardEvent): void;
  allTodosLength: number;
  allTodosState: boolean;
  setAllTodos(): void;
}

const TodoInput: React.SFC<Props> = props =>
  <InputWrapper>
    <SetAllTodosButton
      allTodosLength={props.allTodosLength}
      state={props.allTodosState}
      onClick={props.setAllTodos}>〉</SetAllTodosButton>
    <Input
      placeholder='What needs to be done?'
      value={props.value}
      onChange={props.onChange}
      onKeyDown={props.onEnter} />
  </InputWrapper>

export default TodoInput;