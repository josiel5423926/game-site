const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const api = require("./backend/routes");

//const api = require("./backend/routes");

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({
    sucesso: true,
  });
});
app.use("/api", api);

console.log("Servidor rodando!");

const PORT = process.env.PORT;

app.listen(PORT);
//warns that it worked if you send a request on the '/' route
//comentar aqui para subir no servidor
/*  app.get("/", (req, res) => {
  res.json({
    success: true,
  });
}); 
  */
//app.use(bodyParser.json());
//app.use("/api", api);

/* if (process.env.NODE_ENV === "production") {

  app.use(express.static("frontend/build"));

  const path = require("path")
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

const PORT = process.env.PORT;

app.listen(PORT);
 */
