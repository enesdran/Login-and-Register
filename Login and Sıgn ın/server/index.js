const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const app = express();
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "giriş",
});

app.use(cors()); // Geri dönüsleri görmek için .
app.use(express.json()); // Dosya türüne cevirmek .
app.use(bodyParser.urlencoded({ extended: false })); // Yetkilendirme hata çözümü için kullanılır .



app.post("/api/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM login WHERE name = ? AND password = ?",
    [username, password],
    (err, result) => {
      if (err) {
        res.status(500).send(err);   // Sevver ' de gercekleşecek hata olması .
      } else if (result.length > 0) {
        res.send(result);
      } else {
        res.status(401).send("Invalid credentials"); // Yetkilendirme hatası.
      }
    }
  );
});

app.post("/api", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  const cellphoneNumber = req.body.cellphoneNumber;

  db.query(
    "INSERT INTO login (name, password, `E-posta`, `Cellphonenumber`) VALUES (?,?,?,?);",//Kullanılan işlemde yapılacak tırnak içinde yazılmalıdır .
    [username, password, email, cellphoneNumber],
    (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});
