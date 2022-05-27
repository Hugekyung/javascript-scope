# JavaScript Scope Test

`var, let, const의 스코프`

## 1. Scope란

-   스코프는 참조 대상 식별자(identifier, 변수, 함수의 이름과 같이 어떤 대상을 다른 대상과 구분하여 식별할 수 있는 유일한 이름)를 찾아내기 위한 규칙이다.
-   자바스크립트는 이 규칙대로 식별자를 찾는다.
-   아래의 경우, foo 함수 내부에서 선언된 변수 x는 함수 안에서만 유효하기 때문에 함수 foo 내부에서만 참조할 수 있고 함수 외부에서는 참조할 수 없다. 이러한 규칙을 스코프라고 한다.

```js
var x = "global";

function foo() {
    var x = "function scope";
    console.log(x);
}

foo(); // ?
console.log(x); // ?
```

<br/>

## 2. 스코프의 구분

`전역 스코프(Global scope)`<br/>
코드 어디에서든지 참조할 수 있다.<br/><br/>

`지역 스코프(Local scope or Function-level scope)`<br/>
함수 코드 블록이 만든 스코프로 함수 자신과 하위 함수에서만 참조할 수 있다.

<br/>

## 3. 자바스크립트의 스코프

-   자바스크립트는 기본적으로 함수 레벨 스코프(function-level scope)를 따른다.
-   함수 레벨 스코프란 함수 코드 블록 내에서 선언된 변수는 함수 코드 블록 내에서만 유효하고 함수 외부에서는 유효하지 않다(참조할 수 없다)는 것이다.
-   단, ECMAScript 6에서 도입된 let keyword를 사용하면 블록 레벨 스코프를 사용할 수 있다.

```js
let x = "global";

if (x === "global") {
    let x = "local";
    console.log(x); // local
}

console.log(x); // global
```
