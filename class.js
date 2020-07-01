'use strict';

//Object-oriented programming
//class: template
//object: instance of a class
//JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

//ES6에서 새로 추가된 template를 만드는 방법


//1. Class declarations
class Person {
    //constructor
    constructor(name, age) {
        //fields
        this.name = name;
        this.age = age;
    }

    //methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();


//2. Getter and setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName; //1st
        this.lastName = lastName; //2nd
        this.age = age;
    }

    // get age(){
    //     return this.age;
    // }

    // set age(value) {
    //     this.age = value;
    // }

    //이렇게만 선언하면 call stack이 초과되는 error 발생
    //age라는 getter를 정의하는 순간, 
    //this.age라는 메모리에 올라가 있는 데이터를 읽어오는 것이 아니라
    //바로 getter를 호출하게 된다.

    //age라는 setter를 정의하는 순간, 
    //=(equal sign)을 호출할 때, 값을 할당할 때,
    //바로 메모리의 값을 할당하는 것이 아니라 value라는 factor를 호출하게 된다.
    //그 말은 setter안에서 전달된 value를 호출할 때 this.age를 할당할 때.
    //메모리의 값을 update하는 것이 아니라 setter를 다시 호출하게 된다.

    //setter를 호출하는 순간 다시 setter를 실행하게 되는 infinite loop에 빠지게 됨.
    
    //JavaScript의 function 선언 특성에 의해 선언과 동시에 실행이 됨.
    //이 상황을 방지하려면 getter와 setter의 변수명을 생성자와 좀 다르게 지정해 주어야 함.

    get age() {
        return this._age; //3rd variable
    }

    set age(value) {
        // if(value<0) {
        //     throw Error('age can not be negative');
        // }
        this._age = value < 0 ? 0 : value; // Ternary operator
    }

}

const user1 = new User('Steve', 'Job', -1); //non-safety object declaration
console.log(user1.age);


//3. Fields(public, private)
//Too soon!
//https://developer.mozilla.org/en-US/docs/Web/Reference
//최근 추가된 기능이라 아직 다수의 JS 개발자들이 쓰고 있지는 않다
//추가되었다 라고 이해만 하고 가자

class Experiment {
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

//4. Static properties and methods
//Too soon!
//이런게 있다 정도로
//class는 새 object 만들 때 마다 복제되어 데이터만 변경(상태)
//간혹 object에 상관없이 data에 상관없이 클래스가 가진 고유한 값과 
//data에 상관없이 동일하게 반복되어 사용되어지는 method가 있을 수 있다.
//class 자체에 연결되어 있는 static

class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); 
// static은 object마다 할당되는 것이 아니라 class 자체가 갖고 있는 것

console.log(Article.publisher);
Article.printPublisher();


//상속, 다형성
//직사각형, 삼각형, 동그라미를 그릴 수 있다고 가정
//이들을 class로 정의하려면??
//이들을 각각 나타낼 수 있는 속성을 보면..
//너비, 높이, 색상 등등등..
//색칠할 수 있고 그 밖에 할 수 있는 여러 메서드들이 있을 것
//가만히 보아하니 각 도형마다 계속 반복할 수 있는 것들이다.
//각각 따로 만들어서 동일한 코드를 반복할 것이냐?
//공통점을 따로 빼서 한 번에 빡 정의하고 두고두고 쓸 것이냐?
//각 도형은 부피. shape의 특성(공통점)을 가진다
//재사용 가능. 유지보수가 쉽다

//5. Inheritance
//a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());


class Triangle extends Shape {
    draw() {
        console.log('▲');
    }
    getArea(){
        return (this.width * this.height) / 2
    }
    toString() {
        return `Triangle color: ${this.color}`;
    }
}
const triangle = new Triangle(20,20,'red');
triangle.draw();
console.log(triangle.getArea());


//6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference