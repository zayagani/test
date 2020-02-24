import React,{Component} from 'react';

import {
    BrowserRouter as Router, 
    Link,
    browserHistory 
  } from "react-router-dom";


class RouteComA extends Component{

    constructor(props){
        super(props);
      //  this.sendValue = this.sendValue.bind(this);    
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


render(){
    return( <div>
        <input type='text' value={this.state.userID.toUpperCase()} onChange={this.setValue} />
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