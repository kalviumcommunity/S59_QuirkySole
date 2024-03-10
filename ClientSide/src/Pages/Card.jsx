import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';

function Card(props) {
  return (
    <>
      <Navbar/>
      <div className="container">


      {props.data.map((item)=>{
        return (
          <div key = {item.ID} className="card">

            <img src={item.imageURL} alt={item.name} className='cardImage'/>
            
            <div>

              <div className='nameAndDes'>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
              </div>

              <div className="details">
                <div className='pAndM'>
                  <div>Price: ${item.price}</div>
                  <div>Material:{item.material}</div>
                </div>
                <div className='reviewButtonDiv'>
                  <Link to="/review" state={item}><button className='rbtn'>Add to Review</button></Link>
                </div>
              </div>
              
            </div>

            
          </div>
        )
      })}

    </div>
    </>
    
  );
}

export default Card;
