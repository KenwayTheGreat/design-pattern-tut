class Observable {
  observers: any[];
  constructor() {
    this.observers = [];
  }

  subscribe(func: any) {
    this.observers.push(func);
  }

  unsubscribe(func: any) {
    this.observers = this.observers.filter(observer => observer !== func);
  }

  notify(data: any) {
    this.observers.forEach(observer => observer(data));
  }
}
  export default Observable;