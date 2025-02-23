import { useState, useEffect } from 'react';
import axios from 'axios';
import { api } from '../../constants/globalConstants';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      try {
        // Naudojame GET metodą
        const response = await axios.get(`${api}/reviews`);
        console.log('Gauti duomenys iš serverio:', response.data); // <-- ČIA PATIKRINSI!
        setReviews(response.data);
      } catch (error) {
        console.error('Klaida gaunant atsiliepimus:', error);
      }
    }
    fetchReviews();
  }, []);

  return (
    <div>
      <h1>Reviews</h1>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <strong>{review.name}</strong> ({review.email}): {review.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
