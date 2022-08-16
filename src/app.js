require("./db/connection");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const AddressRoute = require("./routes/contact");
const authRoute = require("./routes/auth");
const app = express();

//middleware
app.use(cors());
app.use(morgan("dev")); // log every request to the console
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

//contact Routes
app.get("/", (req, res) => {
  res.status(200).send("AddressBook server is Live ✌️");
});

app.use("/api", AddressRoute);
app.use("/auth", authRoute);
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).send({
      message: "Invalid Authorization token or Authorization token not found",
    });
  } else {
    next(err);
  }
});

//port
const PORT = process.env.PORT || 8082;

//starting a server
app.listen(PORT, () => {
  console.log(`Server is connecting on port ${PORT}`);
});
