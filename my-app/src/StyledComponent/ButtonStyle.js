import React,{Component} from 'react';
import styled from 'styled-components';

class ButtonStyle extends Component{

constructor(){
    super()
    this.state={name:""}

this.handleClick=this.handleClick.bind(this);
this.handleChange=this.handleChange.bind(this);
}

handleChange(e){
    this.setState({
    
        name:e.target.value
    })
        //this.setState
    }


handleClick(){

    alert(this.state.name)
}






render(){

    const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
    `;
    
    // Create a Wrapper component that'll render a <section> tag with some styles
    const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
    `;

    const Button = styled.button`
    /* Adapt the colors based on primary prop */
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 1em;
  `;

const SubmitButton=styled(Button)`
color: GREEN;
border-color: tomato;
font-size:2em;
`;


  const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: 1px solid green;
  border-radius: 3px;
  font-size:2em;
`;

    return(
<Wrapper>

<Title>

hello world
</Title>


username:<Input  type="text" value={this.state.name} onChange={this.handleChange} inputColor="green"/>
email:<Input type="text" inputColor="rebeccapurple" />
<SubmitButton onClick={this.handleClick}>Submit</SubmitButton>
</Wrapper>

   )
}



}
export default ButtonStyle;