const app = require('express');
const router = app.Router();
const { execCommand } = require('../../config/cmdExecution');
const { logWriter } = require('../../config/errorWrite');



router.get('/UserDetails',(req,res )=>{
    var query = `Select * from user_details`;
    execCommand(query)
    .then((result) => res.json("success"))
    .catch((err) => logWriter(query, err));
})


module.exports = router;
// module.exports =router;