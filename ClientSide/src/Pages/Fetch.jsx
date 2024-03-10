import { useState, useEffect } from 'react';
import Card from './Card';
import Loader from '../Components/Loader';

export default function Fetch(props) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      fetch(`https://s59-quirkysole.onrender.com/api/${props.sourceCode}`)
        .then(res => res.json())
        .then(res => {
          console.log(res);
          setData(res);
          setIsLoading(false);
        })
        .catch(err => {
          console.error("There was an error fetching data:", err);
        });
    }, []); 
     
    
    return(
        <div>
          {isLoading ? <Loader/>: null}
            <Card data={data}/>
        </div>
    )
}
