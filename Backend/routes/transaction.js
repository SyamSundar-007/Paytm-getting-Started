const mongoose = require("mongoose");

const {Account} = require("../db");


const transferFunds = async (fromAccountId,toAccountId,amount) =>{
    //Decrement from the fromAccount
    await Account.findByIdAndUpdate(fromAccountId,{$inc:{balance:-1}})

    // Increment the balance of the toAccount
    await Account.findByIdAndUpdate(toAccountId, { $inc: { balance: amount } });
}


module.exports = {
    transferFunds,
}