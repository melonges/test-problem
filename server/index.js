const express = require("express");
const DBConnection = require("./utils");
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.static('client'));



app.get('/api/search', (req, res) => {
  const searchTerm = req.query.searchTerm;
  const page = req.query.page;
  const limit = req.query.limit;
  const query = `SELECT * FROM city WHERE name LIKE ? LIMIT ${limit} OFFSET ${page * limit}`;
  const db = DBConnection.getConnection();
  db.execute(query, [`%${searchTerm}%`], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Internal server error");
    }
    res.send(result);
  })

});


app.listen(port, async () => {

  try {
    console.log(` app listening at http://localhost:${port}`);
    DBConnection.init();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
});
