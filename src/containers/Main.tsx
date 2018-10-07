import React, { Component, Fragment } from 'react';
import { ToDoInput } from '@components/Main';
import { Header, Container, Footer, Link } from '@styled/Main/Main';

class Main extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Header>todos</Header>
          <ToDoInput />
        </Container>
        <Footer>
          Double-click to edit a todo
          <br />
          Created by <Link href='https://github.com/geni429'>geni429</Link>
          <br />
          Part of <Link href='http://todomvc.com/'>TodoMVC</Link>
        </Footer>
      </Fragment>
    );
  }
}

export default Main;