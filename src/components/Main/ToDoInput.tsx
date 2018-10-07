import React from 'react';
import { InputWrapper, Input, ExpendButtonWrapper, ExpendButton, ExpendButtonImg } from '@styled/Main/ToDoInput';
import expandButtonOff from './res/expand-button-off.png';

const ToDoInput = () =>
  <InputWrapper>
    <ExpendButtonWrapper>
      <ExpendButton>
        <ExpendButtonImg src={expandButtonOff} />
      </ExpendButton>
    </ExpendButtonWrapper>
    <Input />
  </InputWrapper>

export default ToDoInput;