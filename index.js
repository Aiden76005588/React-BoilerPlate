const express = require("express");
const app = express();
const port = 5000;

const mongoose = require("mongoose");

mongoose
  .connect(
    //.env명령어로 실행하면 오류가 뜬다. 왜그럴까? 위에서 config설정 다해줬는데...
    "mongodb+srv://hyunkyu:hyunkyu1234@cluster0.vpbup.mongodb.net/gractor?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("Mongo connect"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello World"));
app.listen(port, () => console.log(`Exmple app listening on port ${port}!`));
