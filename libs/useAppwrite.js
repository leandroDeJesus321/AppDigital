import { useState, useEffect } from "react";

const useAppwrite = (fn) =>{
    const [data, setData] = useState([]);
      const [isLoading, setisLoading] = useState(true);
    
    
      useEffect(()=>{
        const fetchData = async () => {
          setisLoading(true);
          try {
            const response = await fn();
    
            setData(response);
    
          } catch (error) {
            alert("Error: ",error.message)
          }finally{
            setisLoading(false)
          }
        }
    
        fetchData();
      }, []);
    
    const refetch = () => fetchData();
    
    return {data, isLoading, refetch}
}

export default useAppwrite;