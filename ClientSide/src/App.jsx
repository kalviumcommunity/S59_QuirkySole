  import './App.css';
  import { Routes, Route } from 'react-router-dom';
  import Home from './Pages/Home';
  import Fetch from './Pages/Fetch';
  import Review from './Pages/Review';

  function App() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/slippers" element={<Fetch  sourceCode={'slippers'} />} />
          <Route path="/crocs" element={<Fetch sourceCode={'crocs'}/>}/>
          <Route path="/review" element={<Review/>}/>
        </Routes>
      </>
    );
  }

  export default App;
