import { StarRating } from "../cmps/StarsReview.jsx";
import { eventBusService } from "../services/event-bus.service.js";
import { utilService } from "../services/util.service.js";
import React from 'react'
import { toyService } from "../services/toy.service.js";
import { connect } from 'react-redux'

class _AddReview extends React.Component {
  state = {
    toy: "",
    review: {
      userName: this.props.user.username ,
      txt: null,
      rate: null,
      name: "Toys Reader",
      date: new Date().toDateString(),
      id: utilService.makeId(),
    },
  };

  componentDidMount() {
    this.loadToy();
    this.removeEventBus = eventBusService.on("rating", (starsCount) => {
      this.setState((prevState) => ({
        review: { ...prevState.review, rate: starsCount },
      }));
    });
  }

  componentWillUnmount() {
    this.removeEventBus();
  }

  loadToy = () => {
    const id = this.props.match.params.toyId;
    toyService.getById(id).then((toy) => {
      if (!toy) this.props.history.push("/");
      this.setState({ toy });
    });
  };

  onSaveReview = (ev) => {
    ev.preventDefault();
    toyService.addReview(this.props.match.params.toyId, this.state.review)
      .then(() => {
        eventBusService.emit("user-msg", {
          txt: "review addes!",
          type: "done",
        });
      })
      .then(() => this.props.history.push(`/toy/${this.props.match.params.toyId}`));
  };

  handleChange = ({ target }) => {
    let txt = target.value;
    this.setState((prevState) => ({
      review: { ...prevState.review, txt: txt },
    }));
  };

  render() {
    const { toy } = this.state;
    if (!toy) return <div>loading</div>;
    return (
      <form className="add-review-container" onSubmit={this.onSaveReview}>
        <div className="reviews-add_title">
          Write a Review for:
          <span>{toy.title}</span>
        </div>
        <StarRating />
        <div>
          Your review will help millions of consumers find trustworthy online
          businesses and avoid scams.
        </div>
        <textarea
          onChange={this.handleChange}
          name="content"
          className="textarea"
          id="review_content"
          placeholder="Write your review to help others learn about this business"
          required="required"
          rows="5"
        ></textarea>
        <button className="add-review-btn">Submit your review</button>
      </form>
    );
  }
}


function mapStateToProps(state) {
  return {
    user: state.userModule.user
  }
}

const mapDispatchToProps = {
  
}

export const AddReview = connect(mapStateToProps, mapDispatchToProps)(_AddReview)

