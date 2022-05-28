var x = "global";

for (var i = 0; i < 10; i++) {
    console.log(i);
    x = "local";
}

console.log(x);

// let
let x = "global";

for (let i = 0; i < 5; i++) {
    console.log(i);
    let x = "block-level";
    console.log(x);
}

console.log(x);
