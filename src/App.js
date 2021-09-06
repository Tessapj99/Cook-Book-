import React, { useState,useEffect} from 'react';
import { fetchFoods } from './Api/ApiCalls';
import SideBar from './components/SideBar';



function App() {
  const [ data, setData ] = useState({})
  const [loading, setLoading] = useState(true)
  
  const getData = async () => {
    setLoading(true)
    const result = await fetchFoods().then((resp) => resp.data);
    console.log(result.feed)
    setData(result.feed);
    setLoading(false);
   }
  useEffect(() => {
    getData();
      }, [])
  if(loading) return <>Loading...</>
  return (
    <div> 
      <SideBar data={ data }/>

    
      
    </div>
  );
}

export default App;
