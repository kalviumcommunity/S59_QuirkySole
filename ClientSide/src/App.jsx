  import { useState, useEffect } from 'react';
  import './App.css';
  import { Routes, Route } from 'react-router-dom';
  import LandingPage from './Components/LandingPage';
  import Slippers from './Components/Slippers';

  function App() {
    const [data, setData] = useState([]);

    // Fetching the data
    useEffect(() => {
      fetch("https://s59-quirkysole.onrender.com/api/slippers")
        .then(res => res.json())
        .then(res => {
          console.log(res);
          setData(res);
        })
        .catch(err => {
          console.error("There was an error fetching data:", err);
        });
    }, []);   

    return (
      <>
      {/* Defining the routes */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/slippers" element={<Slippers data={data} />} />
        </Routes>
      </>
    );
  }

  export default App;
