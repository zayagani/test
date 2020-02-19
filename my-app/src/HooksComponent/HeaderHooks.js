import React ,{useState,useEffect} from 'react';
import styled from 'styled-components';

function HeadrHooks(props){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [sub, setData] = useState("");


    const Input = styled.input`
    padding: 0.5em;
    margin: 0.5em;
    color: ${props => props.inputColor || "palevioletred"};
    background: papayawhip;
    border: 1px solid green;
    border-radius: 3px;
    font-size:1.5em;
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


return(<div>

    <Input type="text" onChange={e => setName(e.target.value)}/><br/>
   {/* <Input type="password" onChange={e => setPassword(e.target.value)}/><br/>
    <Input type="email" onChange={e => setEmail(e.target.value)}/><br/>*/}
    <Button onClick={()=>setData(alert(sub))}>Submit</Button>
    <p>HeadrHooks data</p>

    </div>)
}
export default HeadrHooks;