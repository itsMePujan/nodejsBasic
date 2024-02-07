const http = require("http");
const fs = require("fs");

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
