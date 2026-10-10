import express from "express";

let configViewEngine = (app) => {
  //arrow function
  app.use(express.static("./src/public")); //static file
  app.set("view engine", "ejs"); //jsp, blade for if else, for loop
  app.set("views", "./src/views"); //folder views
};

module.exports = configViewEngine;
