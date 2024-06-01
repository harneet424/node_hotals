const express = require('express');
const Services = require("../models/service");

const router = express.Router();


router.post("/", async (req, res) => {
    try {
        const data = req.body;
        const newServices = new Services(data);
        const response = await newServices.save();
        console.log("Service saved");
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "internal error" });
    }
});

router.get("/", async (req, res) => {
    try {
        const response = await Services.find();
        console.log(response);
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "internal error" });
    }
});

router.put('/:id', async (req, res) => {
    try {

        const serciveId = req.params.id;
        const changedData = req.body;

        const response = await Service.findByIdAndUpdate(serciveId, changedData, {
            new: true,
            runValidators: true,
        });
        if (!response) {

            res.status(404).json({ message: "service not found" });
        }
        console.log('data updated');
        res.status(200).json(response);

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "internal error" });
    }
})

router.delete('/:id', async (req, res) => {
   try{
          const id = req.params.id;
          const response = await Service.findByIdAndDelete(id);
          if(!response){
              res.status(404).json({ message: "service not found" });
          }
          console.log('data deleted');
          res.status(200).json(response);
   }catch(e){
    console.log(e);
    res.status(500).json({ error: "internal error" });
   }
})
module.exports = router;