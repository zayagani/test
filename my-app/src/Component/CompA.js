import React,{Component} from 'react';
import CompB from './CompB';


class CompA extends Component{

constructor(){

super()
this.state={count:null}

this.handleClick=this.handleClick.bind(this);
this.DecrClick=this.DecrClick.bind(this);

}

handleClick(){
//alert(this.state.count)
this.setState({
count:this.state.count+1

})

}
DecrClick(){
    this.setState({
        count:this.state.count-1
    })
}


render(){

return(<div>

<input type="button" name="submit" value="Increment"onClick={this.handleClick}/>
<input type="button" name="submit" value="Decrement" onClick={this.DecrClick}/>
<CompB data={this.state.count}/>

</div>)

}

}
export default CompA;