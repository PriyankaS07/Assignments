function bankAcc(accName,accBalance,accNumber){
	this.accName="Priyanka",
	this.accBalance=10000,
	this.accNumber=123,
	this.withdraw = function(amt){
		return (this.accBalance=this.accBalance-amt);
	},
	this.deposit = function(amt){
		return (this.accBalance=this.accBalance+amt);
	},
	this.getAccBal = function(){
		return this.accBalance;
	}
};
b = new bankAcc();
console.log(b.withdraw(555))
console.log(b.deposit(100))
console.log(b.getAccBal())