const app = require("express");
const router = app.Router();
// const db = require("../../config/db")
const { execCommand } = require("../../config/cmdExecution");
const { logWriter } = require("../../config/errorWrite");

router.get("/MasterCategoryss", (req, res) => {
  var query = `Select * from master_category`;
  execCommand(query)
    .then((result) => res.json(result))
    .catch((err) => logWriter(query, err));
});

router.post("/submit_Master_Category", (req, res) => {
  var query = `insert into master_category (Category_Name, IconUrl, IsDefault, MasterExpenseType, MasterColorCode, IsActive, IsDeleted, CreatedBy,CreatedOn) values('${req.body.Category_Name}', '${req.body.IconUrl}', '${req.body.IsDefault}', '${req.body.MasterExpenseType}', '${req.body.MasterColorCode}', '${req.body.IsActive}', '${req.body.IsDeleted}', '${req.body.CreatedBy}',now())`;


  console.log(query)
  execCommand(query)
    .then((result) => res.json("success"))
    .catch((err) => logWriter(query, err));
});

module.exports = router;
// module.exports =router;
