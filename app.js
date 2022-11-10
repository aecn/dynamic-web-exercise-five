const express = require("express");
const firebase = require("firebase/app");
const app = express();
const port = process.env.PORT || 4000;

const firebaseConfig = {
  apiKey: "AIzaSyAfU9P_-8w-xgnRrBksoBm3WlOR4YGA_Gs",
  authDomain: "exercise-five-80e59.firebaseapp.com",
  projectId: "exercise-five-80e59",
  storageBucket: "exercise-five-80e59.appspot.com",
  messagingSenderId: "896572477278",
  appId: "1:896572477278:web:143fa3dddfcf49689009cf",
  measurementId: "G-86SZC48ZJH"
};
firebase.initializeApp(firebaseConfig);

const indexRoute = require("./routes/index");
const singlePostRoute = require("./routes/singlePost");
const createPostRoute = require("./routes/createPost");

app.use("/", indexRoute);
app.use("/post", singlePostRoute);
app.use("/create", createPostRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})