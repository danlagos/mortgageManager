const router = require('express').Router();

router.get("/", async (req, res) => {
  res.send(`Pipeline Manager`)
});

router.post("/", (req, res) => {
  const {borrowerName, pointNumber, investorNumber, processor, loanOfficer, investor, loanAmount, closeOfEscrow, rate, rateExp} = req.body;
  console.log(borrowerName);
})

module.exports = router;