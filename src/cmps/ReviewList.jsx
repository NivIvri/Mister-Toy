import React from 'react'
import { connect } from 'react-redux'

import { ReviewPreview } from "./ReviewPreview.jsx";

export function ReviewList({ toy , onRemoveReview }) {
  return (
    <section className="review">
      {toy.reviews.map((review) => {
        return <ReviewPreview key={review.id}  onRemoveReview={onRemoveReview} review={review} />;
      })}
    </section>
  );
}

