import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import _ from 'lodash';
import * as todoActionCreators from '@modules/todo/actionCreators';
import { TodoCard, TodoInput  } from '@components/Main';
import { Header, Container, Footer, Link } from '@styled/Main/Main';
import { RootState } from '@modules/index';

const mapStateToProps = (state: RootState) => ({
  todoList: state.todo.todoList
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  todoActionCreators: bindActionCreators(todoActionCreators, dispatch)
});

interface Props {
  todoList: Array<Task>;
  todoActionCreators: typeof todoActionCreators;
}
interface State {
  todo: string;
}

class Main extends Component<Props, State> {
  state = {
    todo: ''
  }

  inputToDo = (event: React.FormEvent<HTMLInputElement>): void => {
    this.setState({
      todo: event.currentTarget.value
    });
  }

  addToDo = (event: React.KeyboardEvent): void => {
    if (event.keyCode === 13) {
      this.props.todoActionCreators.addTodo({
        id: `${this.state.todo}_${new Date().getTime()}`,
        todo: this.state.todo,
        isComplete: false
      });
      this.setState({
        todo: ''
      });
    }
  }

  setTodoState = (event: React.FormEvent<HTMLInputElement>) => {
    const id = event.currentTarget.id;
    if (event.currentTarget.alt === 'true')
      this.props.todoActionCreators.cancleCompletedTodo(id);
    else
      this.props.todoActionCreators.completeTodo(id);
  }

  render() {
    console.log(this.props.todoList);
    return (
      <Fragment>
        <Container>
          <Header>todos</Header>
          <TodoInput
            value={this.state.todo}
            onChange={this.inputToDo}
            onEnter={this.addToDo} />
          {this.props.todoList.map(todo =>
            <TodoCard
              key={todo.id}
              info={todo}
              setTodoState={this.setTodoState} />
          )}
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);