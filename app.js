const port = process.env.PORT || 5050;
// import packets
const path = require("path");
const express = require("express");

const app = require('./src/core/server');




// import routes
const index = require("./routes/indexRoute");


// Middlewares
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));



// index.ejs
app.use("/", index);





app.listen(port, (err) => {
  if (err) {
    console.log(err);
    process.exit(1);
  } else {
    console.log(`Server runs at port ${port}`);
  }
});
