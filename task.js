const express = require("express");
const axios = require("axios");
const app = express();

app.get("/todos", async (req, res) => {
  const data = await axios("https://jsonplaceholder.typicode.com/todos");
  res.send(data.data);
});

app.get("/user/:id", async (req, res) => {
    const user = await req.params.id
 const data = await axios(`https://jsonplaceholder.typicode.com/users/${user}`);
res.send(data.data)

});

app.listen(8000, () => {
  console.log("server is running on 8000");
});
