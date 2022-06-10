import express from "express";

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json({ message: "Bienvenido a mi api" });
});

app.listen(port, () => console.log(`servidor corriendo en pueto ${port}`));
