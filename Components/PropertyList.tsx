import React, { useState } from 'react';

const PropertyList = () => {
  const [properties, setProperties] = useState([
    { name: 'Luxury Villa', price: 800000, location: 'Hyderabad' },
    { name: '2BHK Apartment', price: 350000, location: 'Bangalore' }
  ]);

  const [newProperty, setNewProperty] = useState({ name: '', price: '', location: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewProperty({ ...newProperty, [e.target.name]: e.target.value });
  };

  const addProperty = () => {
    if (newProperty.name && newProperty.price && newProperty.location) {
      setProperties([...properties, {
        name: newProperty.name,
        price: parseFloat(newProperty.price),
        location: newProperty.location
      }]);
      setNewProperty({ name: '', price: '', location: '' });
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Property Listing</h2>
      <input name="name" value={newProperty.name} onChange={handleChange} placeholder="Name" />
      <input name="price" value={newProperty.price} onChange={handleChange} placeholder="Price" />
      <input name="location" value={newProperty.location} onChange={handleChange} placeholder="Location" />
      <button onClick={addProperty}>Add Property</button>

      <h3>Available Properties:</h3>
      <ul>
        {properties.map((property, index) => (
          <li key={index}>
            {property.name} - ₹{property.price} - {property.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PropertyList;
