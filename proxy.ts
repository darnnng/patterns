interface IResource {
  fetch(): void;
}

class Resource implements IResource {
  fetch(): void {
    /** */
  }
}

class ResourceProxy implements IResource {
  private resource: Resource;
  constructor() {
    this.resource = new Resource();
  }
  fetch(): void {
    console.log("start fetch method");
    this.resource.fetch();
  }
}
