import React, { useState } from 'react';

function AdminPage() {
  
  const [restaurantName, setRestaurantName] = useState('');
  const [menuFile, setMenuFile] = useState(null);
  const [address, setAddress] = useState('');
 
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('restaurantName', restaurantName);
    formData.append('menuFile', menuFile);
    formData.append('address', address);
    fetch('/api/restaurant', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  }

  function handleMenuFileChange(event) {
    setMenuFile(event.target.files[0]);
  }

  return (
    <form onSubmit={handleSubmit} className='container'>
      <div >
        <label htmlFor="restaurantName">Restaurant Name</label>
        <input
          id="restaurantName"
          type="text"
          value={restaurantName}
          onChange={event => setRestaurantName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="menuFile">Menu File</label>
        <input
          id="menuFile"
          type="file"
          onChange={handleMenuFileChange}
        />
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <textarea
          id="address"
          value={address}
          onChange={event => setAddress(event.target.value)}
        />
      </div>
      <button type="submit" className='add'>Add Restaurant</button>
    </form>
  );
}

export default AdminPage;
