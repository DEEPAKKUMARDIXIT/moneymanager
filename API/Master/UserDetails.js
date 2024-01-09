const app = require('express');
const router = app.Router();
const { execCommand } = require('../../config/cmdExecution');
const { logWriter } = require('../../config/errorWrite');



router.get('/UserDetails',(req,res )=>{
    var UserID = req.body.userID
    var query = `Select * from user_details where User_Id='${UserID}' and IsActive='1' and IsDelete ='1'` ;

    execCommand(query)
    .then(result => res.json(result))
    .catch((err) => logWriter(query, err));
});


router.post('/submitusers', (req, res) => {
   
    var Username = req.body.Username;
    var UserRole = req.body.UserRole;
    var UserLoginID = req.body.UserLoginID;
    var UserPassword = req.body.UserPassword;
    var UserID= req.body.CreatedBy;
    command = `INSERT INTO user_details (User_Name, User_Role, UserLoginUserId,Use_Password, IsActive, IsDelete, Created_By) values ('${Username}', '${UserRole}', '${UserLoginID}',  '${UserPassword}', '1', '1','${UserID}')`;
         execCommand(command)
        .then(result => res.json(result))
        .catch(err => logWriter(command, err));
});


router.post('/Userlogin',(req,res)=>{
    console.log(req.body);
    var Email = req.body.Email
    var Password = req.body.Password
    const command =`select UserLoginUserId, user_name from user_details where UserLoginUserId='${Email}' and Use_Password='${Password}' and  IsActive=1 and IsDelete =0`;
    console.log(command);
    execCommand(command)
    .then(rows => res.json(rows))    
    .catch(err => logWriter(command, err));
    });

module.exports = router;