const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const multer = require('multer') // v1.0.5
const upload = multer() // for parsing multipart/form-data


app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

let id = 2;
const todoList = [{
  id:1,
  text: '할일 1',
  done: false,
}];

app.get('/api/todo', (req, res)=>{
  res.json(todoList);
});

app.post('/api/todo', (req, res) => {
  const {text, done} = req.body;
  todoList.push({
    id: id++,
    text,
    done,
  });
  return res.send('success');
})

app.listen(3000, () => {
  console.log("server start!");
})