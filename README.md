# JavaScript Scope Test

`var, let, const의 스코프`

<br/>

## Scope란

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
