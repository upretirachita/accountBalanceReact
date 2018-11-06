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
               incomes: [...this.state.incomes,{description:this.state.inputDescription,amount:this.state.inputAmount}]
            })
            let y =0;
            let newSum=0
       // console.log(this.state.inputDescription,incomesadded.amount);
       // console.log(...this.state.incomes,this.state.inputDescription,this.state.inputAmount);
            let x = this.state.incomes.map(income=>y+=income.amount);
            newSum = parseInt(y) +parseInt(this.state.inputAmount);
            console.log(newSum)
       // console.log(...this.state.incomes,{description:this.state.inputDescription,amount:this.state.inputAmount});      
    } 
    sumIncomes = () =>{
        this.setState({
            incomesSum:this.state.incomes.newSum
        })
        console.log(this.state.incomes.newSum)
    }
    
    /*
    totalIncome = () => {
            let sum = 0;
            for (var i = 0; i < this.incomes.length; i++) {
              sum = this.incomes[i].amount + sum;
            }
            return sum;  
            console.log(sum);
    }
    */
    addExpenses = () =>{
        
        const expensesadded = {
            description: "TravelCharge",
            amount: 500
        }
       this.setState({
        expenses: [...this.state.expenses,expensesadded]
       })
       console.log(this.state.expenses); 
    }    

    addbalance = () =>{
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
            <button onClick={this.addIncomes}>Add</button>
            <button onClick={this.sumIncomes}>Add</button>
          
          
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
                <h5>{this.state.incomes.newSum
                }</h5>
            </div>
            {/* <div className="incomesOutput"><li>Expenses:</li>{this.state.expenses.map(expense=><div><span>{expense.description}</span><span>{expense.amount}</span></div>)}</div>
            <div className="incomesOutput">Balance:</div> */}
            </div>
          </div>
        );
  }
}

export default AccountBalance;