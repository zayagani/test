import React,{Component} from 'react';

import {
    BrowserRouter as Router, 
    Link,
    browserHistory 
  } from "react-router-dom";


class RouteComA extends Component{

    constructor(props){
        super(props);
        this.sendValue = this.sendValue.bind(this);    
        this.setValue = this.setValue.bind(this);
        this.state = {
          userID: ""
        };
      }

setValue(e){
    this.setState({
      userID: e.target.value
    });
  }

sendValue(e){
    alert(this.state.userID);
 e.preventDefault();
 browserHistory.push('/routecomb'); 
    
  }


render(){

    return( <div>
        <input type='text' value={this.state.userID} onChange={this.setValue} />
        <button onClick={this.sendValue}>send</button>
        

        <Link
  to={{
    pathname: "/routecomb",
    data: this.state.userID 
  }}
>CompB</Link>
      </div>)
}
}
export default RouteComA;