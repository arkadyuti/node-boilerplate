import express from "express";
import Ping from "../handlers/pingTest";

const router = express.Router();

/* GET home page. */
router.get("/ping", (req, res) => {
  Ping(req, res);
});

export default router;
