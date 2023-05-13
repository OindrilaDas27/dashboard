import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Feed from './components/Feed/Feed';

function App() {
  return (
    <div>
      <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<Feed />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
