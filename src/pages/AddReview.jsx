import React from 'react'
import { StarRating } from "../cmps/StarsReview.jsx";
import { eventBusService } from "../services/event-bus.service.js";
//import { utilService } from "../services/util.service.js";
import { toyService } from "../services/toy.service.js";
import { addReview, loadReviews, removeReview } from "../store/review.actions.js";
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';

class _AddReview extends React.Component {
  state = {
    review: {
      txt: null,
      rate: null,
      toyId: null
    }
  };

  componentDidMount() {

    this.removeEventBus = eventBusService.on("rating", (starsCount) => {
      this.setState((prevState) => ({
        review: { ...prevState.review, rate: starsCount },
      }));
    });

    const { toyId } = this.props.match.params
    this.props.loadReviews()
    this.setState((prevState) => ({
      review: { ...prevState.review, toyId },
    }));

  }

  componentWillUnmount() {
    this.removeEventBus();
  }

  loadToy = async () => {
    const id = this.props.match.params.toyId;
    let toy = await toyService.getById(id)
    if (!toy) this.props.history.push("/");
    this.setState({ toy });
  };

  onSaveReview = async (ev) => {
    ev.preventDefault();
    await this.props.addReview(this.state.review)
    this.props.history.push(`/toy/${this.props.match.params.toyId}`)
  };

  handleChange = ({ target }) => {
    let txt = target.value;
    this.setState((prevState) => ({
      review: { ...prevState.review, txt: txt },
    }));
  };

  render() {
    const { review } = this.state;
    console.log(review);
    //if (!review.name) return <div>loading</div>;
    return (
      <form className="add-review-container" onSubmit={this.onSaveReview}>
        <div className="reviews-add_title">
          <h1>Write a Review </h1>
        </div>
        <StarRating />
        <div>
          Your review will help millions of consumers find trustworthy online

        </div>
        <textarea
          onChange={this.handleChange}
          name="txt"
          className="textarea"
          id="review_content"
          placeholder="Write your review to help others learn about this business"
          required="required"
          rows="5"
        ></textarea>
        <div><Button onClick={this.onSaveReview} color='primary' variant="contained">Submit your review</Button>
        

        </div>
      </form>
    );
  }
}


function mapStateToProps(state) {
  return {
    user: state.userModule.user,
    reviews: state.reviewModule.reviews,
  }
}

const mapDispatchToProps = {
  addReview, loadReviews, removeReview
}

export const AddReview = connect(mapStateToProps, mapDispatchToProps)(_AddReview)

