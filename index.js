const express = require("express");
const axios = require("axios");
const app = express();

app.get("/todos", async (req, res) => {
  const todoAxiosResponse = await axios("https://jsonplaceholder.typicode.com/todos");
  const todoList = await todoAxiosResponse.data.map(
    (item) =>
      (todata = {
        id: item.id,
        title: item.title,
        completed: item.completed,
      })
  );
  res.send(todoList);
});


app.get("/user/:userId", async (req, res) => {
  const userId = req.params.userId;
  const userAxiosResponse = await axios(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  const userDetails = { 
    id : userAxiosResponse.data.id,
    name : userAxiosResponse.data.name,
    email : userAxiosResponse.data.email,
    phone : userAxiosResponse.data.phone,
  }

  const userTodoAxiosResponse = await axios(
    `https://jsonplaceholder.typicode.com/users/${userId}/todos`
  );
  userDetails.todos = userTodoAxiosResponse.data.map(
    (item) =>
      (todata = {
        id: item.id,
        title: item.title,
        userId: item.userId,
        completed: item.completed,
      })
  );

  res.send(userDetails);
});

app.listen(3000, () => {
  console.log("server is running on 3000");
});
