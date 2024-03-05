import React from 'react';

function Card(props) {
  return (
    <div className="container">

      {props.data.map((item)=>{
        return (
          <div key = {item.ID} class="card">

            <img src={item.imageURL} alt={item.name} className='divImage'/>
            
            <div>

              <div className='nameAndDes'>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
              </div>

              <div className='pAndM'>
                <div>Price: ${item.price}</div>
                <div>Material:{item.material}</div>
              </div>
              
            </div>
            
          </div>
        )
      })}

    </div>
  );
}

export default Card;