import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subscriber } from 'rxjs';
import { Expense } from 'src/app/models/expense';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-list-expenses',
  templateUrl: './list-expenses.component.html',
  styleUrls: ['./list-expenses.component.css']
})
export class ListExpensesComponent implements OnInit {
  public totalExpenses:any;
  expenses:any[] = [];
  filters = {
    keyword:''
  }
  constructor(private _expenseService:ExpenseService) { }

  ngOnInit(): void {
    this.listExpenses();
  }

  async deleteExpense(id:number){
    await this._expenseService.deleteExpense(id);
    this.listExpenses();
  }

  listExpenses(){
    this.totalExpenses=0;
    this._expenseService.getExpenses().subscribe((data )=>{
      this.expenses = this.filterExpenses(data);
      this.expenses.forEach((k)=>{
        if(k.amount){
          this.totalExpenses+=k.amount;
        }
      })
    this.totalExpenses=(this.totalExpenses).toFixed(2);
    })
  }

  filterExpenses(expenses:Expense[]){
   return expenses.filter((e:any)=>{ 
    return e.expense?.toLowerCase().includes(this.filters.keyword.toLowerCase());
   })
  }
}
