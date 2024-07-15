import './App.css';
import Quize from './components/Quize';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchDataAsync } from './redux/questionSlice';

function App() {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchDataAsync())
  },[dispatch])

  return (
    <>
    <Quize/>
    </>
  );
}

export default App;
