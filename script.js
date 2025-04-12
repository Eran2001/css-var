const myList = [
  {
    name: "Item 1",
    color: "red",
  },
  {
    name: "Item 2",
    color: "blue",
  },
  {
    name: "Item 3",
    color: "green",
  },
];

const newList = { one: { name: "hello" }, two: { name: "world" } };

console.log(myList[0]?.name);
console.log(newList?.one?.name);
