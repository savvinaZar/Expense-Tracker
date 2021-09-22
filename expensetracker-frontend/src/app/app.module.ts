import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { RouterModule,Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { ListExpensesComponent } from './components/list-expenses/list-expenses.component';
import {HttpClient} from '@angular/common/http';
import { AddExpenseComponent } from './components/add-expense/add-expense.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routers:Routes = [
  {path:'expenses', component:ListExpensesComponent},
  {path:'addexpense', component:AddExpenseComponent},
  {path:'editexpense/:id', component:AddExpenseComponent},
  {path:'', redirectTo:'/expenses',pathMatch:'full'}

]
@NgModule({
  declarations: [
    AppComponent,
    ListExpensesComponent,
    AddExpenseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    RouterModule.forRoot(routers),
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
