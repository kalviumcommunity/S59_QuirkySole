  import './App.css';
  import { Routes, Route } from 'react-router-dom';
  import Home from './Pages/Home';
  import Fetch from './Pages/Fetch';

  function App() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/slippers" element={<Fetch  sourceCode={'slippers'} />} />
          <Route path="/crocs" element={<Fetch sourceCode={'crocs'}/>}/>
        </Routes>
      </>
    );
  }

  export default App;
