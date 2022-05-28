# JavaScript Scope

`var 기반의 자바스크립트 기본 스코프`

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

## 3. 자바스크립트의 스코프 특징

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

<br/>

### `전역 스코프(Global scope)`

-   전역 변수의 사용은 변수 이름이 중복 사용이 가능
-   의도치 않은 재할당에 의한 상태 변화 가능성
-   위 두 상황이 발생할 수 있어 코드를 예측하기 어렵게 만드므로 사용을 억제하여야 한다.

<br/>

### `비 블록 레벨 스코프(Non block-level scope)`

-   자바스크립트는 블록 레벨 스코프를 사용하지 않으므로 함수 밖에서 선언된 변수는 코드 블록 내에서 선언되었다할지라도 모두 전역 스코프을 갖게된다.

```js
if (true) {
    var x = "global";
}
console.log(x); // global
```

<br/>

### `함수 레벨 스코프(Function-level scope)`

<br/>

`일반적인 함수레벨 스코프`

-   자바스크립트는 함수 레벨 스코프를 사용한다.
-   함수 내에서 선언된 매개변수와 변수는 함수 외부에서는 유효하지 않다.
-   따라서 변수 b는 지역 변수이다.

```js
var x = "global";

function func() {
    var y = "local";
}
func();

console.log(x); // global
console.log(y); // ReferenceError: y is not defined
```

<br/>

`전역변수와 지역변수명이 중복된 경우`

-   아래와 같이 전역변수x와 지역변수x가 중복선언된 경우, 지역변수를 우선 참조한다.

```js
var x = "global";

function func() {
    var x = "local";
    console.log(x);
}

func(); // local
console.log(x); // global
```

<br/>

`함수 내부에 존재하는 내부함수의 경우`

-   내부함수는 가장 인접한 스코프의 값을 따른다.
-   아래 상황에서 bar()함수는 foo()함수 내부에 있으며, bar()함수는 자신의 외부함수인 foo()함수의 x 변수를 참조할 수 있다.
-   자신이 선언되었을 시점의 스코프를 기준으로 실행하는 개념인 `클로저`와 비슷하다.

```js
var x = "global";

function foo() {
    var x = "local";
    console.log(x);

    function bar() {
        // 내부함수
        console.log(x); // local
    }

    bar();
}
foo();
console.log(x); // global
```

-   함수 내부에서 전역변수를 참조할 수 있으므로, 전역변수의 값도 변경할 수 있다.
-   또, 전역변수는 물론 상위함수에서 선언한 변수에도 접근과 변경이 가능하다.

```JS
var x = 10;

function foo() {
    var x = 100;
    console.log(x); // 100

    function bar() {
        // 내부함수
        x = 1000;
        console.log(x); // 1000
    }

    bar();
}
foo();
console.log(x); // 10
```

<br/>

`암묵적 전역`

-   렉시컬 스코프를 따르는 자바스크립트의 스코프 규칙에 따른다면, 함수 foo()가 선언된 시점에서 변수 y는 존재하지 않는 변수가 된다.
-   하지만 아래 상황에서 자바스크립트 엔진은 foo()함수의 값은 변수 y를 `y=20`으로 해석하여 30을 리턴한다.
-   하지만 여기서의 y는 변수로서의 y가 아니라 window 전역객체의 프로퍼티가 된다(window.y).
-   이러한 현상을 `암묵적 전역`이라고 한다.

```js
var x = 10; // 전역 변수

function foo() {
    // 선언하지 않은 식별자
    y = 20;
    console.log(x + y);
}

foo(); // 30
```

<br/>

### `렉시컬 스코프`

-   프로그래밍 언어는 동적 스코프와 렉시컬 스코프 2가지 중 하나의 방식으로 함수의 상위 스코프를 결정한다.
-   동적 스코프 : 함수를 호출하는 위치를 기준으로 스코프 결정
-   렉시컬 스코프 : 함수를 선언한 위치를 기준으로 스코프 결정
-   `자바스크립트를 비롯한 대부분의 언어는 렉시컬 스코프를 따른다.`

```js
var x = 1;

function foo() {
    var x = 10;
    bar();
}

function bar() {
    console.log(x);
}

// 렉시컬 스코프를 기준으로 하기 때문에, foo와 bar함수가 선언된 시점의 전역변수 값을 참조한다.
foo(); // 1
bar(); // 1
```

### 참고

[스코프](https://poiemaweb.com/js-scope)
