import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './pages/home/Home';
import Register from './pages/register/Register';
import Update from './pages/update/Update';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/register' element={<Register/>}/>
      <Route path= '/update/:id' element={<Update/>}/>
      </Routes>
    </div>
  );
}

export default App;
