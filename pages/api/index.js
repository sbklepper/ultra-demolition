import dbConnect from '../../config/db'
import Review from '../../models/review'

export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    /* find all the data in our database */
    case 'GET':
      try {
        const reviews = await Review.find()

        res.json({ reviews })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      /* create a new model in the database */
      try {
        const review = await Review.create(req.body)
        res.status(201).json({ success: true, data: review })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
