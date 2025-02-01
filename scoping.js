

const users = [
  { id: 1, name: "Alice", age: 30 },
  { id: 2, name: "Bob", age: 25 }
]; 

// const updateUsers  = users.map((user)=>{
//   return user.id ===1? {...user, name: "Charlie"} : user;
// });

// console.log(updateUsers);

const updatedPerson = { ...users, name: "Charlie", city: "Los Angeles" };

console.log(updatedPerson);
/* Output:
{
  name: "Charlie",
  age: 30,
  city: "Los Angeles"
}
*/
