class Singleton {
  private static instance: Singleton;
  private constructor() {
    Singleton.instance = this;
  }

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}
////
const s = Singleton.getInstance();
