function SayTopic() {
  return "I am Learning File System How its Works";
}
console.log(SayTopic());

//const fs = require("node:fs");

// const data = fs.readFile("data.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });
// const ans = fs.readFileSync("demo.txt", "utf-8");
// console.log(ans);

const fs = require("node:fs");

const time1 = performance.now();
try {
  const data = fs.readFileSync("data.txt", "utf-8");
  console.log(data);
} catch (err) {
  console.error(err);
}
const time2 = performance.now();

console.log(time2 - time1);

// fs.readFile('data.txt','utf-8',(err,data)=>{
//   console.log(data)
// })
