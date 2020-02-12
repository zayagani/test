import React ,{Component} from 'react';

class CompB extends Component{

constructor(){

super()

this.state={}


}

render(){
return(
<div>

<input type="number" name="number" value={this.props.data}/>

</div>

)


}

}
export default CompB;