import React,{Component} from 'react';

class RouteComB extends Component{


render(){
return(<div>
    {console.log(this.props.location,"location")}
    {this.props.location.data}
     <h3>hello</h3>
     
    </div>)

}
}
export default RouteComB;