import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home' 
import Dishes from './Pages/Dishes';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/menu" element={<Dishes/>}/>           
    </Routes> 
  );
}

export default App;
