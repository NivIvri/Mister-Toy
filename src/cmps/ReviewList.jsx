import React from 'react'
import { ReviewPreview } from "./ReviewPreview.jsx";

export function ReviewList({ toy , onRemoveReview }) {
  console.log('toy.reviews');
  console.log(toy.reviews,'toy.reviews');
  return (
    <section className="review">
      {toy.reviews.map((review) => {
        return <ReviewPreview key={review.id}  onRemoveReview={onRemoveReview} review={review} />;
      })}
    </section>
  );
}

