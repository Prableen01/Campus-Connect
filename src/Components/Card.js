import React from 'react';
import './Card.css';

const Card = ({ subjectName, year, category, type, marks, time }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3 className="card-title">{category}</h3>
        <div className="card-details">
          <p><strong>Year:</strong> {year}</p>
          {/* <p><strong>Category:</strong> {category}</p> */}
          <p><strong>Type:</strong> {type}</p>
          <p><strong>Marks:</strong> {marks}</p>
          <p><strong>Time:</strong> {time}</p>
        </div>
        <a href="#" className="card-link">View Details</a>
      </div>
    </div>
  );
};

export default Card;
