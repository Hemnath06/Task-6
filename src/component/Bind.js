import react, { Component } from "react";
import "./Bind.css";

export default class Bind extends Component{
  constructor(){
    super();
    this.state ={
      name: "Click any Button"
    }
    this.change2 = this.change2.bind(this)
  }

  change1(){
    this.setState({
        name:"This is Bind Function Type-1" 
    })
  }

  change2(){
    this.setState({
        name:"This is Bind Function Type-2" 
    })
  }

  change3(){
    this.setState({
        name:"This is Arrow Function Type" 
    })
  }


  render(){
    return(<div className="bind">
      <h1>{this.state.name}</h1>
      <button onClick={this.change1.bind(this)}>Bind 1</button>
      <button onClick={this.change2}>Bind 2</button>
      <button onClick={()=>this.change3()}>Arrow</button>
      </div>);
  }
}