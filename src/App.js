
import './App.css';
import Header from './Components/Header';
import { useRoutes } from "react-router-dom";
import { routes } from './routes';
import Sidebar from './Components/Sidebar';
import {useState}  from 'react'
import MySidebar from './Components/SidebarTwo';


function App() {
  const [wideAndShort, setwideAndShort] = useState(false)
  const RoutesPath=()=>{
    const elemnt=useRoutes(routes)
    return(
      <>
      <div className='md:hidden block'>
      <Header/>

      </div>
      <div className='grid gap-5'>

      <div className={`md:col-start-1 md:col-end-3 overflow-hidden md:grid hidden`}>
        
      
        <MySidebar
        wideAndShort={wideAndShort}
        setwideAndShort={setwideAndShort}
        />
      </div>
      <div className='md:col-start-4 md:col-end-12  col-start-1 col-end-12 px-5'>
      {elemnt}
      </div>
      </div>
      </>
    )
  }
  return (
    <div className="App">
      <RoutesPath/>
    
     
    </div>
  );
}

export default App;
