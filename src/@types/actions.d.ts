interface Action<T extends string> {
  type: T;
}
interface ActionWithPayload<T extends string, P> {
  type: T;
  payload: P;
}