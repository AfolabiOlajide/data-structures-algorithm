type AllowedTypes = String | Number | Boolean | String[];

let person: Record<string, AllowedTypes> = {
    firstName: "Olajide",
    lastName: "Afolabi",
    age: 24,
    is_active: true,
    img_urls: ["imgUrl1", "imgUrl2", "imgUrl3"],
};

console.log(person);
console.log(Object.keys(person)); // O(N)
console.log(Object.values(person)); // O(N)
console.log(Object.entries(person)); // O(N)

for (let i = 0; i < Object.keys(person).length; i++) {
    // do something
    const keys = Object.keys(person) as String[];
    console.log(person[`${keys[i]}`]);
}

console.log(Object.hasOwn(person, "latName")); // O(1)
console.log(person.hasOwnProperty("lastName")); // O(1)
