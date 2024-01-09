const app = require("express");
const router = app.Router();
// const db = require("../../config/db")
const { execCommand } = require("../../config/cmdExecution");
const { logWriter } = require("../../config/errorWrite");

router.get("/MasterCategoryss", (req, res) => {
  var query = `Select * from master_category where IsActive = 1`;
  execCommand(query)
    .then((result) => res.json(result))
    .catch((err) => logWriter(query, err));
});

router.post("/submit_Master_Category", (req, res) => {
  
  var CategoryName = req.body.Category_Name;
  var IconUrl = req.body.IconUrl;
  var IsDefault = req.body.IsDefault;
  var MasterExpenseType = req.body.MasterExpenseType;
  var MasterColorCode= req.body.MasterColorCode;
  var UserID= req.body.CreatedBy;
  var query = `insert into master_category (Category_Name, IconUrl, IsDefault, MasterExpenseType, MasterColorCode, IsActive, IsDeleted, CreatedBy) values ('${CategoryName}', '${IconUrl}', '${IsDefault}',  '${MasterExpenseType}', '${MasterColorCode}', '1', '1','${UserID}')`;
  console.log(query)
  execCommand(query)
    .then((result) => res.json("success"))
    .catch((err) => logWriter(query, err));
});

module.exports = router;
// module.exports =router;
