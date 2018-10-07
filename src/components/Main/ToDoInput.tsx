import React from 'react';
import { InputWrapper, Input, ExpendButtonWrapper, ExpendButton, ExpendButtonImg } from '@styled/Main/ToDoInput';
import expandButtonOff from './res/expand-button-off.png';

const ToDoInput = () =>
  <InputWrapper>
    <ExpendButtonWrapper>
      <ExpendButtonImg src={expandButtonOff} />
    </ExpendButtonWrapper>
    <Input placeholder='What needs to be done?' />
  </InputWrapper>

export default ToDoInput;