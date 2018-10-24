import React from 'react';
import { CardWrapper, ToDo, CompleteCheckImageContainer, CompleteCheckImage, CompleteCheckBox, DeleteButton } from '@styled/Main/ToDoCard';

interface Props {
  info: Task;
  onComplete(event): void;
}

const ToDoCard: React.SFC<Props> = props =>
  <CardWrapper>
    <CompleteCheckImageContainer>
      <CompleteCheckImage />
    </CompleteCheckImageContainer>
    <ToDo>{props.info.todo}</ToDo>
    <DeleteButton id={props.info.id} />
  </CardWrapper>

export default ToDoCard;