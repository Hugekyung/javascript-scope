let updated = {};

if (true) {
    updated = { title: "title" };
}

if (true) {
    updated = { ...updated, description: "description" };
}

let queryString = "";
Object.entries(updated).forEach((data) => {
    const key = data[0];
    const value = data[1];
    queryString += `${key}='${value}', `;
});

console.log(queryString);
