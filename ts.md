# 字符串
## 1. ``中可以换行
```js
const a = `我
有个
苹果`;
```
## 2. ``中可加变量
```js
const firstName = 'li';
const lastName = 'yang';
const myName = `my name is ${firstName} ${lastName}`;
```
## 3. ``可拆分字符串
```js
    function sayName(template,name:string,age:number){}
    var name='xiaoming';
    var age = 13;
    sayName`my name is ${name},my age is ${age}`
```
# 参数类型
## string number boolean any void(声明方法不需要返回值)
```js 
var name string = 'xiaoming';
function test ( name:string) : void {}
```
## 自定义类型
```js 
class Person = {
    name:string,
    age: number
}
var zhangsan:Person = new Person();
zhangsan.name = 'zhangsan';
zhangsan.age = 13;
```
## 可选参数
在方法的参数声明后，用问号标明此参数为可选参数。必须声明在必填参数之后
```js
function test(a: string, b?:string, c:string = 'cccc'){}
```
# rest and spread操作符 
用来声明任意数量的方法参数
## 用来声明任意数量的方法参数
```js
function test(...arg){};
const arg = [2,3,4];
test(...arg);
```
## 展开数组和对象
```js
function test(a, b, c){};
const arg = [1, 2 ,3];
test(...arg);
```
# generator 函数
控制函数的执行过程，手工暂停和恢复代码执行
```js
function* test(){
    let i = 0;
    yield i;
    i++;
    yield i;
}
const func1 = test();
func1.next().value; // 0
func1.next().value; // 1
```
# destructuring 析构表达式
通过表达式将对象或数组解析成任意数量的变量
```js
function getIBM (){
    return {
        code: 'IBM',
        price: {
            price1: 100,
            price2: 200
        }
    }
}
const {code : codex, price2: {price2} } = getIBM();
// codex = IBM, price2 = 200;
const arr1 = [1,2,3,4,5];
const [num1,,num3,...others] = arr1;
// num1 = 1, num3 = 3; others = [4,5]
```
# 循环
forEach for...in...  for...of...(支持对象，数组，breack，continue，return等) every
# 类
## 类的声明，访问控制符
1. pubic(默认,内部外部)
2. private(内部)
3. protected(继承，内部和子类)
## 构造函数
new的时候被调用
```js
class Person{
    constructor(public name:String){}
}
'等同于'
class Person2{
    constructor(name:String){}
    name;
}
```
## 继承
extends 获取继承类的所有属性和方法
super 调用父类的constructor
```js
class Joy extends Person{
    constructor(name:String,code:String){
        spuer(name); //子类必须调用父类的constructor
        this.code = code;
    }
    code:String
}
```
## 泛型
只能放某一类型的元素
```js
const workers : Array<Person> = [];
workers[0] = new Person('lili');
```
## 接口
1. interface 声明接口
```js
interface Iperson {
    name:String;
    age:Number;
}
class Person {
    constructor(public config: Iperson){}
}
const joy = new Person({
    name: 'zhangsan',
    age: 18
})
```
2. implements 声明方法
```js
interface Animal{
    eat();
}
class Sheep implements Animal {
    eat() {   // 必须实现这个方法
        console.log('吃草')
    }
}
```

