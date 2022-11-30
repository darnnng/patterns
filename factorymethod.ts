// Фабричный метод — это порождающий паттерн проектирования,
// который определяет общий интерфейс для создания объектов в суперклассе, 
// позволяя подклассам изменять тип создаваемых объектов.

//Паттерн Фабричный метод предлагает создавать объекты не напрямую, используя оператор new,
// а через вызов особого фабричного метода.Объекты всё равно будут создаваться 
//при помощи new, но делать это будет фабричный метод.

//все возвращаемые объекты должны иметь общий интерфейс.
// Подклассы смогут производить объекты различных классов, следующих одному и тому же интерфейсу.


//общий интерфейс для классов Dove и Duck
interface IFlyingBird { /**/ }

class Dove implements IFlyingBird { /**/ }
class Duck implements IFlyingBird { /**/ }

//абстрактный фабричный метод

interface IFlyingBirdFactory {
    create(): IFlyingBird 
  }

//реализация его в конкретных классах (фабриках)

class DoveFactory implements IFlyingBirdFactory {
    create(): IFlyingBird {
      return new Dove();
    }
  }
  
class DuckFactory implements IFlyingBirdFactory {
    create(): IFlyingBird {
      return new Duck();
    }
  }

// const duckFactory = new DuckFactory();
// const duck = DuckFactory.create();