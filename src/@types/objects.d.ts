interface Task {
  id: string;
  todo: string;
  isComplete: boolean;
}
interface TaskList extends Array<Task> {}