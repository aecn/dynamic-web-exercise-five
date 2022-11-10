const express = require("express");
const router = express.Router();
const firestore = require("firebase/firestore")
const db = firestore.getFirestore();

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

// define the home page route
router.get("/:id", (req, res) => {
  const postID = req.params.id;
  const postQuery = firestore.getDoc(firestore.doc(db, "posts", postID));
  postQuery
   .then((response) => {
     const post = response.data();
     if (!post) res.send({});
     res.send(post);
   }) 
   .catch((error) => {
     console.log(error);
     return res.send(error);
   });
 });

module.exports = router;