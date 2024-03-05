import '../App.css';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import shoes from '../assets/Shoes.png'

function Home() {

  return (
    <div>
      
      <Navbar />

      <div className='parent'>
  
        <div className='banner'>

        </div>
        {/* giving links */}
        <div className='blocks'>
          <Link to="/slippers" className='ab'><div className='categories'>Slippers</div></Link>
          <Link to="/crocs" className='ab'><div className='categories'>Crocs</div></Link>
        </div>

      </div>

    </div>
  );
}

export default Home;

