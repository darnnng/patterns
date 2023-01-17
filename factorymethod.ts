interface IFlyingBirdFactory {
  create(): IFlyingBird;
}

interface IFlyingBird {
  fly(): void;
}

class DuckFactory implements IFlyingBirdFactory {
  create(): IFlyingBird {
    return new Duck();
  }
}

class Duck implements IFlyingBird {
  fly() {}
}
