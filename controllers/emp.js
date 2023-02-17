const Emp = require("../model/emp");


  const getEmp = (req, res) => {
    Emp.find((err, emp) => {
      if (err) {
        res.send(err);
      }
      res.json(emp);
    });
  };
  

  const getOneEmp = (req, res) => {
    Emp.findById({_id: req.params.empID},(err, emp) => {
      if (err) {
        res.send(err);
      }
      res.json(emp);
    });
  };

  const createEmp = (req, res) => {
    const emp = new Emp({
      name: req.body.name,
      surname: req.body.surname,
      position:req.body.position,
      joined_date: req.body.joined_date,
    });
  
    emp.save((err,emp) => {
      if (err) {
        res.send(err);
      }
      res.json(emp);
    });
  };

  const updateEmp = (req, res) => {
    Emp.findOneAndUpdate(
      { _id: req.params.empID },
      {
        $set: {
          name: req.body.name,
      surname: req.body.surname,
      position:req.body.position,
      joined_date: req.body.joined_date,
        },
      },
      { new: true },
      (err, Emp) => {
        if (err) {
          res.send(err);
        } else res.json(Emp);
      }
    );
  };

  const deleteEmp = (req, res) => {
  Emp.deleteOne({ _id: req.params.empID })
      .then(() => res.json({ message: "Employee Deleted" }))
      .catch((err) => res.send(err));
  };
  
  
  module.exports = {getEmp,createEmp,updateEmp,deleteEmp,getOneEmp};
  
  