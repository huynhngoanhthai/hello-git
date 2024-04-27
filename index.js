const Human = {
    name: "thai",
    age: 12
};
const Dog = {
    name: "nick",
    age: 1
};
const listA = [Human,Dog];
const a = listA.filter(i  => i.age > 2);
console.log(a );

// if (Human) {
//     console.log(Human.name);
//     console.log(Human.name);
// };
