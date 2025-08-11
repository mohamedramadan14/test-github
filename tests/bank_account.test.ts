import { describe, it, expect } from "vitest";
import { BankAccount } from "../src/bank_account";

describe("Bank Account", ()=>{
    describe("Bank Account Creation", ()=>{
        it("Should create bank account", ()=>{
            const bankAccount = new BankAccount();
            expect(bankAccount).toBeDefined();
            expect(bankAccount.getBalance()).toBe(0);
        })
    })

    describe("Bank Account Deposit", ()=>{
        it("Should Deposit funds to bank account successfully", ()=>{
            const bank_account = new BankAccount();
            expect(bank_account).toBeDefined();

            bank_account.deposit(100);
            expect(bank_account.getBalance()).toBe(100);
        })

        it("Should throw when deposite funds that's is equal to zero or negative", () =>{
            const bankAccount = new BankAccount();
            expect(bankAccount).toBeDefined();

            expect(() => bankAccount.deposit(0)).toThrow("Can't deposit funds less than or equal to 0")
            expect(() => bankAccount.deposit(-10)).toThrow("Can't deposit funds less than or equal to 0")
        })
    })

    describe("Bank Account Withdrawal", ()=>{
        it("Should throw when withdrawal 0 or negative amount", () =>{
            const bankAccount = new BankAccount();
            expect(bankAccount).toBeDefined();

            expect(() => bankAccount.withdraw(0)).toThrow("Can't withdraw amount less or equal to 0")
            expect(() => bankAccount.withdraw(-50)).toThrow("Can't withdraw amount less or equal to 0")
        })

        it("Should throw when withdrawal funds is insufficient", ()=>{
            const bankAccount = new BankAccount();
            expect(bankAccount).toBeDefined();

            bankAccount.deposit(100);
            expect(() => bankAccount.withdraw(150)).toThrow("Insufficient funds to withdraw")
        })

        it("Should withdraw funds successfully", () =>{
            const bankAccount = new BankAccount();
            expect(bankAccount).toBeDefined();

            bankAccount.deposit(200);
            bankAccount.withdraw(100);
            expect(bankAccount.getBalance()).toBe(100);
        })
    })
})