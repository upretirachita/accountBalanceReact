import React from 'react';
import './Balance.css';

class AccountBalance extends React.Component {
    state = {
        inputDescription:"",
        inputAmount:"",
        sum:0,
        incomes:[{description:"freelancing", amount:5000},{description:"Salaray", amount:2000},{description:"Store", amount:1200}],
        expenses:[{description:"house", amount:120}],
        incomesSum:0,
        sumExpenses:0,
        balances:0
        }
        
    addIncomes = () =>{
            this.setState({
               incomes: [...this.state.incomes,{description:this.state.inputDescription,amount:parseInt(this.state.inputAmount)}],
             })
    } 

    sumIncomes = () =>{
        let newSum=0
        this.setState({
            incomesSum:newSum
            })
            let y =0;
            
             this.state.incomes.map(income=>y+=income.amount);
            newSum = parseInt(parseInt(y) +parseInt(this.state.inputAmount));
            console.log(newSum)
            console.log(this.state.incomesSum)
    }
    
    balance = () => { 
        let newBalance=0
        this.setState({
            balances:newBalance
            })
            let y =0;
             this.state.incomes.map(income=>y+=income.amount);
            newBalance = parseInt(parseInt(y) +parseInt(this.state.inputAmount)-10);
            console.log(newBalance)
       
    }; 

    addExpenses = () =>{
        this.setState({
            expenses: [...this.state.expenses,{description:this.state.inputDescription,amount:parseInt(this.state.inputAmount)}],
         })
}
    sumExpenses = () =>{
    let newSum1=0
    this.setState({
        expensesSum:newSum1
        })
        let y =0;
        this.state.expenses.map(expense=>y+=expense.amount);
        newSum1 = parseInt(parseInt(y) +parseInt(this.state.inputAmount));
        console.log(newSum1)
        console.log(this.state.expensesSum1)
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
            <button onClick={this.addIncomes}>AddIncomes</button>
            <button onClick={this.addExpenses}>AddExpenses</button>
            <button onClick={this.sumIncomes}>Add</button>
            <button onClick={this.balance}>Balance</button>
          
            </div>
            <div className="output">
            <div className="incomesOutput">
                <h4>Incomes:</h4>
                {
                    this.state.incomes.map((income,i) => {
                        return <div className="test" key ={"id-"+i}>
                          <span>{income.description}
                            {income.amount}</span>
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
                            <span>{expense.description}
                            {expense.amount}</span>
                        </div>
                    })
                }
                <h5>{this.state.expensesSum1}</h5>
            </div>
            <div className="incomesOutput">
                <h4>Balance:</h4>
                <h5>{this.state.balances}</h5>
            </div>
            </div>
          </div>
        );
  }
}

export default AccountBalance;