const dotenv = require("dotenv").config({});
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const errorMiddleware = require("./middleware/error");
const path = require("path");
const cloudinary = require("cloudinary");
const fileUpload = require("express-fileupload");
const helmet = require("helmet");

// config path
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

const phoneRoutes = require("./routes/phone-routes");
const userRoutes = require("./routes/user-routes");

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     credentials: true,
//   })
// );
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Credentials", " true");
  res.setHeader(
    "Access-Control-Allow-Origin",
    "http://127.0.0.1:8000/",
    "https://gadgetinfo.herokuapp.com",
    "https://res.cloudinary.com/"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE"
  );
  next();
});

helmet({
  crossOriginResourcePolicy: false,
});

app.use("/api/phones", phoneRoutes);
app.use("/api/user", userRoutes);

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["*", "gap:"],
      connectSrc: [
        "http://127.0.0.1:8000/",
        "https://gadgetinfo.herokuapp.com",
      ],
      scriptSrc: [
        "'self'",
        "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js",
        "https://code.jquery.com/",
        "'unsafe-inline'",
      ],
      styleSrc: [
        "'self'",
        "https://fonts.googleapis.com",
        "https://use.fontawesome.com",
        "https://fonts.gstatic.com",

        "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",

        "'unsafe-inline'",
      ],
      fontSrc: [
        "'self'",
        "https://fonts.google.com/",
        "https://fonts.googleapis.com",
        "https://fonts.gstatic.com",
        "https://use.fontawesome.com",
      ],
      imgSrc: ["'self'", "data:", "blob:", "https://res.cloudinary.com"],
    },
  })
);

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

app.use(errorMiddleware);

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connected to database");
    });
  })
  .catch((e) => {
    console.log(e);
  });
