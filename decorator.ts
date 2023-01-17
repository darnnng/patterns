function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@sealed
class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  sayHi(): void {
    console.log(`hi ${this.name}`);
  }
}
