const data = { answer: "1" };

const bodyData = JSON.stringify(data);
console.log(typeof data);
const result = JSON.parse(bodyData);
console.log(typeof result);
