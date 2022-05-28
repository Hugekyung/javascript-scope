var x = "global";

function func() {
    var y = "local";
}
func();

console.log(x); // global
// console.log(y); // y is not defined

var x = "global";

function func() {
    var x = "local";
    console.log(x);
}

func(); // local
console.log(x); // global
