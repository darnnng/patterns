//Наблюдатель — это поведенческий паттерн проектирования, который создаёт механизм подписки,
//позволяющий одним объектам следить и реагировать на события, происходящие в других объектах.

// Издатели те объекты, которые содержат важное или интересное для других состояние.
//  Остальные объекты, которые хотят отслеживать изменения этого состояния, назовём Подписчиками.

// Паттерн Наблюдатель предлагает хранить внутри объекта издателя список ссылок на объекты подписчиков, 
// причём издатель не должен вести список подписки самостоятельно. Он предоставит методы, с помощью которых 
// подписчики могли бы добавлять или убирать себя из списка.

/**
 * Интерфейс издателя объявляет набор методов для управлениями подписчиками.
 */
interface Subject {
    // Присоединяет наблюдателя к издателю.
    attach(observer: Observer): void;
    // Отсоединяет наблюдателя от издателя.
    detach(observer: Observer): void;
    // Уведомляет всех наблюдателей о событии.
    notify(): void;
}

class ConcreteSubject implements Subject {

    public state: number;
    private observers: Observer[] = [];

    public attach(observer: Observer): void {
        //...
    }

    public detach(observer: Observer): void {
        //..
    }
    public notify(): void {
        for (const observer of this.observers) {
            observer.update(this);
        }
    }

}

interface Observer {
    update(subject: Subject): void;
}

class ConcreteObserverA implements Observer {
    public update(subject: Subject): void {
       //..
    }
}

class ConcreteObserverB implements Observer {
    public update(subject: Subject): void {
        //..
    }
}



