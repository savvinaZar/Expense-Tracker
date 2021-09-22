package com.springboot.expensetracker.model;

import java.math.BigDecimal;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="expensetracker")
@Setter
@Getter
public class Expense {

	
	private Long id;
	private String expense;
	private String description;
	private BigDecimal amount;
	
	
	   public String getExpense() {
			return expense;
		}

		public void setExpense(String expense) {
			this.expense = expense;
		}

		public String getDescription() {
			return description;
		}
		
		public void setDescription(String description) {
			this.description = description;
		}


		public void setAmount(BigDecimal amount) {
			this.amount = amount;
		}
			
		public BigDecimal getAmount() {
				return amount;
		}
			
		
		

		public Expense() {
	    }

	    public Expense(Long id, String expense,String description,BigDecimal amount) {
	        this.id = id;
	        this.expense = expense;
	        this.description = description;
	        this.amount = amount; 
	    }
	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    public Long getId() {
	        return id;
	    }
	    
	    public void setId(Long id) {
	    	this.id=id;
	    }
}
