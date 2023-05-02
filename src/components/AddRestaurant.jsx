import React, { useState } from "react";

export default function AddRestaurantForm({ onAddRestaurant }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRestaurant = {
      name,
      description,
      address,
      phone,
      image,
    };
    onAddRestaurant(newRestaurant);
    setName("");
    setDescription("");
    setAddress("");
    setPhone("");
    setImage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="phone">Phone:</label>
        <input
          type="text"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="image">Image:</label>
        <input
          type="file"
          id="image"
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <button type="submit">Add Restaurant</button>
    </form>
  );
}
