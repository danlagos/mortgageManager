const router = require('express').Router();

router.get("/", async (req, res) => {
  console.log('Test');
});


module.exports = router;