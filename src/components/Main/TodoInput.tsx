import React from 'react';
import { InputWrapper, Input, SelectAllButton } from '@styled/Main/TodoInput';

interface Props {
  value: string;
  onChange(event: React.FormEvent<HTMLInputElement>): void;
  onEnter(event: React.KeyboardEvent): void;
}

const TodoInput: React.SFC<Props> = props =>
  <InputWrapper>
    <SelectAllButton>〉</SelectAllButton>
    <Input
      placeholder='What needs to be done?'
      value={props.value}
      onChange={props.onChange}
      onKeyDown={props.onEnter} />
  </InputWrapper>

export default TodoInput;