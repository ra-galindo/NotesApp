const express = require('express')
const mysql = require('mysql')
const app = express()
app.use(express.json({extended: true}))
app.use(express.urlencoded())
const port = 3000

mysql.connect('')

//For security reasons I will not include the information of my database
const mysqlconnect = mysql.createConnection({
  host: 'insert_host',
  user: 'insert_user',
  password: 'insert_password',
  database: 'insert_database'
})

mysqlconnect.connect(function(err) {
  if (err) throw err;
  console.log('Successfully connected!');
  fetchData();
})

function fetchData() {
  const query = 'SELECT * accountInfo';

  connection.query(query, (err, results) => {
    if (err) throw err;
    console.log('Data fetched:', results);
  });
}

console.log("we here now");

//mysqlconnect.end();


// Endpoints to server the HTML
app.get('/', (req, res) => {
  res.sendFile("pages/index.html", {root: __dirname})
})

app.get('/login', (req, res) => {
  res.sendFile("pages/login.html", {root: __dirname})
})

app.get('/signup', (req, res) => {
  res.sendFile("pages/signup.html", {root: __dirname})
})

//Endpoints for APIs

app.post('/getnotes', (req, res) => {
  const {userToken } = req.body
  res.sendFile("pages/signup.html", {root: __dirname})
})

app.post('/login', (req, res) => {
  const {userToken } = req.body
  res.sendFile("pages/signup.html", {root: __dirname})
})

app.post('/signup', (req, res) => {
  const {userToken } = req.body
  res.sendFile("pages/signup.html", {root: __dirname})
})

app.post('/addnote', (req, res) => {
  const {userToken } = req.body
  res.sendFile("pages/signup.html", {root: __dirname})
})

app.post('/deletenote', (req, res) => {
  const {userToken } = req.body
  res.sendFile("pages/signup.html", {root: __dirname})
})



app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})