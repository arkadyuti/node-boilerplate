import express from "express";
import Ping from "../handlers/pingTest";
import path from 'path'

const router = express.Router();

const loginData = {
  india: "india123"
}

/* GET home page. */
router.get("/ping", (req, res) => {
  Ping(req, res);
});
router.post("/login", (req, res) => {
  const { email, password } = req.body
  console.log(email, password)
  if (loginData[email] == password) {
    res.send({ success: true });
    return
  }
  res.status(401).send(new Error('invalid user or passward'));
});
router.post("/signup", (req, res) => {
  const { email, password } = req.body
  console.log(email, password)
  loginData[email]=password
  res.send({ success: true });
});

router.get("*", (req, res) => {
  res.sendfile(path.join(__dirname, '../../src/', 'index.html'))
});

export default router;
