import React, { Component, Fragment, FormEvent } from 'react';
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
  editTargetId: string;
  editTargetValue: string;
  editTargetIsComplete: boolean;
}

class Main extends Component<Props, State> {
  state = {
    todo: '',
    editTargetId: '',
    editTargetValue: '',
    editTargetIsComplete: false
  }
  todoRef = React.createRef();

  inputTodo = (event: React.FormEvent<HTMLInputElement>): void => {
    this.setState({
      todo: event.currentTarget.value
    });
  }

  addTodo = (event: React.KeyboardEvent): void => {
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

  setTodoState = (event: React.FormEvent<HTMLInputElement>): void => {
    const id = event.currentTarget.id;
    if (event.currentTarget.alt === 'true')
      this.props.todoActionCreators.cancleCompletedTodo(id);
    else
      this.props.todoActionCreators.completeTodo(id);
  }

  removeTodo = (event: React.FormEvent<HTMLInputElement>): void => {
    const id = event.currentTarget.id;
    this.props.todoActionCreators.removeTodo(id);
  }

  isAllTodosCompleted = (): boolean => {
    return !this.props.todoList.some(todo => !todo.isComplete);
  }

  setAllTodos = (): void => {
    if (this.props.todoList.length) {
      if (this.isAllTodosCompleted())
        this.props.todoActionCreators.cancleCompletedAllTodos();
      else
        this.props.todoActionCreators.completeAllTodos();
    }
  }

  changeToEditTodo = (prevInfo: Task): void => {
    this.setState({
      editTargetId: prevInfo.id,
      editTargetValue: prevInfo.todo,
      editTargetIsComplete: prevInfo.isComplete
    });
  }

  inputToEditTodo = (event: React.FormEvent<HTMLInputElement>): void => {
    this.setState({
      editTargetValue: event.currentTarget.value
    });
  }

  editTodo = (event: React.KeyboardEvent): void => {
    if (event.keyCode === 13) {
      this.props.todoActionCreators.editTodo({
        id: this.state.editTargetId,
        todo: this.state.editTargetValue,
        isComplete: this.state.editTargetIsComplete
      });
      this.setState({
        editTargetId: '',
        editTargetValue: '',
        editTargetIsComplete: false
      });
    }
  }

  render() {
    return (
      <Fragment>
        <Container>
          <Header>todos</Header>
          <TodoInput
            value={this.state.todo}
            onChange={this.inputTodo}
            onEnter={this.addTodo}
            allTodosLength={this.props.todoList.length}
            allTodosState={this.isAllTodosCompleted()}
            setAllTodos={this.setAllTodos} />
          {
            this.props.todoList.map(todo => {
              return (
                <TodoCard
                  key={todo.id}
                  info={todo}
                  todoRef={this.todoRef}
                  setTodoState={this.setTodoState}
                  removeTodo={this.removeTodo}
                  isEdit={todo.id === this.state.editTargetId}
                  changeToEditTodo={this.changeToEditTodo}
                  inputToEditTodo={this.inputToEditTodo}
                  editTodo={this.editTodo}
                  editValue={this.state.editTargetValue}/>
              );
            })
          }
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