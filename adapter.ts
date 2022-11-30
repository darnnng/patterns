//Адаптер — это структурный паттерн проектирования, который позволяет объектам с несовместимыми интерфейсами работать вместе.

//Вы можете создать адаптер. Это объект-переводчик, который трансформирует интерфейс 
//или данные одного объекта в такой вид, чтобы он стал понятен другому объекту.
//При этом адаптер оборачивает один из объектов, так что другой объект даже не знает о наличии первого. 

//Адаптер выступает прослойкой между двумя объектами, превращая вызовы одного в вызовы понятные другому.

class Target {
    public request(): string {
        return 'Target: The default target\'s behavior.';
    }
}

class Adaptee {
    public specificRequest(): string {
        return '.eetpadA eht fo roivaheb laicepS';
    }
}

class Adapter extends Target {
    private adaptee: Adaptee;

    constructor(adaptee: Adaptee) {
        super();
        this.adaptee = adaptee;
    }

    public request(): string {
        const result = this.adaptee.specificRequest().split('').reverse().join('');
        return `Adapter: (TRANSLATED) ${result}`;
    }
}