interface Target {
  target: HTMLInputElement;
}
interface Task {
  id: string;
  todo: string;
  isComplete: boolean;
}

// Action
interface Action<T extends string> {
  type: T;
}
interface ActionWithPayload<T extends string, P> {
  type: T;
  payload: P;
}

// Image load
declare module '*.png' {
  const value: any;
  export = value;
}
declare module '*.jpg' {
  const value: any;
  export = value;
}