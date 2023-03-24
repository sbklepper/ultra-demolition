import axios from 'axios'
const url = 'https://ultra-demolition-sepia.vercel.app/api'
export const readReviews = () => axios.get(url)
const urlOne = 'https://ultra-demolition-sepia.vercel.app/api/oneReview'
export const readReview = () => axios.get(urlOne)
export const createReview = (newReview) => axios.post(url, newReview)

export const REVIEWS_PER_PAGE = 6
