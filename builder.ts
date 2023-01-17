interface Builder {
  produceWalls(): void;
  producePool(): void;
}

class Home {
  parts: string[] = [];
}

class ConcreteBuilder implements Builder {
  private product: Home;
  constructor() {
    this.reset();
  }

  public reset(): void {
    this.product = new Home();
  }

  public produceWalls(): void {
    this.product.parts.push("walls");
  }

  public producePool(): void {
    this.product.parts.push("pool");
  }

  public getProduct(): Home {
    const result = this.product;
    this.reset();
    return result;
  }
}

class Director {
  private builder: Builder;

  public setBuilder(builder: Builder): void {
    this.builder = builder;
  }

  public buildSimpleHouse(): void {
    this.builder.produceWalls();
  }

  public buildSuperHouse(): void {
    this.builder.produceWalls();
    this.builder.producePool();
  }
}

//usage
const builder = new ConcreteBuilder();
const director = new Director();
director.setBuilder(builder);
director.buildSimpleHouse();
builder.getProduct();
