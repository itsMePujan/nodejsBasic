// const http = require("http");
// const fs = require("fs");
// const os = require("os");
// //public modules
// const properCase = require("proper-upper-case");
// const slugger = require("slugger");
// const QRCode = require("qrcode");
// const convertorCurr = require("currency-converter-lt");
// const convertor = require("./modules/lib.js");
// const propercase = require("./modules/lib.js");
// const CurrencyConverter = require("currency-converter-lt");
// const bcrypt = require("bcryptjs");

// http
//   .createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(
//       JSON.stringify({
//         data: "hello world",
//       })
//     );
//   })
//   .listen(4000);
// console.log("app is working");

// //fs readfile

// fs.readFile("helloworld.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// //fs writeFile

// // fs.writeFile("helloworld.txt", "hello world txt", function (err) {
// //   if (err) throw err;
// //   console.log("data saved!! ");
// // });

// // fs.appendFile("helloworld.txt", "hello world txt", function (err) {
// //   if (err) throw err;
// //   console.log("data saved!! ");
// // });

// // fs make dir /
// fs.mkdir("test/test.txt", { recursive: true }, (err) => {
//   if (err) throw err;
// });

// // os
// const mem = os.totalmem();
// console.log(mem);

// ////built in modules
// //http
// //os
// //fs

// // we can also make an custom module // modules/lib.js
// // const customLib = convertor.convertM(500);
// // console.log(customLib);

// //propercase

// const procase = propercase.properCase("my name is pujan poudel ");
// console.log(procase);

// // propercase using public module

// const publicProperCase = properCase("my name is pujan poudel");
// console.log(publicProperCase);

// //slugger
// const slug = slugger("my name is pujan poudel");
// console.log(slug);

// //Generate QR Code for the url on the terminal using package qrcode.
// // QRCode.toString(
// //   "This is test for qrCode",
// //   { type: "terminal" },
// //   function (err, url) {
// //     console.log(url);
// //   }
// // );

// //Write a nodejs application to convert the currency from one currency to another using package: currency-converter-It
// //const resp = CurrencyConverter.from("USD").to("NPR").amount(100).convert();

// //console.log(resp);
// //Write a nodejs application that can generate pdf using text and images. Use package: pdfkit

// //Weather API using package axios and open source weather url

// //nodemailer
// const salt = bcrypt.genSaltSync(10);
// const hash = bcrypt.hashSync("B4c0//", salt);

// console.log(hash);

const { Mailer } = require("./modules/mailer");

const sendMail = async (email, sub) => {
  return Mailer(email, sub);
};

sendMail("pujanpoudel057@gmail.con", "test").then((resp) => {
  console.log(resp);
});
