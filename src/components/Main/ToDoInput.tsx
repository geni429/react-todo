import React from 'react';
import { InputWrapper, Input, CheckAllButtonWrapper, CheckAllButtonImg } from '@styled/Main/ToDoInput';
import checkAllButtonChecked from './res/check-all-button-checked.png';

const ToDoInput = () =>
  <InputWrapper>
    <CheckAllButtonWrapper>
      <CheckAllButtonImg src={checkAllButtonChecked} />
    </CheckAllButtonWrapper>
    <Input placeholder='What needs to be done?' />
  </InputWrapper>

export default ToDoInput;