import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import View from './components/View';
import AddAlbum from './components/AddAlbum';
import Search from './components/Search';
import Delete from './components/Delete';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddAlbum/>}/>
      
      <Route path='/search' element={<Search/>}/>
      <Route path='/delete' element={<Delete/>}/>
      <Route path='/view' element={<View/>}/> 
    </Routes>
    </BrowserRouter>

 
  );
}

export default App;
