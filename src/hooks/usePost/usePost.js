import  {useState} from 'react';
import axios from 'axios';

function usePost(){
    const [loading,setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const post = async(url,apiData) => {
        try {
            setLoading(true)
            const {data: responseData} = await axios.post(url,apiData)
            setData(responseData);
            setError(null);
        } catch (err) {
            setError(err.response ? err.response.data : err.message);
            setLoading(false);
            setData(null);
        }finally{
            setLoading(false);
        }
    };
    return{data,loading,error,post};
}
export default usePost;