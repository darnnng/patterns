interface Mediator {
  notify(sender: object, event: string): void;
}

class BaseComponent {
  protected mediator: Mediator;

  constructor(mediator: Mediator) {
    this.mediator = mediator!;
  }
  public setMediator(mediator: Mediator): void {
    this.mediator = mediator;
  }
}

class ComponentSort extends BaseComponent {
  public doBubbleSorting(): void {
    /** */
    this.mediator.notify(this, "bubble");
  }

  public doQuickSorting(): void {
    /** */
    this.mediator.notify(this, "quick");
  }
  public doSomeLogic(): void {
    /** */
    this.mediator.notify(this, "smth");
  }
}

class ComponentSearch extends BaseComponent {
  public doSearching(): void {
    /** */
    this.mediator.notify(this, "search");
  }
}

//совместное поведение

class ConcreteMediator implements Mediator {
  private component1: ComponentSort;
  private component2: ComponentSearch;

  constructor(c1: ComponentSort, c2: ComponentSearch) {
    this.component1 = c1;
    this.component1.setMediator(this);
    this.component2 = c2;
    this.component2.setMediator(this);
  }

  public notify(sender: object, event: string): void {
    if (event === "smth") {
      this.component2.doSearching();
    }

    if (event === "search") {
      this.component1.doQuickSorting();
    }
  }
}

////////
const c1 = new ComponentSort();
const c2 = new ComponentSearch();
const mediator = new ConcreteMediator(c1, c2);
