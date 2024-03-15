import React, { useState, useEffect } from 'react';
import user from './../assets/user.png'

function DropDown() {
  const [response, setResponse] = useState([]);
  const [options, setOptions] = useState('All');
  const [selectedProductComments, setSelectedProductComments] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  useEffect(() => {
    fetch('https://s59-quirkysole.onrender.com/review')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setResponse(data);
      });
  }, []);

  useEffect(() => {
    if (options === 'All') {
      setSelectedProductComments(response);
    } 
    else {
      const filteredComments = response.filter(item => item.productName === options);
      setSelectedProductComments(filteredComments);
    }
  }, [options, response]);

  const productNames = [...new Set(response.map(item => item.productName).filter(Boolean))];

  const getDropdownDisplayText = () => {
    return options === 'All' ? 'Select Product from here' : options;
  };

  return (
    <div>
      <div className="dropHead">
        <div className='dropMenu'>
          <h1>Read Comments for </h1>
          <div className="dropdown" onMouseLeave={() => setIsDropdownVisible(false)}>
            
            <h1 className='menu' onMouseOver={() => setIsDropdownVisible(true)}>{getDropdownDisplayText()}</h1>
            {isDropdownVisible && (
              <div className="dropdown-content">

                <div onClick={() => { setOptions('All'); setIsDropdownVisible(false); }}>All</div>
                {productNames.map((name, index) => (
                  <div key={index} onClick={() => { setOptions(name); setIsDropdownVisible(false); }}>
                    {name}
                  </div>
                ))}

              </div>
            )}
          </div>
        </div>
      </div>

      <div className='lines'></div>

      <div className='dropComments'>
        {selectedProductComments.map(comment => (
          <div key={comment._id} className='comm'>
            <div className='commLine'>
              <img src={user} className="usericon" />
              <p className='iconUserName'>{comment.userName}</p>
            </div>
            <p className='TheComment'>Comment: {comment.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DropDown;
