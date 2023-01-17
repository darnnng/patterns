interface Command {
  execute(): any;
  undo(): any;
}

export class Television {
  state: boolean = false;
  on() {
    this.state = true;
  }
  off() {
    this.state = false;
  }
}

class TelevisionOnCommand implements Command {
  television: Television;
  constructor(television: Television) {
    this.television = television;
  }
  execute() {
    this.television.on();
  }
  undo() {
    this.television.off();
  }
}

class Remote {
  command: Command;
  setCommand(command) {
    this.command = command;
  }

  onButtonClick() {
    this.command.execute();
  }
}
