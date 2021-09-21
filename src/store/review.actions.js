import { reviewService } from '../services/review.service.js'
import { socketService, SOCKET_EVENT_REVIEW_ADDED } from '../services/socket.service.js'
//import { userService } from '../services/user.service'


export function loadReviews() {
    return async dispatch => {
      try {
        const reviews = await reviewService.query()
        dispatch({ type: 'SET_REVIEWS', reviews })
        socketService.on(SOCKET_EVENT_REVIEW_ADDED, (review) =>{
          dispatch({ type: 'ADD_REVIEW', review })
        })
  
      } catch (err) {
        console.log('ReviewActions: err in loadReviews', err)
      }
    }
  }
  
  export function addReview(review) {
    return async dispatch => {
      try {
        const addedReview = await reviewService.add(review)
        console.log(addedReview,'addedReview');
        dispatch({ type: 'ADD_REVIEW', review: addedReview })
        
      } catch (err) {
        console.log('ReviewActions: err in addReview', err)
      }
    }
  }
  
  export function removeReview(reviewId) {
    return async dispatch => {
      try {
        await reviewService.remove(reviewId)
        dispatch({ type: 'REMOVE_REVIEW', reviewId })
      } catch (err) {
        console.log('ReviewActions: err in removeReview', err)
      }
    }
  }
  