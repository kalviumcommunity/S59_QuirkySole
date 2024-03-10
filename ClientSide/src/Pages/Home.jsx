import '../App.css';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import shoes from '../assets/Shoes.png';

function Home() {
  return (
    <div>
      <Navbar />

      <div className='parent'>
        <div className='banner'>
          <div className='bannerText'>
            <div className='bheading'>
              Quirky Sole
            </div>
            <div className='bdes'>
               "Dive into the world of eccentric footwear! From cozy slippers to unconventional crocs, discover the extraordinary in every step. Embrace uniqueness with our curated collection - where weird meets wonderful."
            </div>
          </div>
          <img src={shoes} className="bannerShoeimg" />
        </div>

        <div>
          <div className='categoryHeading'>
            Explore Categories
          </div>
          <div className='lines'></div>
        </div>

        <div className='blocks'>
          <Link to="/slippers" className='ab'><div className='categories'>Slippers</div></Link>
          <Link to="/crocs" className='ab'><div className='categories'>Crocs</div></Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
