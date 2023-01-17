class Context {
  private strategy: Strategy;
  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }
  public setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }
}

interface Strategy {
  doSmth(data: string[]): string[];
}

class StrategyA implements Strategy {
  public doSmth(data: string[]): string[] {
    return data;
  }
}

class StrategyB implements Strategy {
  public doSmth(data: string[]): string[] {
    return data.reverse();
  }
}

/////
const context = new Context(new StrategyA());
