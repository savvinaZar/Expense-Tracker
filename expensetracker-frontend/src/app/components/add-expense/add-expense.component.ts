import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Expense } from 'src/app/models/expense';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {

  form!: FormGroup;
  expense: Expense = new Expense();
    constructor(private _expenseService:ExpenseService,
              private _router: Router,
              private _activatedRoute:ActivatedRoute,
              private fb:FormBuilder)  {}

  public allGood:boolean=false;
  public isIdPresent:boolean=false;
  public id:any;

  ngOnInit(): void {
    this.isIdPresent=this._activatedRoute.snapshot.paramMap.has('id');
    if(this.isIdPresent){
      this.id = + this._activatedRoute.snapshot.paramMap.get('id')!;
      this._expenseService.getExpense(this.id).subscribe(data => {
        if(data){
          this.expense = data;
          this.buildForm()
          this.allGood=true;
          }
        }
      )
    }else{
      this.buildForm();
      this.allGood=true;
    }
  }

  buildForm(){
    this.form=this.fb.group({
    });
    this.form.addControl('amoun',new FormControl(this.getInfo(this.expense.amount)));
    this.form.addControl('exp',new FormControl(this.getInfo(this.expense.expense)));
    this.form.addControl('descr',new FormControl(this.getInfo(this.expense.description)));
  }

  getInfo(info:any){
    if(info){
      return info;
    }else{
      return;
    }
  }

  async errorFunction() {
    if(this.form.controls['exp'].value==null || this.form.controls['amoun'].value==null
        || this.form.controls['descr'].value==null || this.form.controls['descr'].value.length<6 || 
        this.form.controls['exp'].value=='' || this.form.controls['amoun'].value=='' || this.form.controls['descr'].value=='')
      {  console.log(this.form.value)
      if(this.form.controls['exp'].value==null || this.form.controls['exp'].value==''){
        alert("Expense must have a value")
      }
      if(this.form.controls['amoun'].value==null || this.form.controls['amoun'].value==''){ 
        alert("Amount must have number")
      }
      if(this.form.controls['descr'].value==null || this.form.controls['descr'].value=='' || this.form.controls['descr'].value.length<6){
        alert('Description must be at least 6 characters')
      }
    } else{
        this.expense.description=this.form.get('descr')?.value;
        this.expense.amount=this.form.get('amoun')?.value;
        this.expense.expense=this.form.get('exp')?.value;
        if(this.isIdPresent){
          await this._expenseService.deleteExpense(this.id);
        }
        this._expenseService.saveExpense(this.expense).subscribe(data => {
          this._router.navigateByUrl("/expenses");
      })
    }
  }

  goBack(){
    window.history.back();
  }
}
