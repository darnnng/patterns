class Target {
  request() {
    return "abc";
  }
}

class Adaptee {
  specificRequest() {
    return "cba";
  }
}

class Adapter extends Target {
  private adaptee: Adaptee;
  constructor(adaptee: Adaptee) {
    super();
    this.adaptee = adaptee;
  }
  request() {
    return this.adaptee.specificRequest().split("").reverse().join("");
  }
}
