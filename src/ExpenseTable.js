import React from 'react';
import UserInput from "./UserInput";





export default class Layout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            entries: [
                {number: '', catagory: '', expense: '', price: ''}
            ],
        }
       
    }

  

    addEntry(cat, ex, p) {
        console.log('1')
        const entries = this.state.entries.slice();
        let num = this.state.entries.length;
        entries.push({number: num, catagory: cat, expense: ex, price: p});
        console.log('num add')
        console.log(num)
        this.setState({entries: entries,});
      }


    removeEntry(n) {
        if (n == 0) return;
        console.log(n)
        const entries = this.state.entries.slice();
        let num = this.state.entries.length - 1;
        console.log('num pre remove')
        console.log(num)
        if (n < 0 || n > num)  {
         return;
        } else if (n == num) {
            entries.pop();
        } else {
            entries[n] = entries.pop();
            entries[n].number = n
        }

       console.log('num post remove')
        console.log(num) 
        this.setState({
            entries: entries,
        });
      }


    renderTableData() {
        return this.state.entries.map((entry, index) => {
           const {number, catagory, expense, price } = entry //destructuring
           return (
              <tr key={number}>
                 <td>{number}</td>
                 <td>{catagory}</td>
                 <td>{expense}</td>
                 <td>{price}</td>
              </tr>
           )
        })
     }

     renderTableHeader() {
        let header = Object.keys(this.state.entries[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }
  
     render() {
        return (
           <div>
            <UserInput addEntry={this.addEntry.bind(this)} removeEntry={this.removeEntry.bind(this)}/>
              <h1 id='title'>Expenses</h1>
              <table id='students' style = {{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                 <tbody>
                    <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData()}
                 </tbody>
              </table>
           </div>
        )
     }
}



