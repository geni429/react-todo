import React from 'react';
import { InputWrapper, Input, CheckAllButtonWrapper, CheckAllButtonImg } from '@styled/Main/TodoInput';
import checkAllButtonChecked from './res/check-all-button-checked.png';

interface Props {
  value: string;
  onChange(event: React.FormEvent<HTMLInputElement>): void;
  onEnter(event: React.KeyboardEvent): void;
}

const TodoInput: React.SFC<Props> = props =>
  <InputWrapper>
    <CheckAllButtonWrapper>
      <CheckAllButtonImg src={checkAllButtonChecked} />
    </CheckAllButtonWrapper>
    <Input
      placeholder='What needs to be done?'
      value={props.value}
      onChange={props.onChange}
      onKeyDown={props.onEnter} />
  </InputWrapper>

export default TodoInput;