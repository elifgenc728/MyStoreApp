import {useEffect,useState} from 'react';
import axios from 'axios';

function useFetch(url){
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

   async function fetchData() {
    try {
        const  {data:responseData}  = await axios.get(url);
        setData(responseData);
        setLoading(false);
    } catch (err) {
        setError(err.message);
        setLoading(false)
    }
}
useEffect(()=>{fetchData()},[]);
return {data,loading,error};

}
export default useFetch;