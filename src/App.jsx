import React,{useState,useEffect} from 'react'; 
import{BrowserRouter as Router, Routes,Route} from "react-router-dom";
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";  
import './App.css';
import Etusivu_Kortti from "./Etusivu_Kortti";
import Yrytys_Haeloumake from "./Yrytys_Haeloumake";
import Henkl_HaeLoumake from "./Henkl_HaeLoumake";
import NegRes from "./NegRes";
import PstvRes from "./PstvRes";
import api from "./assets/api";

function App() {
  const [rows,setRows]=useState([])

  const getData= async function(){
    const response = await api.get("/company")
    return response.data
  }

  useEffect(()=>{
    const readData=async function(){
      const data= await getData()
      if(data)setRows(data)
    }
    readData()
  },[])

  const addRowHandler= async function(row){
    const request={...row}
    const response = await api.post("/company",request)
    setRows([...rows, response.data])
  }
  const addRow_Handler= async function(row){
    const request={...row}
    const response = await api.post("/individual",request)
    setRows([...rows, response.data])
  }

  return (
    <div className="App">
        <Router>
        <Routes>
          <Route path='/' element={<Etusivu_Kortti/>}></Route>
          <Route path='/hnkl' element={<Henkl_HaeLoumake addRow_Handler={addRow_Handler}/>}></Route>
          <Route path='/yrty' element={<Yrytys_Haeloumake rows={rows } setRows={setRows} addRowHandler={addRowHandler}/>}></Route>
          <Route path='/p_res' element={<PstvRes />}></Route>
          <Route path='/n_res' element={<NegRes />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
