const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("server is successfully listening on 3000");
});

app.use("/s4", (req, res) => {
  res.send("Hello from server4");
});

app.use("/hello", (req, res) => {
  res.send("Hello from server2");
});

app.use("/test", (req, res) => {
  res.send("Hello from server3");
});

// Keep "/" route at the end so it doesn't override other routes
app.use("/", (req, res) => {
  res.send("Hello from server1");
});
