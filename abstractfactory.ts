abstract class Chair {
  /** */
}

class WoodenChair extends Chair {
  /** */
}
class PlasticChair extends Chair {
  /** */
}

interface IFactory {
  createChair(): Chair;
}

class WoodenFactory implements IFactory {
  createChair(): Chair {
    return new WoodenChair();
  }
}

class PlasticFactory implements IFactory {
  createChair(): Chair {
    return new PlasticChair();
  }
}
