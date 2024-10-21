import React from 'react';
import './ProfileCard.css'; // Import external stylesheet for extra customization

// ProfileCard Component
const ProfileCard = ({ name, age, location, profileImage, theme }) => {
  const isDarkMode = theme === 'dark';

  // Apply styles conditionally based on theme
  const cardStyle = {
    backgroundColor: isDarkMode ? '#333' : '#fff',
    color: isDarkMode ? '#fff' : '#000',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '100%',  
    maxWidth: '300px', 
    textAlign: 'center',
    margin: '10px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth transition for hover
  };

  return (
    <div className="card" style={cardStyle}>
      <img 
        src={profileImage} 
        alt={`${name}'s profile`} 
        style={{ width: '100px', borderRadius: '50%' }} 
      />
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
    </div>
  );
};

export default ProfileCard;
