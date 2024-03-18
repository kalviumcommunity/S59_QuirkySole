  import './App.css';
  import { Routes, Route } from 'react-router-dom';
  import Home from './Pages/Home';
  import Fetch from './Pages/Fetch';
  import Review from './Pages/Review';
  import Login from './Pages/Login';
  import Register from './Pages/Register';
  import DropDown from './Pages/DropDown';

  function App() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/slippers" element={<Fetch  sourceCode={'slippers'} />} />
          <Route path="/crocs" element={<Fetch sourceCode={'crocs'}/>}/>
          <Route path="/review" element={<Review/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/dropdown" element={<DropDown/>}/>
        </Routes>
      </>
    );
  }

  export default App;
