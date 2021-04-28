const router = require('express').Router();
const Mortgage = require("../models/mortgageModel")

router.post("/", (req, res) => {
  const {borrowerName, pointNumber, investorNumber, processor, loanOfficer, investor, loanAmount, closeOfEscrow, rate, rateExp} = req.body;

  const newMortgage = new Mortgage({borrowerName, pointNumber, investorNumber, processor, loanOfficer, investor, loanAmount, closeOfEscrow, rate, rateExp})

  newMortgage.save();
  
})

module.exports = router;