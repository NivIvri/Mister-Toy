import React from 'react'
import star from '../assets/img/star.png'
export function ReviewPreview({ review, onRemoveReview }) {
  return (
    <div className="card-review">

      <div className="review-info">
        <span className="review-name"> {review.name}</span>
        <small className="review-date"> {new Date(review.date).toLocaleString('he-IL')}</small>

      </div>
      <div>
        {review.rate >= 1 && <img src={star} alt='star' />}
        {review.rate >= 2 && <img src={star} alt='star' />}
        {review.rate >= 3 && <img src={star} alt='star' />}
        {review.rate >= 4 && <img src={star} alt='star' />}
        {review.rate >= 5 && <img src={star} alt='star' />}
      </div>
      <div>{review.txt}</div>
    </div>
  );
}
