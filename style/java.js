 class BankAccount {
 
      constructor(accountNumber, balance) {
 
        this.accountNumber = accountNumber;
              this.balance = balance;
    document.write(`Your Account Balance is ${balance}`)
         
      }

      deposit(amount) {
        this.balance += amount;
        document.write(`<br> Deposited ${amount} into account ${this.accountNumber}. New balance: ${this.balance}`);
      }

      withdraw(amount) {
        if (amount <= this.balance) {
          this.balance -= amount;
          document.write(`<br> Withdrawn ${amount} from account ${this.accountNumber}. New balance: ${this.balance}`);
        } 

        else {
          document.write(`<br> Insufficient balance in account ${this.accountNumber}. Current balance: ${this.balance}`);
        }
      }
    }

     

    let account1 = new BankAccount("A12345678", 5000);
    
   let D = parseInt(prompt("Enter the Deposit Amount"));
   let W = parseInt(prompt("Enter the WithDrawn Amount"));
    
    account1.deposit(D);
    account1.withdraw(W);
