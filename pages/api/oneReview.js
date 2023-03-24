import dbConnect from '../../config/db'
import Review from '../../models/review'

export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    /* find all the data in our database */
    case 'GET':
      try {
        const pageSize = 9
        const page = Number(req.query.pageNumber) || 1
        const keyword = req.query.keyword
          ? {
              name: {
                $regex: req.query.keyword,
                $options: 'i',
              },
            }
          : {}

        const count = await Review.countDocuments({ ...keyword })
        const reviews = await Review.find({ name: 'Debbie F' })
          .limit(pageSize)
          .skip(pageSize * (page - 1))

        res.json({ reviews, page, pages: Math.ceil(count / pageSize) })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
