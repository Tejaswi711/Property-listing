import React from 'react';
import './App.css';

type Property = {
  id: number;
  title: string;
  price: string;
  bedrooms: number;
  image: string;
};

function App() {
  const properties: Property[] = [
    {
      id: 1,
      title: "Modern Downtown Apartment",
      price: "$350,000",
      bedrooms: 2,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 2,
      title: "Suburban Family Home",
      price: "$475,000",
      bedrooms: 4,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
  ];

  return (
    <div className="app">
      <header>
        <h1> Property Finder</h1>
      </header>
      <div className="property-list">
        {properties.map(property => (
          <div key={property.id} className="property-card">
            <img src={property.image} alt={property.title} />
            <div className="property-details">
              <h3>{property.title}</h3>
              <p>Price: {property.price}</p>
              <p>Bedrooms: {property.bedrooms}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;