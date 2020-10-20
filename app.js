const express = require("express");

const app = express();
const port = 4000; // port 3000 is what create react app uses,
//so we can run this and react at the same time

const indexRoute = require("./routes/index.js");
const aboutRoute = require("./routes/about.js");
/*---serve static files---*/
app.use("/static", express.static("public")); // allows you to see cat.png
//when you add "/static/cat.png" to the link

/*---routing in express---*/
app.use("/", indexRoute);
app.use("/about", aboutRoute);

app.listen(port, () => {
  console.log(`Exercise three is running`);
});
