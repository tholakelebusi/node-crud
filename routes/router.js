const router = require("express").Router();
const { getEmp } = require("../controllers/emp");
const {createEmp } = require("../controllers/emp");
const {updateEmp} = require("../controllers/emp");
const {deleteEmp} = require("../controllers/emp");
const {getOneEmp}=require("../controllers/emp")



router.get("/Emp", getEmp)
router.get("/Emp/:empID", getOneEmp)
router.post("/Emp", createEmp)
router.put("/Emp/:empID", updateEmp)
      
router.delete("/Emp/:empID", deleteEmp)


module.exports = router;
