  
import './styles/index.css'
import './styles/App.css' 
 
import { PublicRoutes } from './Routes/PublicRoutes';
import { Provider, useDispatch } from 'react-redux';
import store from './Redux/store';
import { useEffect } from 'react';
import { setProfiles } from './Redux/dummyData/dummyDataSlice';
import { dummyUserProfiles } from './data/dummyData';
function App() { 

  const dispatch = useDispatch()
  useEffect(()=>{
    // dispatch(setProfiles(dummyUserProfiles))
  },[dispatch])

  return (
     <PublicRoutes/> 
  )
}

export default App
