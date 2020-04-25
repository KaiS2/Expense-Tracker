import React from "react";

function Adder(props) {
  return (
    <button className="adder" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

function Remover(props) {
  return (
    <button className="remover" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default class UserInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        one: '',
        two: '',
        three: '',
        delete: 0,
    }
}

  updateCatagory(e) {
    const cat = e.target.value;
    this.setState({one: cat});
  }
  updateExpense(e) {
    const cat = e.target.value;
    this.setState({two: cat});
  }
  updatePrice(e) {
    const cat = e.target.value;
    this.setState({three: cat});
  }
  updateDelete(e) {
    const cat = e.target.value;
    let i = parseInt(cat, 10);
    this.setState({delete: cat});
  }
  

  handleChange() {
    this.props.addEntry(this.state.one, this.state.two, this.state.three);
  }
  
  handleChange2() {
    this.props.removeEntry(this.state.delete);
  }

  renderAdder(x) {
    return (
    <Adder
        value={x}
        onClick={() => this.handleChange()}
    />
    );
}

  renderRemover(x) {
      return (
      <Remover
          value={x}
          onClick={() => this.handleChange2()}
      />
      );
  }

  render() {
    return (
      <div>
        {this.renderAdder('Add')}
        <div style = {{display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh'}}>
        Catagory:
        <input type="text" name="one" onChange={this.updateCatagory.bind(this)}/>     
        Expense:
        <input type="text" name="two" onChange={this.updateExpense.bind(this)}/>     
        Price:
        <input type="text" name="three" onChange={this.updatePrice.bind(this)}/>     
        </div>
        {this.renderRemover('Delete Expense')}
        <div>
        Expense #:
        <input type="text" name="one" onChange={this.updateDelete.bind(this)}/>  
        </div>
      </div>
    );
  }
}