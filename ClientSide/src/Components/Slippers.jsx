import React from 'react';

function Slippers(props) {
  return (
    <div style={{display:"flex", justifyContent:"center",alignItems:"center",flexDirection:"column", marginTop:"25px", marginBottom:"25px"}}>
      {props.data.map((item)=>{
        return (
          <div key = {item.ID} class="card">
            <img src={item.imageURL} alt={item.name} className='divImage'/>
            <div>
              <div className='nameAndDes'>
                <h2 style={{marginBottom:"0",marginTop:"0"}}>{item.name}</h2>
                <p style={{fontSize:"20px"}}>{item.description}</p>
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

export default Slippers;
