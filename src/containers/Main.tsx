import React, { Component, Fragment } from 'react';
import { ToDoInput } from '@components/Main';
import { Header } from '@styled/Main/Main';

class Main extends Component {
  render() {
    return (
      <Fragment>
        <Header>todos</Header>
        <ToDoInput />
      </Fragment>
    );
  }
}

export default Main;