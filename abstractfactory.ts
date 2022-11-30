// Абстрактная фабрика — это порождающий паттерн проектирования,
//  который позволяет создавать семейства связанных объектов, 
//  не привязываясь к конкретным классам создаваемых объектов.


//???классы создатели в фабричном методе могут делать что-нибудь и кроме просто создания объектов, 
//в отличии от абстрактной фабрики. Она исключительно для генерации объектов.

//пример из factory method подходит

abstract class Axe { /**/ }
abstract class Pickaxe { /**/ }
abstract class Shovel { /**/ }

class StoneAxe extends Axe { /**/ }
class StonePickaxe extends Pickaxe { /**/ }
class StoneShovel extends Shovel { /**/ }
class IronAxe extends Axe {/**/ }
class IronPickaxe extends Pickaxe {/**/}
class IronShovel extends Shovel {/**/ }

//абстрактная фабрика

interface IToolFactory {
    createAxe(): Axe {}
    createPickaxe(): Pickaxe {}
    createShovel(): Shovel {}
  }

//фабрики, реализующие абстрактную фабрику

class StoneToolFactory implements IToolFactory {
    createAxe(): Axe {
      return new StoneAxe();
    }
    createPickaxe(): Pickaxe {
      return new StonePickaxe();
    }
    createShovel(): Shovel {
      return new StoneShovel();
    }
  }
  
  class IronToolFactory implements IToolFactory {
    createAxe(): Axe {
      return new IronAxe();
    }
    createPickaxe(): Pickaxe {
      return new IronPickaxe();
    }
    createShovel(): Shovel {
      return new IronShovel();
    }
  }

const toolFactory = new StoneToolFactory();
toolFactory.createAxe()