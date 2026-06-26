const express = require("express");
const router = express.Router();

router.post("/creste", (req,res) =>{
    

    
    console.log(req.body);
    
    
    console.log(req.cookies)


    res.send("post created successfully")
})



module.exports = router;