const express = require('express');
const MenuItem = require("../models/Menu");

const router = express.Router();


router.post("/", async (req, res) => {
    try {
      const data = req.body;
      const newMenuItem = new MenuItem(data);
      const response = await newMenuItem.save();
      console.log("Menu saved");
      res.status(200).json(response);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "internal error" });
    }
  });
  router.get("/", async (req, res) => {
    try {
      const response = await MenuItem.find();
      console.log(response);
      res.status(200).json(response);
    } catch (e) {
      console.log(error);
      res.status(500).json({ error: "internal error" });
    }
  });
  

  router.get("/:tasteitem", async (req, res) => {
    try {
      const tasteItem = req.params.tasteitem;
      if (tasteItem == "sweet" || tasteItem == "spicy" || tasteItem == "sour") {
        const response = await MenuItem.find({ taste: tasteItem });
        console.log(response);
        res.status(200).json(response);
      } else {
        res.status(404).json({ error: "internal error" });
      }
    } catch (error) {
      console.log(error);
      res.status(404).json({ error: "internal error" });
    }
  });
  



module.exports = router;