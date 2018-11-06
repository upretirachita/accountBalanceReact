import React from 'react';
import './Balance.css';
// function for date and time 
function displayDateTime () {
    var today = new Date();
    var year = today.getFullYear();
    var month = new Array();
    month[0] = "1";
    month[1] = "2";
    month[2] = "3";
    month[3] = "4";
    month[4] = "5";
    month[5] = "6";
    month[6] = "7";
    month[7] = "8";
    month[8] = "9";
    month[9] = "10";
    month[10] = "11";
    month[11] = "12";
  
    var d = new Date();
    var n = month[d.getMonth()];
   
    var date = today.getDate();
    var hours = today.getHours();
    var minute = today.getMinutes();
    
  
    var newtime =(`${date}/${n}/${year} ${hours}:${minute} `); 
    return newtime ;
    
  }

  function generateID()
  {
      var number = Math.random(); 
      number.toString(10); 
      var idOutput = number.toString(10).substr(2,7); 
      return idOutput ;
  }

class AccountBalance extends React.Component {
    state = {
        inputDescription:"",
        inputAmount:"",
        sum:0,
        incomes:[{description:"freelancing", amount:5000,newtime:"06/11/2018 15:16",idOutput:"6187563"},
                {description:"Salaray", amount:2000,newtime:"07/11/2018 15:16",idOutput:"0A45RI1"},
                {description:"Store", amount:1200,newtime:"06/01/2015 5:16",idOutput:"0H245A1"}],
        expenses:[{description:"house", amount:120,newtime:"06/11/2018 5:16",idOutput:"2494458"}],
        incomesSum:0,
        sumExpenses:0,
        balances:0
        }
        
    addIncomes = () =>{
        let data = {description:this.state.inputDescription,
            amount:parseInt(this.state.inputAmount),
            newtime:displayDateTime(),
            idOutput:generateID()};
        this.state.incomes.push(data);
        this.setState({
          incomes: [...this.state.incomes],
        });
        console.log('incomes ',this.state.incomes);
      }

      sumIncomes = () =>{
        let newSum=0;
        this.state.incomes.map(income=> {return newSum += parseInt(income.amount);});
        this.state.incomesSum = newSum;
        console.log(this.state.incomesSum);
        this.setState({
          incomesSum: newSum
        });
      }
      addExpenses = () =>{
        let data = {description:this.state.inputDescription,
            amount:parseInt(this.state.inputAmount),
            newtime:displayDateTime(),
            idOutput:generateID()};
        this.state.expenses.push(data);
        this.setState({
            expenses: [...this.state.expenses],
        });
        console.log('expenses ',this.state.expenses);
      }

      sumExpenses = () =>{
        let newSum=0;
        this.state.expenses.map(expense=> {return newSum += parseInt(expense.amount);});
        this.state.expensesSum = newSum;
        console.log(this.state.expensesSum);
        this.setState({
            expensesSum: newSum
        });
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
            <button onClick={this.sumIncomes}>SumIncome</button>
            <button onClick={this.sumExpenses}>SumExpenses</button>
          
            </div>
            <div className="output">
            <div className="incomesOutput">
                <h4>Incomes:</h4>
                {
                    this.state.incomes.map((income,i) => {
                        return <div className="test" key ={"id-"+i}>
                          <span>{income.description}
                            {income.amount}
                            {income.newtime}
                            {income.idOutput}</span>
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
                            {expense.amount}
                            {expense.newtime}
                            {expense.idOutput}
                            </span>
                        </div>
                    })
                }
                <h5>{this.state.expensesSum}</h5>
            </div>
            <div className="incomesOutput">
                <h4>Balance:</h4>
                <h5>{this.state.incomesSum-this.state.expensesSum}</h5>
            </div>
            </div>
          </div>
        );
  }
}

export default AccountBalance;