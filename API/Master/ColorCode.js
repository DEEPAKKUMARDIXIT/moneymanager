const app = require('express');
const router = app.Router();
const { execCommand } = require('../../config/cmdExecution');
const { logWriter } = require('../../config/errorWrite');



router.get('/colorcode',(req,res )=>{
    var query = `Select * from colorcode where Status=1`;
    execCommand(query)
    .then(result => res.json(result))
    .catch((err) => logWriter(query, err));
})

router.post('/submitCode', (req, res) => {
    console.log(req.body);    
    var Colorname = req.body.Color_Name;
    var UserID= req.body.UserID;
    command = `INSERT INTO colorcode (ColorCode,Status,IsDeleted, CreatedBy) values ('${Colorname}','1','1', '${UserID}'`;
         execCommand(command)
        .then(result => res.json(result))
        .catch(err => logWriter(command, err));
});



router.post('/updateAllergynotes', (req,res)=>{
    var Colorname = req.body.Color_Name;
    const command =`update allergy_notes set  notes='${notes}',date='${convertedDate}' where id=${id}`;

    execCommand(command)
    .then(result => res.json('success'))
    .catch(err => logWriter(command, err));

})

module.exports = router;
// module.exports =router;