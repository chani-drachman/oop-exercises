const readlineSync = require("readline-sync");
class BankAccount{
    constructor(owner, balance){
        this.owner=owner
        this.balance=balance
    }
    deposit(amount){return this.balance+=amount}
    withdraw(amount){
        if(amount>this.balance){
            throw new Error("There is not enough money in your bank account");
            } 
            else{this.balance-=amount} 
        }
    
}

class Bank {
    constructor(listOfAccounts){
        this.listOfAccounts=listOfAccounts
    }
    addAcount(account){this.listOfAccounts.push(account)}

    transfer(fromName, toName, amount){
        let fromBank=this.listOfAccounts.find(account=>{
            return account.owner===fromName
        })
        let toBank=this.listOfAccounts.find(account=>{
            return account.owner===toName
        })
        if (!fromBank || !toBank) {
            throw new Error("Account not found");
        }

        if(fromBank.balance<amount){
            throw Error("ther is not enough money in the bank account")
        }
        else{
            fromBank.balance-=amount;
            toBank.balance+=amount;
        }
    }
    showBalances(){
        this.listOfAccounts.forEach(account => {
          console.log(`owner: ${account.owner}, balance:${account.balance}`);
            
        });
        
    }
}
const myBank=new Bank([])
const name=readlineSync.question("enter your name")
const balance=Number(readlineSync.question("enter your balance"))
const newBank=new BankAccount(name,balance)
myBank.addAcount(newBank);
const deposit=Number(readlineSync.question("how much you want to deposit?"))
newBank.deposit(deposit)
const withdraw=Number(readlineSync.question("how much you want to withdraw?"))
newBank.withdraw(withdraw)

myBank.showBalances();




