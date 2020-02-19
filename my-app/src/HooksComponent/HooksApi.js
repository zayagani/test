import React ,{useState,useEffect} from 'react';

function HooksApi(){

    const [hasError, setErrors] = useState(false);
    const [planets, setPlanets] = useState({});

    useEffect(() => {
        async function fetchData() {
          const res = await fetch("https://jsonplaceholder.typicode.com/todos");
          res
            .json()
            .then(res => setPlanets(res))
            .catch(err => setErrors(err));
        }
    
        fetchData();
      });
var data=planets;
        return(<div>
{JSON.stringify(data)}

        </div>)
   





}
export default HooksApi;