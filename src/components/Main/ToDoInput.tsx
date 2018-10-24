import React from 'react';
import { InputWrapper, Input, CheckAllButtonWrapper, CheckAllButtonImg } from '@styled/Main/ToDoInput';
import checkAllButtonChecked from './res/check-all-button-checked.png';
import checkComplete from './res/check_complete.png';
import checkNotComplete from './res/check_not_complete.png';

interface Props {
  value: string;
  onChange(event: React.FormEvent<HTMLInputElement>): void;
  onEnter(event: React.KeyboardEvent): void;
}

const ToDoInput: React.SFC<Props> = props =>
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

export default ToDoInput;