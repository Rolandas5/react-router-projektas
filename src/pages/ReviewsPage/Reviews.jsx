import { useState, useEffect } from 'react';
import axios from 'axios';
import './reviews.css';
import { api } from '../../constants/globalConstants';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      try {
        // Naudojame GET metodą
        const response = await axios.get(`${api}/reviews`);
        setReviews(response.data);
      } catch (error) {
        console.error('Klaida gaunant atsiliepimus:', error);
      }
    }
    fetchReviews();
  }, []);

  return (
    <section className="reviews">
      <h2>Reviews</h2>
      <div className="reviews-list">
        {reviews.map((review) => (
          <div key={review.id} className="review-item">
            <h3>{review.name}</h3>
            <p>{review.message}</p>
            <small>{review.email}</small>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
