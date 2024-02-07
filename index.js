const http = require("http");
const fs = require("fs");
const os = require("os");
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        data: "hello world",
      })
    );
  })
  .listen(4000);
console.log("app is working");

//fs readfile

fs.readFile("helloworld.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

//fs writeFile

// fs.writeFile("helloworld.txt", "hello world txt", function (err) {
//   if (err) throw err;
//   console.log("data saved!! ");
// });

fs.appendFile("helloworld.txt", "hello world txt", function (err) {
  if (err) throw err;
  console.log("data saved!! ");
});

// fs make dir /
fs.mkdir("test/test.txt", { recursive: true }, (err) => {
  if (err) throw err;
});

// os
const mem = os.totalmem();
console.log(mem);

////built in modules
//http
//os
//fs

// we can also make an custom module
// module fie
