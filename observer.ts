interface ISubject {
  subscribe(observer: Observer): void;
  unsubscribe(observer: Observer): void;
  notify(): void;
}

interface IObserver {
  update(): void;
}

class Observer implements IObserver {
  constructor(id: number) {}
  update() {}
}

class Subject implements ISubject {
  private observers: Observer[] = [];
  subscribe(observer: Observer) {
    this.observers.push(observer);
  }
  unsubscribe(observer: Observer) {
    const index = this.observers.indexOf(observer);
    this.observers.splice(index, 1);
  }
  notify() {
    this.observers.forEach((elem) => elem.update());
  }
}

////////
const obs = new Observer(1);
const subj = new Subject();
subj.subscribe(obs);
