
const object = {
  name: "Saurav",
  details: {
    age: 45,
  },
};

const newObject = JSON.parse(JSON.stringify(object));  // use spread operator for shallow copy

newObject.name = "Dhanola";
newObject.details.age = 34;

console.log(newObject);
console.log(object);



