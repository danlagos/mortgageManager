const mongoose = require('mongoose');

const mortgageSchema = new mongoose.Schema({
  borrowerName: {type: String}, 
  pointNumber: {type: String},
  investorNumber: {type: String},
  processor: {type: String},
  loanOfficer: {type: String},
  investor: {type: String},
  loanAmount: {type: String},
  closeOfEscrow: {type: String},
  rate: {type: String},
  rateExp: {type: String}
}, {
  timestamps: true
});

const Mortgage = mongoose.model('mortgage', mortgageSchema);

module.exports = Mortgage