let x = "global";

if (x === "global") {
    let x = "local";
    console.log(x); // local
}

console.log(x); // global
