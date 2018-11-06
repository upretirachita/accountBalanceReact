import React from 'react';
import './Balance.css';

class AccountBalance extends React.Component {
    state = {
        inputDescription:"",
        inputAmount:"",
        sum:0,
        incomes:[{description:"freelancing", amount:5000},{description:"Salaray", amount:2000},{description:"Store", amount:1200}],
        expenses:[{description:"house", amount:120}],
        incomesSum:0
        }
        
    addIncomes = () =>{
            this.setState({
               incomes: [...this.state.incomes,{description:this.state.inputDescription,amount:this.state.inputAmount}],
             })
    } 

    sumIncomes = () =>{
        this.setState({
            incomesSum:newSum
            })
            let y =0;
            let newSum=0
            let x = this.state.incomes.map(income=>y+=income.amount);
            newSum = parseInt(parseInt(y) +parseInt(this.state.inputAmount));
            console.log(newSum)
            console.log(this.state.incomesSum)
    }
    addExpenses = () =>{
        this.setState({
            expenses: [...this.state.expenses,{description:this.state.inputDescription,amount:this.state.inputAmount}],
         })
}

onClick(event) {
            this.addIncomes === 'income' ? this.createIncome() : this.createExpense();
 }
    userInputDescription = (e) =>{
        this.setState({
            inputDescription:e.target.value
            })
    }
    userInputAmount = (e) =>{
        this.setState({
            inputAmount:e.target.value
            })
    }

    render() {
        return (
          <div className="App-account">
          <div className="inputData">
            Description:
              <input type="text" onChange={this.userInputDescription} />
            Amount:
              <input type="text" onChange={this.userInputAmount} />
                <select>
                    <option value="Expenses">Expences</option>
                    <option value="Incomes">Incomes</option>
                </select>
            <button  onClick={(event) => { this.addIncomes(); this.addExpenses();}}>Add</button>
            
          
            </div>
            <div className="output">
            <div className="incomesOutput">
                <h4>Incomes:</h4>
                {
                    this.state.incomes.map((income,i) => {
                        return <div key ={"id-"+i}>
                            <span>{income.description}</span>
                            <span>{income.amount}</span>
                        </div>
                    })
                }
                <h5>{this.state.incomesSum}</h5>
            </div>
            <div className="incomesOutput">
                <h4>Expenses:</h4>
                {
                    this.state.expenses.map((expense,i) => {
                        return <div key ={"id-"+i}>
                            <span>{expense.description}</span>
                            <span>{expense.amount}</span>
                        </div>
                    })
                }
                <h5>{this.state.incomesSum}</h5>
            </div>
            </div>
          </div>
        );
  }
}

export default AccountBalance;