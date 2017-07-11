var bankAcc = {
	accName:"Priyanka",
	accBalance:10000,
	accNumber:123,
	withdraw: function(amt){
		return (this.accBalance=this.accBalance-amt);
	},
	deposit:function(amt){
		return (this.accBalance=this.accBalance+amt);
	},
	getAccBal:function(){
		return this.accBalance;
	},
	getAccNumber:function(){
		return accNumber;
	}
};
console.log(bankAcc.getAccBal())
console.log(bankAcc.withdraw(100))
console.log(bankAcc.deposit(200))