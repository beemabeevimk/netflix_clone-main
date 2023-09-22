import React from 'react';
import './App.css';
import NavBar from './components/Navbar/navBar';
import Banner from './components/Banner/Banner';
import RowPost from './components/Rowpost/RowPost';
import {action,originals,Romantic} from './urls'
  
function App() {
return (

    <div className="App">

     <NavBar/>
     <Banner/>
     <RowPost  url={originals} title="Netflix Originals"   />
     <RowPost url={action} title="Action"  isSmall  />
     <RowPost url={Romantic} title="Romantic"  isSmall  />
    

    </div>

);
}

export default App;
