const myList = {
  name: "John",
  age: 30,
  city: "New York",
  courses: { one: "Math", two: "Science" },
};

console.log(myList?.courses?.one);

if (myList?.courses?.one) {
  console.log("yes");
}
const myList2 = null;
console.log(myList2?.courses?.one); // undefined
