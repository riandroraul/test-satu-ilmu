const app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./routes/smarthphone");
const port = 5000;

require("./database");

app.use(cors({ credentials: true }));
app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/smartphones", router);

const server = app.listen(port, () => {
  console.log(`app listen at http://localhost:${port}`);
  // console.log(`app listen at *:${port}`);
});
