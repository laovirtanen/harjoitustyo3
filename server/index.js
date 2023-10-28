const express = require("express");
const mysql = require("mysql2/promise");
const config = require("./config");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = 3001;

app.get("/", async function (req, res) {
  try {
    const connection = await mysql.createConnection(config);
    const [result] = await connection.execute("SELECT * FROM item");

    if (!result.length) {
      res.status(200).json([]);
    } else {
      res.status(200).json(result);
    }

    connection.end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Palvelin käynnissä osoitteessa http://localhost:${port}`);
});
