//Итератор — это поведенческий паттерн проектирования, который даёт возможность последовательно обходить элементы 
//составных объектов, не раскрывая их внутреннего представления.

//Идея паттерна Итератор состоит в том, чтобы вынести поведение обхода коллекции из самой коллекции в отдельный класс.

interface IteratorResult<T> {
    done: boolean;
    value: T;
}

class Component {
    constructor(public name: string) {}
}

class Frame implements Iterator<Component> {
    private pointer = 0;

    constructor(
        public name: string,
        public components: Component[]
    ) {}

    public next(): IteratorResult<Component> {
        if (this.pointer < this.components.length) {
            return {
                done: false,
                value: this.components[this.pointer++],
            };
        } else {
            return {
                done: true,
                value: null,
            };
        }
    }
}

let frame = new Frame('Door', [
    new Component('top'),
    new Component('bottom'),
    new Component('left'),
    new Component('right'),
]);

//{ done: false, value: Component { name: 'top' } }
let iteratorResult1 = frame.next();
