abstract class UI {
  protected backend: Backend;

  constructor(backend: Backend) {
    this.backend = backend;
  }

  abstract render(): void;
}

class AndroidUI extends UI {
  public render() {
    const data = this.backend.getData();
    /** */
  }
}

class IPhoneUI extends UI {
  public render() {
    const data = this.backend.getData();
    /** */
  }
}

abstract class Backend {
  abstract getData(): string;
}

class MobileBackend implements Backend {
  public getData() {
    return "data";
  }
}

///////////
const mobileBackend = new MobileBackend();
const androidUI = new AndroidUI(mobileBackend);
androidUI.render();
