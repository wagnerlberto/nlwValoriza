import express, { response } from "express";

const app = express();

app.get("/test", (request, response) => {
  return response.send("Teste de GET");
});

app.post("/test-post", (request, response) => {
  return response.send("Teste de POST");
});

app.listen(3000, () => console.log("O servidor está executando."));
