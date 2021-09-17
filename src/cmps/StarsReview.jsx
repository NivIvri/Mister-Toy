import { eventBusService } from "../services/event-bus.service.js";

import React from 'react'

export class StarRating extends React.Component {
  state = {
    rating: "",
    hover: "",
  };

  setRating = (idx) => {
    this.setState({ rating: idx }, () => {
      eventBusService.emit("rating", this.state.rating);
    });
  };

  setHover = (rating) => {
    this.setState({ hover: rating });
  };

  render() {
    const { hover, rating } = this.state;
    return (
      <div className="star-rating">
        {[...Array(5)].map((star, idx) => {
          idx += 1;
          return (
            <button
              type="button"
              key={idx}
              className={idx <= (hover || rating) ? "on" : "off"}
              onClick={() => this.setRating(idx)}
              onMouseEnter={() => this.setHover(idx)}
              onMouseLeave={() => this.setHover(rating)}
            >
              <span className="star">&#9733;</span>
            </button>
          );
        })}
      </div>
    );
  }
}
