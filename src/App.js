import React, {Component} from "react";
import "./App.css";
import Bind from "./component/Bind.js";
import Product from "./component/Product.js";

export default class App extends Component {
  
  constructor(){
    super();
    this.state = {
      Ele: "" 
    }
  }

  bind(){
    this.setState({
       Ele : <Bind />
    })
  }

  change(){
    this.setState({
       Ele : <Product id="013"
       name="Johny"
       dept= "Civil"
       degree="B.E"
       cgpa= "8.02"  />
    })
  }

  render(){return (
    <div className="App">
        <h2>Choose any One</h2>
        <button onClick={()=>this.bind()}>Bind Function</button>
        <button onClick={()=>this.change()}>Map Function</button>
        {this.state.Ele}
    </div>
  );
}
}

