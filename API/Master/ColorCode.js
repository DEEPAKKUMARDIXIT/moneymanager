const app = require('express');
const router = app.Router();
const { execCommand } = require('../../config/cmdExecution');
const { logWriter } = require('../../config/errorWrite');



router.get('/colorcode',(req,res )=>{
    var query = `Select * from colorcode`;
    execCommand(query)
    .then((result) => res.json("success"))
    .catch((err) => logWriter(query, err));
})


module.exports = router;
// module.exports =router;