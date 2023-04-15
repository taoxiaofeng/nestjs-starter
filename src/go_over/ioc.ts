class A {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class C {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

/**
 * 创建一个容器用来收集引用
 */
class Container {
  model: any;
  constructor() {
    this.model = {};
  }

  // 提供一个注入的方式
  provide(key: string, model: any) {
    this.model[key] = model;
  }

  get(key: string) {
    return this.model[key];
  }
}

// 实例化容器
const container = new Container();

// 注入A
container.provide("a", new A("张三"));

// 注入C
container.provide("c", new C("李四"));

class B {
  a: any;
  c: any;
  /**
   * 通过构造函数注入
   * @param container 依赖注入容器
   * 在引入IOC容器后，B与A的代码逻辑已经解耦，可以单独拓展其他功能，也可以方便地加入其他模块C。
   * 所以在面对复杂的后端业务逻辑中，引入IOC可以降低组件之间的耦合度，实现系统各层之间的解耦，减少维护与理解成本。
   */
  constructor(container: Container) {
    this.a = container.get("a");
    this.c = container.get("c");
  }
}
