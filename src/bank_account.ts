

export class BankAccount{
    private balance: number = 0;
    
    getBalance():number{
        return this.balance;
    }

    deposit(amount:number){
        if(amount <= 0){
            throw new Error("Can't deposit funds less than or equal to 0");
        }
        this.balance += amount;
    }
    withdraw(amount:number){
        if(amount <= 0){
            throw new Error("Can't withdraw amount less or equal to 0");
        }
        if(amount > this.balance){
            throw new Error("Insufficient funds to withdraw");
        }
        this.balance -= amount;
    }
}