# Expense-Tracker
Created an expense tracker web application using Angular,Java and Spring Framework along with a mySQL Database

Αρχικα δημιούργησα τη βάση μου μέσω cmd ακολουθώντας τις παρακάτω εντολές:
1)cd C:\Program Files\MySQL
2)dir
3)cd  MySQL Workbench 8.0
4)cd bin
5)mysql -u newuser -p(μετά έβαλα το password:password)
6)create database expensetrackers;
7)use expensetrackers;
8)create table ExpenseTracker(id int auto_increment not null primary key,amount decimal(40,10) not null,description varchar(500) not null);
9)show tables;
10)select * from expensetracker;

Eπίσης χρησιμοποίησα την εντολή ng new expensetracker-frontend στην Angular για να δημιουργήσω το project μου,
το ng class --skiptests για να δημιουργήσω το model,το ng c --skiptests για να δημιουργήσω το component και την ng serve για να το τρέξω. 

