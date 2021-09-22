import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Expense } from '../models/expense';
//The @Injectable() decorator specifies that Angular can use this class in the DI system. 
//The metadata, providedIn: 'root' , means that the ExpenseService is visible throughout the application
@Injectable({
  providedIn: 'root'
})
//export = syntax specifies a single object that is exported from the module
export class ExpenseService {

  private getUrl: string = "http://localhost:8080/api/avi/expenses";
  private _HttpClientHttp: any;
  private _httpClient: any;

  constructor(private _HttpClient:HttpClient) { }

  getExpenses():Observable<Expense[]>{
    return this._HttpClient.get<Expense[]>(this.getUrl).pipe(map(response=>response))
  }

  saveExpense(expense:Expense):Observable<Expense>{
    return this._HttpClient.post<Expense>(this.getUrl,expense);
  }
  
  getOneExpense(id:number){
    return this._HttpClient.get(this.getUrl+'/'+id)
  }

  getExpense(id: number):Observable<Expense>{
    return this._HttpClient.get<Expense>(`${this.getUrl}/${id}`).pipe(
      map(response => response)
    )
  }

  async deleteExpense(id: number){
    return await this._HttpClient.delete(`${this.getUrl}/${id}`,{responseType:'text'}).toPromise();
  }

}
