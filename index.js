import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Bienvenido a mi api" });
});

app.listen(5000, () => console.log("servidor corriendo en pueto 5000"));
