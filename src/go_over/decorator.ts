type DecorProps = {
  name?: string;
  age?: number;
};

// const decorator: ClassDecorator = (target) => {
//   // console.log(`target -- `, target);
//   // 可以通过prototype添加一些属性、方法
//   target.prototype.name = '张三';
//   target.prototype.job = '程序员';
// };

/**
 * 装饰器 就相当于一个函数，把当前的类作为参数传入
 * 类似于 doc(Demo)
 */
// @decorator // 类装饰器
// class Decor {
//   constructor() {
//     // console.log(`Decor -- `, this);
//   }
// }

/**
 * 实例化Demo
 * 注：de 需要声明类型，否则获取不到name属性
 */
// const de: DecorProps = new Decor();
// console.log(de.name); // 张三

/** 属性装饰器案例 */
const decorator: PropertyDecorator = (target: any, key: string | symbol) => {
  // console.log(`key -- `, key);
  // 可以通过prototype添加一些属性、方法
  target[key] = '张三';
  // console.log(`target -- `, target);
};

/** 方法装饰器案例 */
const methodDecorator: MethodDecorator = (target: any, key: string | symbol, descriptor: PropertyDescriptor) => {
  console.log(`methodDecorator -- `, target, key, descriptor);
};

/** 参数装饰器案例 */
const parameterDecorator: ParameterDecorator = (target: any, key: string | symbol, index: number) => {
  console.log(`parameterDecorator -- `, target, key, index);
};

class Decor {
  @decorator // 属性装饰器
  public name: string;
  constructor() {
    this.name = '张三';
  }

  // 使用方法装饰器
  @methodDecorator
  public getName(name:string, @parameterDecorator age:number): string {  // 使用参数装饰器
    return this.name;
  }
}
