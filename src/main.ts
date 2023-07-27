import { $catch } from "ar-catch";

const url = "https://jsonplaceholder.typicode.com/todos/1";
const todo = async () => await $catch(url);

console.log(todo());

console.log(
  `%c🎉Updated ARCatch`,
  "color: #aaf; font-size: 1.2rem; font-weight: bold;"
);
