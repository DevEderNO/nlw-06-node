import express, { response } from "express";

const app = express();

app.get("/test", (req, res) => {
  return res.send("Óla NLW");
});

app.post("/test-post", (req, res) => {
  return res.send("Óla NLW método POST");
});

app.listen(3000, () => console.log("🚀 Server is running"));
